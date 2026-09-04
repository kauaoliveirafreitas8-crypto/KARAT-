import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const targetAudience = [
    {
      title: 'Iniciantes',
      desc: 'Para quem está começando e quer entender melhor bases, posturas e movimentos fundamentais.',
    },
    {
      title: 'Praticantes de Karatê',
      desc: 'Para quem já treina e quer revisar fundamentos, praticar sequências e reforçar a execução.',
    },
    {
      title: 'Quem sente dificuldade nas bases',
      desc: 'Para quem busca trabalhar mais firmeza, equilíbrio, posicionamento e controle durante os movimentos.',
    },
    {
      title: 'Quem quer treinar fora do Dojô',
      desc: 'Para quem deseja ter treinos organizados para consultar e praticar em casa, respeitando seus próprios limites.',
    },
    {
      title: 'Quem gosta de material visual',
      desc: 'Para quem aprende melhor observando movimentos ilustrados passo a passo.',
    },
  ];

  const notForYou = [
    'Procura substituir aulas presenciais ou a orientação de um professor.',
    'Busca um material exclusivamente teórico.',
    'Não pretende praticar os fundamentos do Karatê.',
  ];

  return (
    <section id="para-quem-e" className="relative bg-[#F8FAFC] py-20 lg:py-28 px-4 sm:px-6 border-t border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        {/* Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-black text-[#0A192F] tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-tight">
            PARA QUEM É <span className="text-[#0066CC]">ESTE MATERIAL?</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            Este material é para você que quer ter uma referência visual para organizar e melhorar sua prática de Karatê.
          </p>
        </div>

        {/* Positive Audience Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudience.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl bg-white border-2 border-slate-200/90 p-7 shadow-[0_8px_25px_rgba(15,23,42,0.08)] hover:shadow-[0_16px_35px_rgba(0,102,204,0.15)] hover:border-[#0066CC] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-3.5">
                <span className="w-12 h-12 rounded-2xl bg-[#0066CC] text-white flex items-center justify-center text-2xl shrink-0 shadow-md shadow-[#0066CC]/30">
                  🥋
                </span>
                <h3 className="text-[#0A192F] font-black text-lg sm:text-xl leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Not For You Card */}
        <div className="mt-14 rounded-3xl bg-white border-2 border-rose-300 p-7 sm:p-9 md:p-11 max-w-3xl mx-auto shadow-[0_12px_35px_rgba(225,29,72,0.08)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 to-red-600" />
          
          <div className="text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-700 font-bold text-xs uppercase tracking-wider mb-2">
              Atenção
            </span>
            <h3 className="font-black text-rose-700 text-2xl sm:text-3xl tracking-wide uppercase">
              NÃO É PARA VOCÊ SE...
            </h3>
          </div>

          <ul className="mt-8 space-y-4 sm:space-y-5">
            {notForYou.map((reason, idx) => (
              <li key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-rose-50/60 border border-rose-100 text-slate-800 text-sm sm:text-base font-semibold leading-relaxed">
                <span className="w-7 h-7 rounded-lg bg-rose-200/80 text-rose-800 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  ✕
                </span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Final Conclusion & CTA */}
        <div className="mt-14 text-center max-w-3xl mx-auto">
          <p className="text-slate-800 font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Se você quer uma forma mais visual e organizada de saber o que praticar, este material foi feito para você.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              id="who-is-it-for-cta-btn"
              href="#planos"
              onClick={scrollToPricing}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 sm:px-14 py-5 sm:py-6 rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wider text-base sm:text-lg md:text-xl shadow-[0_8px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_5px_0_0_#004F9F] hover:bg-[#0055B3] active:translate-y-[4px] active:shadow-[0_2px_0_0_#004F9F] transition-all cursor-pointer animate-cta-pulse"
            >
              <span>QUERO ACESSAR OS +150 TREINOS</span>
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


