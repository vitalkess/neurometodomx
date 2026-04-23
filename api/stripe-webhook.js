import crypto from 'crypto';

export const config = {
  api: { bodyParser: false },
};

// ===== SendPulse =====
const SP_CLIENT_ID = 'sp_id_cb7103ee1b39a4e7e6409a97c69c4e8b';
const SP_CLIENT_SECRET = 'sp_sk_cee022063fb75ff1dd6a1e09bd959d39';

async function addToSendPulse(email, listId) {
  try {
    const tokenRes = await fetch('https://api.sendpulse.com/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: SP_CLIENT_ID,
        client_secret: SP_CLIENT_SECRET,
      }),
    });
    const { access_token } = await tokenRes.json();

    await fetch(`https://api.sendpulse.com/addressbooks/${listId}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
      },
      body: JSON.stringify({ emails: [{ email }] }),
    });
  } catch (e) {
    console.error('SendPulse error:', e);
  }
}

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function verifyStripeSignature(payload, sig, secret) {
  const parts = sig.split(',').reduce((acc, part) => {
    const [key, val] = part.split('=');
    acc[key] = val;
    return acc;
  }, {});

  const signedPayload = `${parts.t}.${payload}`;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(signedPayload)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(parts.v1 || '', 'hex'),
    Buffer.from(expected, 'hex')
  );
}

async function sendTelegram(message) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
    }),
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const rawBody = await getRawBody(req);
  const sig = req.headers['stripe-signature'];
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  // Verify signature
  try {
    if (!verifyStripeSignature(rawBody.toString(), sig, secret)) {
      return res.status(400).send('Invalid signature');
    }
  } catch {
    return res.status(400).send('Signature error');
  }

  const event = JSON.parse(rawBody.toString());

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_details?.email || '—';
    const name = session.customer_details?.name || '—';
    const amount = ((session.amount_total || 0) / 100).toFixed(2).replace('.', ',');
    const currency = (session.currency || 'pln').toUpperCase();

    const message =
      `✅ <b>Нова оплата!</b>\n\n` +
      `💰 <b>${amount} ${currency}</b>\n` +
      `👤 ${name}\n` +
      `📧 ${email}`;

    await sendTelegram(message);

    // ===== SendPulse =====
    if (email && email !== '—') {
      const amountCents = session.amount_total;
      if (amountCents === 2997) {
        await addToSendPulse(email, '651512'); // Upsell MX
      } else {
        await addToSendPulse(email, '651512'); // NeiroBook MX — покупці
      }
    }
  }

  res.status(200).json({ received: true });
}
