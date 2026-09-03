import React from 'react';
import { Gift, Check } from 'lucide-react';
import { ASSETS, CONTENT_MODULES_LIST } from '../data/salesPageData';

export const ContentSection: React.FC = () => {
  return (
    <section id="content-section" className="relative bg-[#081426] py-20 lg:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0066CC] text-white font-black text-sm md:text-base uppercase tracking-wider shadow-lg">
            <Gift className="w-5 h-5" strokeWidth={2.5} />
            <span>Tudo isso está incluso no seu kit</span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Mockup with glow */}
          <div className="relative flex items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(50% 45% at 50% 50%, rgba(0, 145, 255, 0.20), transparent 70%)',
              }}
            />
            <img
              loading="lazy"
              decoding="async"
              src={ASSETS.section4Mockup}
              alt="Kit +250 Treinos Ilustrados de Karatê"
              className="relative w-full max-w-lg h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* Right: Content details card */}
          <div className="relative rounded-3xl bg-white p-8 md:p-10 shadow-2xl">
            <div className="flex justify-center -mt-14 mb-6">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0066CC] text-white font-bold text-xs uppercase tracking-wider shadow-md">
                🥋 Item 01
              </span>
            </div>

            <h3 className="text-center text-[#0A192F] font-black text-2xl sm:text-3xl md:text-4xl leading-tight">
              COLEÇÃO VISUAL DE TREINOS DE KARATÊ
            </h3>

            <p className="mt-4 text-center italic text-slate-600 text-base md:text-lg">
              Um material prático e ilustrado para estudar, revisar e praticar os fundamentos do Karatê com mais clareza e organização.
            </p>

            <ul className="mt-8 space-y-4">
              {CONTENT_MODULES_LIST.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md bg-[#16A34A]/10 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#16A34A]" strokeWidth={3.5} />
                  </span>
                  <div>
                    <span className="text-[#0A192F] font-bold text-sm md:text-base block">
                      {item.title}
                    </span>
                    <span className="text-slate-600 text-sm md:text-base block mt-0.5 leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-center font-black text-[#0066CC] text-xl md:text-2xl">
              + 4 BÔNUS EXCLUSIVOS ABAIXO 👇
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
