import React from 'react';
import { XCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const pains = [
    {
      title: "No escucha a la primera",
      desc: "Hay que repetir las instrucciones 10 veces."
    },
    {
      title: "No puede quedarse quieto",
      desc: "No puede sentarse a hacer las tareas ni 5 minutos."
    },
    {
      title: "Confunde las letras",
      desc: "Escribe en espejo, omite sílabas o tiene mala letra."
    },
    {
      title: "Se descontrola fácilmente",
      desc: "Berrinches sin motivo, difícil de calmar."
    }
  ];

  return (
    <section className="py-12 px-4 bg-white max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-navy mt-3">
          ¿Reconoces a tu hijo?
        </h2>
      </div>

      <div className="space-y-4">
        {pains.map((item, index) => (
          <div key={index} className="flex gap-4 items-start p-5 rounded-2xl bg-sage-light/50 border border-sage/10 hover:border-sage/30 transition-colors">
            <XCircle className="w-6 h-6 text-terracotta shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-navy text-lg leading-tight">{item.title}</h3>
              <p className="text-navy/70 text-sm mt-2 font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-cream rounded-2xl border border-gold/20 text-center relative overflow-hidden">
        <p className="text-navy font-medium leading-relaxed relative z-10">
          No es <span className="text-terracotta font-extrabold">culpa del niño</span>.
          <br/>Su cerebro simplemente necesita el «combustible» y entrenamiento adecuados.
        </p>
      </div>
    </section>
  );
};
