import React from 'react';
import { Clock, Check, Gift } from 'lucide-react';
import { ASSETS, CHECKOUT_LINKS } from '../data/salesPageData';

export const PricingSection: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  // Garante que parâmetros de rastreamento (UTMs, src, fbclid) sejam repassados na URL do checkout Kiwify
  const getUrlWithTracking = (baseUrl: string) => {
    if (typeof window === 'undefined') return baseUrl;
    try {
      const currentParams = new URLSearchParams(window.location.search);
      if (!currentParams.toString()) return baseUrl;
      const url = new URL(baseUrl);
      currentParams.forEach((val, key) => {
        if (!url.searchParams.has(key)) {
          url.searchParams.set(key, val);
        }
      });
      return url.toString();
    } catch {
      return baseUrl;
    }
  };

  const handleCheckoutClick = () => {
    try {
      const win = window as any;
      // Disparo direto nativo LowTrack (se disponível no objeto window)
      if (win.LowTrack && typeof win.LowTrack.trackIC === 'function') {
        win.LowTrack.trackIC();
      }
      // Disparo Meta Pixel (se inicializado pelo LowTrack)
      if (typeof win.fbq === 'function') {
        win.fbq('track', 'InitiateCheckout');
      }
    } catch (e) {
      console.warn('Tracking dispatch warning:', e);
    }
  };

  const basicPlanFeatures = [
    '+150 TREINOS ILUSTRADOS',
    'MOVIMENTOS PASSO A PASSO',
    'ACESSO IMEDIATO',
    'ACESSO VITALÍCIO',
  ];

  const completePlanFeatures = [
    { text: '+250 TREINOS ILUSTRADOS PASSO A PASSO DE KARATÊ', isBonus: false },
    { text: 'MOVIMENTOS PASSO A PASSO', isBonus: false },
    { text: 'ACESSO IMEDIATO', isBonus: false },
    { text: 'ACESSO VITALÍCIO', isBonus: false },
    { text: 'BASES E POSTURAS FUNDAMENTAIS', isBonus: false },
    { text: 'GOLPES E ATAQUES', isBonus: false },
    { text: 'DEFESAS E CONTRA-ATAQUES', isBonus: false },
    { text: 'CHUTES E CONTROLE CORPORAL', isBonus: false },
    { text: 'DESLOCAMENTOS E EQUILÍBRIO', isBonus: false },
    { text: 'COMBINAÇÕES E SEQUÊNCIAS PRÁTICAS', isBonus: false },
    { text: 'BÔNUS 1: GUIA VISUAL DE BASES E POSTURAS DO KARATÊ', isBonus: true },
    { text: 'BÔNUS 2: SEQUÊNCIAS DE KIHON PARA PRATICAR OS FUNDAMENTOS', isBonus: true },
    { text: 'BÔNUS 3: MOBILIDADE E PREPARAÇÃO PARA O TREINO', isBonus: true },
    { text: 'BÔNUS 4: CHECKLIST DE CORREÇÃO DOS FUNDAMENTOS', isBonus: true },
  ];

  return (
    <section id="planos" className="relative bg-white py-20 lg:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-black text-3xl md:text-5xl text-[#0A192F] tracking-tight">
          ESCOLHA SEU PLANO E{' '}
          <span className="text-[#0066CC]">COMECE AGORA</span>
        </h2>

        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-slate-600 text-sm sm:text-base">
          <Clock className="w-4 h-4 text-[#0066CC]" />
          <span>Oferta disponível somente hoje,</span>
          <strong className="text-[#0066CC]">{currentDate}</strong>
        </p>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#0066CC] to-[#0284C7] text-white font-black text-center py-4 px-6 shadow-lg uppercase tracking-wide text-sm md:text-base">
          ⏰ 🔥 Última chance — A oferta termina hoje!
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Plano Básico */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 md:p-10 shadow-md text-center hover:border-slate-300 transition-all">
            <h3 className="font-black text-2xl md:text-3xl text-[#0A192F]">
              PLANO BÁSICO
            </h3>

            <div className="mt-6 flex justify-center">
              <img
                loading="lazy"
                decoding="async"
                src={ASSETS.basicPlanMockup}
                alt="Coleção +150 Treinos Ilustrados de Karatê - Plano Básico"
                referrerPolicy="no-referrer"
                className="w-full max-w-[260px] h-auto object-contain"
              />
            </div>

            <ul className="mt-6 space-y-2.5 text-left max-w-xs mx-auto">
              {basicPlanFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{feat}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-rose-500 line-through text-base">
              de R$47,90 por:
            </p>
            <div className="mt-1 leading-none">
              <span className="text-6xl md:text-7xl font-black text-[#0066CC] tracking-tight">
                R$10,00
              </span>
            </div>

            <a
              id="basic-plan-cta"
              href={getUrlWithTracking(CHECKOUT_LINKS.basicPlan)}
              data-href={getUrlWithTracking(CHECKOUT_LINKS.basicPlan)}
              data-url={getUrlWithTracking(CHECKOUT_LINKS.basicPlan)}
              data-checkout-url={getUrlWithTracking(CHECKOUT_LINKS.basicPlan)}
              onClick={handleCheckoutClick}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wide shadow-[0_6px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer"
            >
              QUERO O PLANO BÁSICO →
            </a>
          </div>

          {/* Plano Completo (Mais Vendido - Super Destacado) */}
          <div className="relative rounded-3xl bg-white border-[3px] border-[#0066CC] p-6 md:p-10 shadow-2xl text-center lg:scale-[1.02] ring-4 ring-[#0066CC]/10">
            <div className="-mx-6 md:-mx-10 -mt-6 md:-mt-10 rounded-t-[20px] bg-[#0066CC] text-white text-center py-3.5 px-4 font-black uppercase tracking-wide text-sm md:text-base shadow-md">
              ⭐ PLANO COMPLETO — MAIS VENDIDO
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#16A34A] text-white font-bold text-xs uppercase tracking-wider">
              <Check className="w-4 h-4" />
              <span>TODOS OS MATERIAIS DA COLEÇÃO DIGITAL</span>
            </div>

            <div className="mt-6 flex justify-center">
              <img
                loading="lazy"
                decoding="async"
                src={ASSETS.completePlanMockup}
                alt="Coleção +250 Treinos Ilustrados de Karatê - Plano Completo com 4 Bônus"
                referrerPolicy="no-referrer"
                className="w-full max-w-[280px] h-auto object-contain"
              />
            </div>

            <ul className="mt-6 space-y-2 text-left max-w-sm mx-auto">
              {completePlanFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  {feat.isBonus ? (
                    <Gift className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm ${feat.isBonus ? 'font-bold text-slate-900' : 'font-medium'}`}>
                    {feat.text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-rose-500 line-through text-lg">
              de R$97,00 por:
            </p>
            <div className="mt-1 leading-none">
              <span className="text-7xl md:text-[5rem] font-black text-[#0066CC] tracking-tight">
                R$27,90
              </span>
            </div>
            <p className="mt-3 font-bold text-[#0A192F] text-lg">
              ou 3x de R$9,96 no cartão
            </p>
            <p className="mt-2 text-[#0A192F] text-base sm:text-lg flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
              <span>
                Você economiza <strong>R$69,10</strong>
              </span>
            </p>

            <a
              id="complete-plan-cta"
              href={getUrlWithTracking(CHECKOUT_LINKS.completePlan)}
              data-href={getUrlWithTracking(CHECKOUT_LINKS.completePlan)}
              data-url={getUrlWithTracking(CHECKOUT_LINKS.completePlan)}
              data-checkout-url={getUrlWithTracking(CHECKOUT_LINKS.completePlan)}
              onClick={handleCheckoutClick}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wide shadow-[0_6px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer animate-cta-pulse"
            >
              QUERO O PLANO COMPLETO🥋
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
