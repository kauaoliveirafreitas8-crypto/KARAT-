import React from 'react';
import { MARQUEE_ITEMS } from '../data/salesPageData';

export const MarqueeSection: React.FC = () => {
  // Duplicate the array for a seamless infinite loop
  const doubleItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section id="marquee-section" className="relative bg-[#F8FAFC] py-20 lg:py-28 overflow-hidden">
      <div className="px-6 text-center">
        <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[#0A192F] font-black tracking-[-0.025em] text-2xl sm:text-3xl lg:text-5xl">
          <span className="whitespace-nowrap">📖 CONHEÇA POR DENTRO OS</span>
          <span className="bg-[#0066CC] text-white px-3 py-0.5 rounded-md whitespace-nowrap shadow-sm">
            TREINOS ILUSTRADOS
          </span>
        </h2>
      </div>

      <div className="relative mt-14 w-full overflow-hidden">
        <div className="flex w-max gap-6 animate-marquee">
          {doubleItems.map((item, index) => (
            <div
              key={index}
              className="relative shrink-0 w-[260px] sm:w-[320px] md:w-[360px] aspect-[1055/1491] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
            >
              <img
                src={item.image}
                alt={item.alt}
                width={480}
                height={679}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
