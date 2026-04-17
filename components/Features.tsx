import React from 'react';
import { Move, BrainCircuit, Activity, Wind, Gift } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-sage-light max-w-lg mx-auto border-t border-gold/10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-navy">¿Qué hay adentro?</h2>
      </div>

      <div className="space-y-6">

        {/* Part 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-terracotta/10">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center text-terracotta shrink-0">
              <Move size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Parte 1. Neurojuegos para atención y energía</h3>
                <span className="text-sm font-bold text-terracotta">(52 juegos de movimiento)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0"></div>
              <span><strong>Qué hacemos:</strong> Juegos de movimiento para «reiniciar» el cerebro y aliviar la tensión.</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0"></div>
              <span><strong>Ejercicios destacados:</strong> «Oreja-Nariz», «Silencio-Susurro-Grito», «Los cuatro elementos».</span>
            </li>
          </ul>
          <div className="bg-terracotta/5 p-3 rounded-lg text-sm text-terracotta font-semibold border border-terracotta/10">
            Resultado: El niño aprende a escuchar instrucciones a la primera y controlar su cuerpo.
          </div>
        </div>

        {/* Part 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gold/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-sand/30 rounded-xl flex items-center justify-center text-navy shrink-0">
              <BrainCircuit size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Parte 2. Desarrollo cognitivo</h3>
                <span className="text-sm font-bold text-navy/60">(29 juegos lógicos)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
              <span><strong>Qué hacemos:</strong> Tareas de pensamiento espacial, concentración y memoria.</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
              <span><strong>Juegos destacados:</strong> «El número prohibido», «El escarabajo» (orientación en cuadrículas), «¿Qué cambió en la mesa?».</span>
            </li>
          </ul>
          <div className="bg-sand/20 p-3 rounded-lg text-sm text-navy font-semibold border border-gold/20">
            Resultado: El niño memoriza poemas y contenido escolar más fácilmente y se vuelve más atento.
          </div>
        </div>

        {/* Part 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sage/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center text-sage shrink-0">
              <Activity size={24} strokeWidth={2.5} />
            </div>
             <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Parte 3. Estiramiento y Cuerpo</h3>
                <span className="text-sm font-bold text-sage">(10 técnicas de relajación)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></div>
              <span><strong>Qué hacemos:</strong> Posiciones especiales para eliminar la tensión muscular.</span>
            </li>
             <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></div>
              <span><strong>Ejercicios destacados:</strong> «La Cobra», «La Medusa», «El Árbol».</span>
            </li>
          </ul>
          <div className="bg-sage-light p-3 rounded-lg text-sm text-sage font-semibold border border-sage/20">
            Resultado: Calma el sistema nervioso después de estar sentado en el pupitre o con el teléfono.
          </div>
        </div>

        {/* Part 4 - Breathing */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy shrink-0">
              <Wind size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Parte 4. Ejercicios de respiración (Antiestrés)</h3>
                <span className="text-sm font-bold text-navy/60">(26 prácticas de respiración)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Qué hacemos:</strong> Técnicas para oxigenar el cerebro y controlar las emociones.</span>
            </li>
             <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Ejercicios destacados:</strong> «La Velita», «El Globo», «Respiración nasal».</span>
            </li>
          </ul>
           <div className="bg-navy/5 p-3 rounded-lg text-sm text-navy font-semibold border border-navy/10">
            Resultado: Ayuda al niño a calmarse rápidamente durante un berrinche o antes de dormir.
          </div>
        </div>

        {/* Bonus */}
        <div className="bg-gradient-to-br from-white to-sand-light rounded-2xl p-6 shadow-md border-2 border-gold/40 relative overflow-hidden">
             {/* Decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full -mr-4 -mt-4 z-0"></div>

          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center text-navy shrink-0">
              <Gift size={24} strokeWidth={2.5} />
            </div>
            <div>
                 <h3 className="text-xl font-bold text-navy leading-tight">BONO: Cuadernos de ejercicios</h3>
                 <span className="text-sm font-bold text-navy/60">(50+ páginas de tareas)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1 relative z-10">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Grafomotricidad:</strong> «Dibujo con ambas manos» (¡sincroniza los hemisferios!).</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Lego-codificación:</strong> Esquemas listos para desarrollar la lógica a través de bloques.</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
               <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Dibujo en espejo</strong> y pixel-art («Cuadros divertidos»).</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};
