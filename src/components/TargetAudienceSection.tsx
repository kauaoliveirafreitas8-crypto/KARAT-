import React from 'react';
import { TARGET_AUDIENCE_ITEMS } from '../data/salesPageData';

export const TargetAudienceSection: React.FC = () => {
  return (
    <section id="target-audience-section" className="relative bg-white py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-black tracking-[-0.025em] text-3xl sm:text-4xl lg:text-5xl text-[#0A192F]">
          IDEAL PARA VOCÊ
          <br />
          <span className="text-[#0066CC]">QUE DESEJA:</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TARGET_AUDIENCE_ITEMS.map(({ Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-7 shadow-sm hover:border-[#0066CC]/50 transition-colors flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-[#0066CC]/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#0066CC]" strokeWidth={2.2} />
              </div>
              <h3 className="mt-6 text-[#0A192F] font-bold text-lg whitespace-pre-line leading-tight">
                {title}
              </h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
