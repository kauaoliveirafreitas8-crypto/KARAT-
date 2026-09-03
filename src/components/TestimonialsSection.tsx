import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_ITEMS } from '../data/salesPageData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials-section" className="relative bg-[#F8FAFC] py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-black tracking-[-0.025em] text-3xl sm:text-4xl lg:text-5xl text-[#0A192F] uppercase">
          QUEM JÁ UTILIZA <span className="text-[#0066CC]">RECOMENDA</span>
        </h2>

        <p className="mt-4 text-center text-slate-600 text-lg max-w-2xl mx-auto">
          Praticantes que encontraram uma forma mais visual, organizada e prática de revisar os fundamentos do Karatê.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm flex flex-col h-full"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, sIdx) => (
                  <Star
                    key={sIdx}
                    className="w-5 h-5 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 italic text-base md:text-lg leading-relaxed flex-grow">
                {item.text}
              </p>

              {/* Author */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0066CC] text-white flex items-center justify-center font-bold text-xl uppercase">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#0A192F]">{item.name}</h4>
                  <span className="text-sm text-slate-500">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
