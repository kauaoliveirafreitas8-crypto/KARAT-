import React from 'react';
import { SECONDARY_MARQUEE_ITEMS } from '../data/salesPageData';

export const SecondaryMarqueeSection: React.FC = () => {
  // Duplicate the array for a seamless infinite loop
  const doubleItems = [...SECONDARY_MARQUEE_ITEMS, ...SECONDARY_MARQUEE_ITEMS];

  return (
    <section id="secondary-marquee-section" className="relative bg-[#F8FAFC] py-12 sm:py-16 overflow-hidden border-b border-slate-200">
      <div className="relative w-full overflow-hidden">
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
