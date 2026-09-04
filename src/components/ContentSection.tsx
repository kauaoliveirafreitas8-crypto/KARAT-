import React from 'react';
import { Check } from 'lucide-react';
import { ASSETS, CONTENT_MODULES_LIST } from '../data/salesPageData';

export const ContentSection: React.FC = () => {
  return (
    <section id="content-section" className="relative bg-[#081426] py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Expanded Content details card */}
        <div className="relative rounded-3xl bg-white p-6 sm:p-10 md:p-12 lg:p-14 shadow-2xl">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0066CC] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md">
              🥋 Item 01
            </span>
          </div>

          <h3 className="text-center text-[#0A192F] font-black text-2xl sm:text-3xl md:text-4xl leading-tight">
            TUDO O QUE VOCÊ VAI RECEBER
          </h3>

          {/* Mockup directly below the title */}
          <div className="relative my-8 sm:my-10 flex items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(50% 45% at 50% 50%, rgba(0, 102, 204, 0.12), transparent 70%)',
              }}
            />
            <img
              loading="lazy"
              decoding="async"
              src={ASSETS.section4Mockup}
              alt="Kit +150 Treinos Ilustrados de Karatê"
              referrerPolicy="no-referrer"
              className="relative w-full max-w-2xl h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* Module List Grid */}
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {CONTENT_MODULES_LIST.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3.5 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100"
              >
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-lg bg-[#16A34A]/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#16A34A]" strokeWidth={3} />
                </span>
                <div>
                  <span className="text-[#0A192F] font-bold text-sm sm:text-base block">
                    {item.title}
                  </span>
                  <span className="text-slate-600 text-sm block mt-1 leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 sm:mt-10 text-center font-black text-[#0066CC] text-xl md:text-2xl">
            + 4 BÔNUS EXCLUSIVOS ABAIXO 👇
          </p>
        </div>
      </div>
    </section>
  );
};
