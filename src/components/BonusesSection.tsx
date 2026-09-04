import React from 'react';
import { Gift } from 'lucide-react';
import { BONUSES_ITEMS } from '../data/salesPageData';

export const BonusesSection: React.FC = () => {
  return (
    <section id="bonuses-section" className="relative bg-[#081426] py-20 lg:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="font-black text-3xl md:text-5xl text-white tracking-tight">
            E NÃO PARA POR AÍ....{' '}
            <span className="text-[#38BDF8]">TEM MAIS!</span>
          </h2>
          <p className="mt-4 italic text-slate-300 text-lg md:text-xl">
            Você também vai receber...
          </p>
        </div>

        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0066CC] text-white font-black text-sm md:text-base uppercase tracking-wider shadow-lg">
            <Gift className="w-5 h-5" strokeWidth={2.5} />
            <span>4 Bônus Exclusivos</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BONUSES_ITEMS.map((bonus) => (
            <div
              key={bonus.n}
              className="rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
            >
              {/* Bonus image container */}
              <div className="aspect-square bg-[#F8FAFC] flex items-center justify-center p-4 overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src={bonus.image}
                  alt={`Capa do bônus ${bonus.n} — ${bonus.title}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)]"
                />
              </div>

              {/* Bonus pill */}
              <div className="px-6 -mt-5 flex justify-center">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0066CC] text-white font-bold text-xs uppercase tracking-wider shadow-md">
                  🎁 #{bonus.n} - Bônus Hoje!
                </span>
              </div>

              {/* Bonus text */}
              <div className="p-6 md:p-8 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-[#0A192F] font-black text-lg md:text-xl">
                  {bonus.title}
                </h3>
                <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
                  {bonus.desc}
                </p>

                {/* Price tag */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-base md:text-lg">
                  <span className="text-slate-700 font-semibold">De</span>
                  <span className="text-rose-500 line-through font-black text-lg md:text-xl">
                    {bonus.originalPrice}
                  </span>
                  <span className="text-slate-400 font-bold text-lg">→</span>
                  <span className="bg-[#16A34A] text-white font-black px-4 py-1 rounded-full text-sm md:text-base tracking-wider uppercase shadow-md inline-block">
                    GRÁTIS
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
