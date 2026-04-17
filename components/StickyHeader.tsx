import React from 'react';
import { Clock } from 'lucide-react';

export const StickyHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gold/20 shadow-sm">
      <div className="max-w-lg mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-extrabold text-2xl tracking-tight flex items-center gap-1">
          <span className="text-navy">Neiro</span><span className="text-terracotta">Book</span>
        </div>
        <div className="flex items-center gap-1.5 bg-sage-light text-sage-800 px-3 py-1.5 rounded-full text-xs font-bold border border-sage/20">
          <Clock size={14} className="text-sage" />
          <span className="text-sage">Oferta -70%</span>
        </div>
      </div>
    </header>
  );
};
