import React from 'react';
import { Brain, Zap, Printer } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  onBuyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBuyClick }) => {
  return (
    <section className="bg-gradient-to-b from-sage-light to-cream pt-8 pb-10 px-4 overflow-hidden relative">
      {/* Decorative blobs - Soft Sage and Terracotta */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sage/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-lg mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-4 bg-white/80 backdrop-blur rounded-full shadow-sm text-sm font-bold text-sage border border-sage/20">
          ✨ Éxito de ventas para padres
        </div>

        <h1 className="text-3xl font-extrabold text-navy leading-tight mb-4">
          150+ páginas de juegos que <span className="text-terracotta relative inline-block">
            «activan» el cerebro
            <svg className="absolute w-full h-2 bottom-0 left-0 text-gold/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span> de tu hijo
        </h1>

        <p className="text-navy/80 text-lg mb-6 leading-relaxed font-medium">
          Sin gadgets ni tutores. El gran libro de neuroejercícios (PDF): desde juegos de movimiento hasta tareas lógicas.
        </p>

        {/* Hero Image Representation */}
        <div className="relative mb-10 mx-auto w-4/5 transform rotate-1 hover:rotate-0 transition-transform duration-500">
          <div className="absolute inset-0 bg-navy rounded-xl transform translate-x-2 translate-y-2 opacity-5 blur-sm"></div>
          <img
            src="https://i.postimg.cc/zGnvKqfX/Generated-Image-February-17-2026-9-55PM.jpg"
            alt="Niño escribiendo con atención en su cuaderno"
            className="relative rounded-xl shadow-xl border-4 border-white w-full object-cover aspect-[3/4]"
          />
          <div className="absolute -bottom-5 -right-5 bg-navy text-white font-bold py-3 px-5 rounded-xl shadow-lg transform rotate-[-3deg] border-2 border-white/50">
            Formato PDF
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-4 text-left mb-8">
          <div className="flex items-start gap-4 bg-white/60 backdrop-blur p-4 rounded-xl shadow-sm border border-gold/20 hover:border-terracotta/30 transition-colors">
            <div className="bg-sage-light p-3 rounded-xl text-sage shrink-0">
              <Brain size={26} />
            </div>
            <div>
              <h3 className="font-bold text-navy text-lg">Enfoque científico</h3>
              <p className="text-sm text-navy/70 mt-1 font-medium">Ejercicios basados en el desarrollo de los 3 bloques del cerebro.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/60 backdrop-blur p-4 rounded-xl shadow-sm border border-gold/20 hover:border-terracotta/30 transition-colors">
            <div className="bg-sand/30 p-3 rounded-xl text-terracotta shrink-0">
              <Zap size={26} />
            </div>
            <div>
              <h3 className="font-bold text-navy text-lg">Efecto inmediato</h3>
              <p className="text-sm text-navy/70 mt-1 font-medium">El niño se vuelve más tranquilo ya desde los primeros ejercicios.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/60 backdrop-blur p-4 rounded-xl shadow-sm border border-gold/20 hover:border-terracotta/30 transition-colors">
            <div className="bg-sage-light p-3 rounded-xl text-navy shrink-0">
              <Printer size={26} />
            </div>
            <div>
              <h3 className="font-bold text-navy text-lg">Formato conveniente</h3>
              <p className="text-sm text-navy/70 mt-1 font-medium">Compras una vez — imprimes tantas copias como quieras para toda la familia.</p>
            </div>
          </div>
        </div>

        {/* Price and Button Container */}
        <div className="relative">
          {/* Price Display */}
          <div className="flex flex-col items-center justify-center mb-3">
             <div className="flex items-center gap-3">
                <span className="text-navy/40 text-lg font-bold line-through decoration-terracotta/50">$499 MXN</span>
                <div className="bg-sage text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  Descuento -70%
                </div>
             </div>
             <span className="text-4xl font-extrabold text-terracotta leading-none">$139 MXN</span>
          </div>

          <Button subtext="El PDF llegará a tu correo al instante" fullWidth onClick={onBuyClick}>
            Comprar ahora
          </Button>
        </div>
      </div>
    </section>
  );
};
