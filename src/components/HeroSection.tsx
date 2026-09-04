import React from 'react';
import { ASSETS } from '../data/salesPageData';

export const HeroSection: React.FC = () => {
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div id="top-announcement-bar" className="w-full bg-[#061426] text-[#38BDF8] border-b border-[#0091FF]/30 text-center text-[13px] sm:text-sm font-bold tracking-wide py-2.5 px-4 flex items-center justify-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span className="uppercase tracking-wider">OFERTA DISPONÍVEL APENAS HOJE</span>
      </div>

      {/* Main Hero Section */}
      <section id="hero-section" className="relative overflow-hidden bg-[#FFFFFF]">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 pt-8 sm:pt-10 lg:pt-24 pb-16 lg:pb-28">
          {/* Mobile Title */}
          <h1 className="lg:hidden relative z-10 text-center font-black text-[#0A192F] tracking-tight leading-[1.25] text-[23px] sm:text-3xl mb-4 sm:mb-6 px-1 max-w-lg mx-auto">
            <span className="block">+250 Treinos Ilustrados</span>
            <span className="block mt-1">Passo a Passo para Fortalecer a</span>
            <span className="block mt-1"><span className="text-[#0066CC]">Base no Karatê</span> de Forma Prática e Rápida</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12 items-center">
            {/* Left Column (Desktop & Tablet) */}
            <div className="relative z-10 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Desktop Title */}
              <h1 className="hidden lg:block font-black text-[#0A192F] tracking-tight leading-[1.2] lg:text-[40px] xl:text-[45px] w-full max-w-xl">
                <span className="block whitespace-nowrap">+250 Treinos Ilustrados</span>
                <span className="block mt-1">Passo a Passo para Fortalecer a</span>
                <span className="block mt-1"><span className="text-[#0066CC]">Base no Karatê</span> de Forma Prática e Rápida</span>
              </h1>

              {/* Subheadline Description */}
              <p className="mt-4 sm:mt-6 lg:mt-8 max-w-lg lg:max-w-xl mx-auto lg:mx-0 text-[16px] sm:text-[18px] leading-[1.6] text-[#334155] text-center lg:text-left [text-wrap:balance]">
                Desenvolva os principais fundamentos do Karatê através de{' '}
                <span className="text-[#0066CC] font-bold">
                  movimentos ilustrados, sequências visuais passo a passo
                </span>{' '}
                e treinos organizados para aperfeiçoar sua postura, equilíbrio, deslocamentos, golpes, defesas e coordenação.
              </p>

              {/* CTA Button */}
              <div className="mt-8 sm:mt-10 flex w-full justify-center lg:justify-start">
                <a
                  id="hero-cta-btn"
                  href="#planos"
                  onClick={scrollToPricing}
                  className="inline-flex w-full lg:w-auto items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wide text-sm sm:text-base shadow-[0_6px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer animate-cta-pulse"
                >
                  Quero adquirir o meu
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>

              {/* Delivery info box */}
              <div className="mt-6 lg:mt-8 w-full max-w-lg lg:max-w-xl rounded-xl bg-[#F0F7FF] border border-[#BFDBFE] px-4 py-3 sm:px-5 sm:py-3.5 shadow-sm text-center lg:text-left">
                <p className="text-[#0A192F] font-semibold text-[13.5px] sm:text-[15px] leading-relaxed m-0 text-center lg:text-left">
                  Receba tudo imediatamente no seu{' '}
                  <span className="inline-flex items-center gap-1 font-bold text-[#0066CC] align-middle whitespace-nowrap">
                    <img
                      src={ASSETS.gmailIcon}
                      alt=""
                      aria-hidden="true"
                      className="inline-block w-4 h-4 sm:w-4.5 sm:h-4.5 object-contain"
                    />
                    e-mail
                  </span>
                  , e acesse seu material pelo{' '}
                  <span className="whitespace-nowrap">📱 Celular</span>,{' '}
                  <span className="whitespace-nowrap">📲 Tablet</span> ou{' '}
                  <span className="whitespace-nowrap">🖥️ Desktop</span>
                </p>
              </div>
            </div>

            {/* Right Column: Hero Mockup */}
            <div className="relative w-full order-1 lg:order-2 flex items-center justify-center my-2 sm:my-4 lg:my-0">
              <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-none flex items-center justify-center">
                <img
                  src={ASSETS.heroMockup}
                  alt="Mockup da coleção +250 Treinos Ilustrados de Karatê"
                  className="w-full h-auto object-contain drop-shadow-2xl transform-none lg:-translate-y-4"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
