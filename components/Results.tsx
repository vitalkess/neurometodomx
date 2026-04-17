import React from 'react';
import { Check } from 'lucide-react';

export const Results: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-sage-light max-w-lg mx-auto relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-50 -translate-y-1/2 translate-x-1/2"></div>

      <h2 className="text-2xl font-extrabold text-navy mb-8 relative z-10">
        Solo 15 minutos al día:
      </h2>

      <div className="space-y-4 relative z-10">
        <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-sage/20">
          <div className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center shrink-0 text-sage mt-1">
            <Check size={18} strokeWidth={3} />
          </div>
          <div>
            <h3 className="font-bold text-navy text-lg">Mejorará la letra</h3>
            <p className="text-navy/70 mt-1">Gracias a los ejercicios de interacción interhemisférica.</p>
          </div>
        </div>

        <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-sage/20">
          <div className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center shrink-0 text-sage mt-1">
            <Check size={18} strokeWidth={3} />
          </div>
          <div>
            <h3 className="font-bold text-navy text-lg">Desaparecerán los berrinches</h3>
            <p className="text-navy/70 mt-1">Ejercicios de respiración (p. ej., «Soplar la velita»).</p>
          </div>
        </div>

        <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-sage/20">
          <div className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center shrink-0 text-sage mt-1">
            <Check size={18} strokeWidth={3} />
          </div>
          <div>
            <h3 className="font-bold text-navy text-lg">Mejorarán los resultados escolares</h3>
            <p className="text-navy/70 mt-1">Un cerebro desarrollado absorbe más rápido la información nueva.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
