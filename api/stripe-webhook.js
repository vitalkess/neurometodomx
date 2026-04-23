import crypto from 'crypto';

export const config = {
  api: { bodyParser: false },
};

// ===== SendPulse =====
const SP_CLIENT_ID = 'sp_id_cb7103ee1b39a4e7e6409a97c69c4e8b';
const SP_CLIENT_SECRET = 'sp_sk_cee022063fb75ff1dd6a1e09bd959d39';

async function sendPurchaseEmail_DISABLED(email, name) {
  try {
    const firstName = name && name !== '—' ? name.split(' ')[0] : 'amiga';

    const html = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F5EFE6;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5EFE6;padding:40px 20px;">
    <tr><td align="center">
      <table width="100%" style="max-width:520px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr><td style="background:#7A9A86;padding:32px 40px;text-align:center;">
          <h1 style="margin:0;color:#fff;font-size:24px;font-weight:900;">¡Tu libro ya está listo! 📚</h1>
          <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:15px;">Hola ${firstName}, gracias por tu compra 🎉</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:32px 40px;">
          <p style="margin:0 0 16px;color:#1E2A38;font-size:15px;line-height:1.6;">
            Tu pago fue confirmado. Descarga tu libro <b>Neurometodo</b> haciendo clic en el botón de abajo:
          </p>

          <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
            <tr><td align="center">
              <a href="https://neurometodo.com.mx/TSK_ES.pdf"
                 style="display:inline-block;background:#7A9A86;color:#fff;text-decoration:none;font-weight:900;font-size:16px;padding:14px 36px;border-radius:12px;box-shadow:0 4px 16px rgba(122,154,134,0.4);">
                ⬇️ Descargar Neurometodo (PDF)
              </a>
            </td></tr>
          </table>

          <p style="margin:0 0 8px;color:#1E2A38;font-size:14px;line-height:1.6;">
            También puedes copiar este enlace en tu navegador:
          </p>
          <p style="margin:0 0 24px;font-size:13px;color:#7A9A86;word-break:break-all;">
            https://neurometodo.com.mx/TSK_ES.pdf
          </p>

          <hr style="border:none;border-top:1px solid #F0EAE0;margin:0 0 24px;">

          <p style="margin:0;color:rgba(30,42,56,0.5);font-size:13px;line-height:1.5;">
            ¿Tienes algún problema? Escríbenos a
            <a href="mailto:info@neurometodo.com.mx" style="color:#7A9A86;">info@neurometodo.com.mx</a>
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#F5EFE6;padding:20px 40px;text-align:center;">
          <p style="margin:0;color:rgba(30,42,56,0.4);font-size:12px;">© ${new Date().getFullYear()} Neurometodo · México</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    await fetch('https://api.sendpulse.com/smtp/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: {
          html,
          text: `¡Tu libro ya está listo! Descarga Neurometodo aquí: https://neurometodo.com.mx/TSK_ES.pdf`,
          subject: '¡Tu libro ya está listo! 📚',
          from: { name: 'Neurometodo', email: 'info@neurometodo.com.mx' },
          to: [{ name: name !== '—' ? name : '', email }],
        },
      }),
    });
  } catch (e) {
    console.error('SendPulse email error:', e);
  }
}

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
