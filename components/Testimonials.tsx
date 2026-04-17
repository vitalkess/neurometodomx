import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white max-w-lg mx-auto">
      <h2 className="text-2xl font-extrabold text-center text-navy mb-8">¿Qué dicen las mamás?</h2>

      <div className="space-y-6">
        {/* Review 1 */}
        <div className="bg-sand-light p-6 rounded-2xl border border-sand">
          <div className="flex gap-1 text-gold mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-navy/80 italic mb-4 leading-relaxed font-medium">
            "Mi hijo confundía las letras 'b' y 'd'. Hicimos los ejercicios de dibujo en espejo de la parte 3 del libro — ¡al mes el problema desapareció!"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center font-bold text-navy text-sm">M</div>
            <div>
              <p className="font-bold text-navy text-sm">María</p>
              <p className="text-xs text-navy/60">Mamá de un niño de primer grado</p>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="bg-sand-light p-6 rounded-2xl border border-sand">
          <div className="flex gap-1 text-gold mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-navy/80 italic mb-4 leading-relaxed font-medium">
            "Lo que más nos gustan son los ejercicios con Lego. Es genial: enseñar lógica con bloques."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-terracotta/20 rounded-full flex items-center justify-center font-bold text-terracotta text-sm">S</div>
            <div>
              <p className="font-bold text-navy text-sm">Sofía</p>
              <p className="text-xs text-navy/60">Mamá de Valeria de 5 años</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
