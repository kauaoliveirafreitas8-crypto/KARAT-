import React from 'react';
import { Check, X } from 'lucide-react';
import { ASSETS, WITHOUT_TRAININGS_LIST, WITH_TRAININGS_LIST } from '../data/salesPageData';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison-section" className="relative bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-[#0A192F] font-black tracking-[-0.025em] text-2xl sm:text-3xl lg:text-5xl leading-tight">
          Veja a diferença{' '}
          <span className="bg-[#0066CC] text-white px-2.5 py-0.5 rounded-md">com o material</span>{' '}
          e{' '}
          <span className="bg-[#0A192F] text-[#38BDF8] px-2.5 py-0.5 rounded-md">sem o material</span>
        </h2>

        {/* Comparison Image / Infographic */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-slate-200">
          <img
            loading="lazy"
            decoding="async"
            src={ASSETS.comparisonImage}
            alt="Antes e depois dos treinos"
            className="w-full h-auto block object-cover"
          />
        </div>

        {/* Two Columns Comparison Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SEM OS TREINOS */}
          <div className="rounded-2xl bg-white border border-slate-200 p-7 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-5">
              <X className="w-5 h-5 text-rose-500" strokeWidth={3} />
              <h3 className="text-rose-600 font-black tracking-wide">
                SEM OS TREINOS ILUSTRADOS
              </h3>
            </div>
            <ul className="space-y-4">
              {WITHOUT_TRAININGS_LIST.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <X className="w-4 h-4 text-rose-500 mt-1 shrink-0" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COM OS TREINOS */}
          <div className="rounded-2xl bg-[#F0F7FF] border-2 border-[#0066CC] p-7 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-5">
              <Check className="w-5 h-5 text-[#16A34A]" strokeWidth={3} />
              <h3 className="text-[#0066CC] font-black tracking-wide">
                COM OS TREINOS ILUSTRADOS
              </h3>
            </div>
            <ul className="space-y-4">
              {WITH_TRAININGS_LIST.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-[#16A34A] mt-1 shrink-0" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
