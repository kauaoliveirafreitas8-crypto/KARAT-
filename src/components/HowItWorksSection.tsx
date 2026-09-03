import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/salesPageData';

export const HowItWorksSection: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="how-it-works-section" className="relative bg-[#081426] py-20 lg:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="font-black text-3xl md:text-5xl text-white tracking-tight">
            COMECE A TREINAR{' '}
            <span className="text-[#38BDF8]">EM POUCOS MINUTOS</span>
          </h2>
          <p className="mt-3 text-slate-300">
            Do pagamento ao acesso ao material, tudo de forma simples e rápida.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.n}
                className="relative rounded-2xl bg-white border border-slate-200 p-6 pt-10 text-center shadow-xl flex flex-col items-center"
              >
                {/* Step Number Circle */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0066CC] text-white font-black text-sm flex items-center justify-center shadow-md">
                  {step.n}
                </div>

                {/* Icon Container */}
                <div className="mx-auto w-14 h-14 rounded-full bg-[#F0F7FF] border border-[#BFDBFE] flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-[#0066CC]" />
                </div>

                <h3 className="mt-5 font-black text-[#0A192F] text-lg">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm italic leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            id="how-it-works-cta-btn"
            href="#planos"
            onClick={scrollToPricing}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wide shadow-[0_6px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer animate-cta-pulse"
          >
            Quero meu acesso agora →
          </a>
        </div>
      </div>
    </section>
  );
};
