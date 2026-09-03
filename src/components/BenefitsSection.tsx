import React from 'react';
import { BENEFITS_ITEMS } from '../data/salesPageData';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits-section" className="relative bg-[#081426] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-white font-black tracking-[-0.025em] text-2xl sm:text-3xl lg:text-5xl">
          <span className="block">O QUE VAI MUDAR NA</span>
          <span className="hero-underline block mt-1">SUA FORMA DE TREINAR</span>
        </h2>
        
        <p className="mt-5 text-center text-slate-300 italic text-base sm:text-lg max-w-3xl mx-auto">
          Chega de tentar repetir movimentos sem compreender corretamente a posição dos pés, do quadril, das mãos e do corpo. Com os treinos ilustrados, você consegue visualizar cada etapa e praticar os fundamentos do Karatê de uma forma muito mais organizada.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS_ITEMS.map(({ Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 p-7 text-center shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex flex-col items-center"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-[#F0F7FF] border border-[#BFDBFE] flex items-center justify-center">
                <Icon className="w-7 h-7 text-[#0066CC]" strokeWidth={2.5} />
              </div>
              <h3 className="mt-5 text-[#0A192F] font-black text-sm sm:text-base tracking-wide whitespace-pre-line">
                {title}
              </h3>
              <p className="mt-3 text-[#475569] text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
