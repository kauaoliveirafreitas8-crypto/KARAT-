import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { PAIN_POINTS_LIST } from '../data/salesPageData';

export const PainPointsSection: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="pain-points-section" className="relative py-24 px-6 bg-[#06101E]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-[1.2] mb-6">
          <span className="block">VOCÊ TREINA, REPETE...</span>
          <span className="block mt-1">MAS AINDA SENTE QUE</span>
          <span className="block mt-1">SUA BASE NÃO ESTÁ</span>
          <span className="accent-underline accent-underline-white inline-block mt-1">
            FIRME COMO DEVERIA?
          </span>
        </h2>

        <div className="text-slate-200 text-lg md:text-xl mb-8 max-w-3xl mx-auto space-y-4">
          <p>
            Muitas vezes, o problema não está na falta de dedicação. A dificuldade pode estar em tentar repetir os movimentos sem compreender completamente a mecânica por trás deles.
          </p>
          <p>
            Quando as diferentes partes do corpo não se movimentam de forma conectada, torna-se mais difícil manter o equilíbrio e executar as sequências com qualidade.
          </p>
          <p>
            <strong className="font-bold text-[#38BDF8]">
              Os +150 treinos ilustrados foram organizados justamente para ajudar você a visualizar e corrigir esses detalhes de maneira prática.
            </strong>
          </p>
        </div>

        <ul className="space-y-3 mb-10 inline-block text-left">
          {PAIN_POINTS_LIST.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-white text-base md:text-lg font-medium">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-500/20 border border-rose-400 flex items-center justify-center">
                <X className="w-3.5 h-3.5 text-rose-300" strokeWidth={3} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <button
            id="pain-points-cta-btn"
            onClick={scrollToPricing}
            className="group inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-[#0066CC] text-white font-black text-sm md:text-base uppercase tracking-wider shadow-[0_8px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_6px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer animate-cta-pulse"
          >
            <span>Quero melhorar minha base</span>
            <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
};
