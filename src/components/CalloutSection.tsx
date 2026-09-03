import React from 'react';
import { Check } from 'lucide-react';
import { CALLOUT_RESULTS_LIST } from '../data/salesPageData';

export const CalloutSection: React.FC = () => {
  return (
    <section id="callout-section" className="relative py-24 px-6 bg-[#081426]">
      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-3xl border-2 border-[#0066CC]/40 bg-white p-10 md:p-14 shadow-2xl overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[4px] w-28 bg-[#0066CC] rounded-b-full" />
          
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0066CC] text-white font-bold text-sm uppercase tracking-wider shadow-sm">
              ⚡ Resultado prático
            </span>
          </div>

          <h2 className="text-center text-3xl md:text-5xl font-black text-[#0A192F] leading-tight mb-8">
            VOCÊ VAI{' '}
            <span className="hero-underline">PERCEBER A DIFERENÇA</span>{' '}
            <span className="block mt-1">LOGO NOS PRIMEIROS TREINOS</span>
          </h2>

          <p className="text-center text-slate-600 italic text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Imagine abrir um treino, observar a posição inicial, acompanhar cada etapa do movimento e entender exatamente o que praticar em cada sequência.
            <br />
            <br />
            É essa referência visual que os +250 treinos ilustrados foram organizados para proporcionar.
          </p>

          <ul className="space-y-4 max-w-md mx-auto">
            {CALLOUT_RESULTS_LIST.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#0A192F] font-medium">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#16A34A]" strokeWidth={3} />
                </span>
                <span className="text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
