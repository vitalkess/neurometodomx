import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight } from 'lucide-react';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with your payment provider (WayForPay, LiqPay, Stripe)
    // passing the email as a custom field.
    alert(`Procedemos al pago. El libro será enviado a: ${email}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Header decoration */}
        <div className="bg-terracotta h-2 w-full"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-navy/40 hover:text-navy transition-colors p-1"
        >
          <X size={24} />
        </button>

        <div className="p-8 pt-10 text-center">
          <div className="w-16 h-16 bg-sand-light rounded-full flex items-center justify-center mx-auto mb-5 text-terracotta relative">
            <div className="absolute inset-0 bg-terracotta/10 rounded-full animate-pulse"></div>
            <Mail size={32} />
          </div>

          <h3 className="text-2xl font-extrabold text-navy mb-2">
            ¿A dónde enviamos el libro?
          </h3>
          <p className="text-navy/60 mb-8 font-medium leading-relaxed text-sm">
            Ingresa tu correo para obtener acceso al archivo PDF y materiales adicionales inmediatamente después del pago.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative text-left">
              <label htmlFor="email" className="sr-only">Tu correo electrónico</label>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-navy/30" />
              </div>
              <input
                type="email"
                id="email"
                required
                className="block w-full pl-11 pr-4 py-4 bg-sand-light border-2 border-transparent focus:border-terracotta/50 focus:bg-white rounded-xl text-navy placeholder-navy/40 font-medium transition-all outline-none"
                placeholder="ejemplo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-terracotta/20 flex items-center justify-center gap-2 transition-all transform active:scale-95"
            >
              <span>Pagar $139 MXN</span>
              <ArrowRight size={20} className="opacity-80" />
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-navy/40 font-medium">
            <Lock size={12} />
            <span>Tus datos están seguros. Sin spam.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
