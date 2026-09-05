import React from 'react';
import { Clock, Check, Gift } from 'lucide-react';
import { ASSETS, CHECKOUT_LINKS } from '../data/salesPageData';

export const PricingSection: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  // Coleta parâmetros de rastreio salvos (URL, localStorage, cookies)
  const getStoredTrackingParams = (): Record<string, string> => {
    const params: Record<string, string> = {};
    if (typeof window === 'undefined') return params;

    // 1. Ler parâmetros persistidos em localStorage (LowTrack / scripts de UTM)
    try {
      const keys = [
        'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
        'fbclid', 'gclid', 'click_id', 'src', 'sck', 'xcod'
      ];
      for (const k of keys) {
        const val = localStorage.getItem(`lt_fwd_${k}`) || localStorage.getItem(k);
        if (val) params[k] = val;
      }
      const rawUtms = localStorage.getItem('_lt_utms');
      if (rawUtms) {
        try {
          const parsed = JSON.parse(rawUtms);
          Object.assign(params, parsed);
        } catch {}
      }
    } catch {}

    // 2. Ler cookies de rastreio
    try {
      const match = document.cookie.match(/(?:^|; )_lt_utms=([^;]+)/);
      if (match) {
        try {
          const parsed = JSON.parse(decodeURIComponent(match[1]));
          Object.assign(params, parsed);
        } catch {}
      }
      const clickMatch = document.cookie.match(/(?:^|; )_lt_click_id=([^;]+)/);
      if (clickMatch && !params.click_id) {
        params.click_id = decodeURIComponent(clickMatch[1]);
      }
    } catch {}

    // 3. Parâmetros da URL atual (prioridade máxima)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.forEach((val, key) => {
        if (val) params[key] = val;
      });
    } catch {}

    return params;
  };

  // Constrói URL com código de rastreamento completo e parâmetros UTM
  const buildUrlWithTracking = (baseUrl: string, planType: 'plano_basico' | 'plano_completo'): string => {
    if (typeof window === 'undefined') return baseUrl;
    try {
      const url = new URL(baseUrl, window.location.href);
      const stored = getStoredTrackingParams();

      // Garantir parâmetros de rastreamento do plano (src, sck, utm_content)
      if (!url.searchParams.has('src') || url.searchParams.get('src') === '') {
        url.searchParams.set('src', stored.src || planType);
      }
      if (!url.searchParams.has('sck') || url.searchParams.get('sck') === '') {
        url.searchParams.set('sck', stored.sck || planType);
      }
      if (!url.searchParams.has('utm_content') || url.searchParams.get('utm_content') === '') {
        url.searchParams.set('utm_content', stored.utm_content || planType);
      }

      // Anexar demais parâmetros de tráfego (UTMs, fbclid, click_id, etc.)
      for (const key in stored) {
        if (stored[key] && !url.searchParams.has(key)) {
          url.searchParams.set(key, stored[key]);
        }
      }

      return url.toString();
    } catch {
      return baseUrl;
    }
  };

  const [basicUrl, setBasicUrl] = React.useState<string>(CHECKOUT_LINKS.basicPlan);
  const [completeUrl, setCompleteUrl] = React.useState<string>(CHECKOUT_LINKS.completePlan);

  const refreshUrls = React.useCallback(() => {
    setBasicUrl(buildUrlWithTracking(CHECKOUT_LINKS.basicPlan, 'plano_basico'));
    setCompleteUrl(buildUrlWithTracking(CHECKOUT_LINKS.completePlan, 'plano_completo'));
  }, []);

  React.useEffect(() => {
    refreshUrls();
    const timer = setTimeout(refreshUrls, 600);
    return () => clearTimeout(timer);
  }, [refreshUrls]);

  const handleCheckoutClick = (planName: string, value: number) => {
    try {
      const win = window as any;

      // 1. Disparo nativo do Meta Pixel (Facebook Pixel - InitiateCheckout)
      if (typeof win.fbq === 'function') {
        win.fbq('track', 'InitiateCheckout', {
          content_name: planName,
          content_category: 'Karatê',
          value: value,
          currency: 'BRL',
          num_items: 1,
        });
      }

      // 2. Disparo nativo LowTrack (se disponível)
      if (win.LowTrack && typeof win.LowTrack.trackIC === 'function') {
        win.LowTrack.trackIC();
      }

      // 3. Disparo direto de fallback para API de IC do LowTrack
      if (win.pixelId) {
        try {
          const clickIdMatch = document.cookie.match(/(?:^|; )_lt_click_id=([^;]+)/);
          const clickId = clickIdMatch ? decodeURIComponent(clickIdMatch[1]) : '';
          const utmsMatch = document.cookie.match(/(?:^|; )_lt_utms=([^;]+)/);
          const utms = utmsMatch ? JSON.parse(decodeURIComponent(utmsMatch[1])) : {};

          fetch('https://lowtrack.com.br/api/ic', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              pixel_id: win.pixelId,
              click_id: clickId,
              page: window.location.href,
              referrer: document.referrer || '',
              utm_source: utms.utm_source || '',
              utm_medium: utms.utm_medium || '',
              utm_campaign: utms.utm_campaign || '',
              utm_content: utms.utm_content || planName,
              utm_term: utms.utm_term || '',
            }),
            keepalive: true,
            mode: 'cors',
          }).catch(() => {});
        } catch {}
      }
    } catch (e) {
      console.warn('Tracking dispatch error:', e);
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
                width={500}
                height={500}
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
              href={basicUrl}
              data-href={basicUrl}
              data-url={basicUrl}
              data-checkout-url={basicUrl}
              onMouseEnter={refreshUrls}
              onFocus={refreshUrls}
              onPointerDown={refreshUrls}
              onClick={() => handleCheckoutClick('Plano Básico', 10.0)}
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
                width={500}
                height={500}
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
              href={completeUrl}
              data-href={completeUrl}
              data-url={completeUrl}
              data-checkout-url={completeUrl}
              onMouseEnter={refreshUrls}
              onFocus={refreshUrls}
              onPointerDown={refreshUrls}
              onClick={() => handleCheckoutClick('Plano Completo', 27.9)}
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
