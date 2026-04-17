import React from 'react';
import { Button } from './Button';
import { CheckCircle } from 'lucide-react';

interface OfferProps {
  onBuyClick: () => void;
}

export const Offer: React.FC<OfferProps> = ({ onBuyClick }) => {
  return (
    <section className="py-12 px-4 bg-sand/30 max-w-lg mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-navy mb-2">El Gran Libro del Desarrollo</h2>
        <p className="text-terracotta font-medium">El sistema de los neuropsicólogos en tu hogar.</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-xl border border-sand mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-cream rounded-bl-full -mr-4 -mt-4 z-0"></div>

        <div className="relative z-10">
          <div className="inline-block bg-terracotta/10 text-terracotta text-xs font-bold px-3 py-1 rounded-full mb-4">
            LO MÁS VENDIDO
          </div>
          <h3 className="font-bold text-navy mb-6 text-lg">¿Qué recibes?</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
              <span className="text-navy/80 font-medium">Libro PDF de alta calidad (150+ páginas)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
              <span className="text-navy/80 font-medium">Ejercicios de movimiento, respiración y lógica</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
              <span className="text-navy/80 font-medium">Hojas para imprimir (infinitas)</span>
            </li>
          </ul>

          <div className="text-center mb-6 pt-6 border-t border-sand">
            <p className="text-navy/40 line-through font-medium text-lg">$499 MXN</p>
            <div className="flex items-center justify-center gap-2">
              <p className="text-5xl font-black text-navy">139</p>
              <p className="text-xl font-bold text-navy self-end mb-1.5">MXN</p>
            </div>
            <p className="text-sage text-sm font-bold mt-2 bg-sage-light inline-block px-2 py-0.5 rounded">Precio válido hoy</p>
          </div>

          <Button fullWidth subtext="Obtén acceso inmediato en tu correo" onClick={onBuyClick}>
            COMPRAR POR $139 MXN
          </Button>
        </div>
      </div>
    </section>
  );
};
