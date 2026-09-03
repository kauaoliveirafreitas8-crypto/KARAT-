import React from 'react';
import { Clock, Check, Star, Flame } from 'lucide-react';
import { ASSETS, CHECKOUT_LINKS } from '../data/salesPageData';

export const PricingSection: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  const basicPlanFeatures = [
    '+250 TREINOS ILUSTRADOS',
    'MATERIAL 100% DIGITAL',
    'MOVIMENTOS PASSO A PASSO',
    'BASES E POSTURAS FUNDAMENTAIS',
    'GOLPES E ATAQUES',
    'DEFESAS E CONTRA-ATAQUES',
    'CHUTES E CONTROLE CORPORAL',
    'DESLOCAMENTOS E EQUILÍBRIO',
    'COMBINAÇÕES E SEQUÊNCIAS PRÁTICAS',
    'ACESSO IMEDIATO',
    'ACESSO VITALÍCIO',
    'PRONTO PARA CONSULTAR OU IMPRIMIR',
  ];

  const completePlanFeatures = [
    '+250 Treinos Ilustrados Passo a Passo de Karatê',
    'BÔNUS 1: Guia Visual de Bases e Posturas do Karatê',
    'BÔNUS 2: Sequências de Kihon para Praticar os Fundamentos',
    'BÔNUS 3: Mobilidade e Preparação para o Treino',
    'BÔNUS 4: Checklist de Correção dos Fundamentos',
    'Todos os materiais em formato digital',
    'Acesso imediato',
  ];

  const completePlanGoldFeatures = [
    'Acesso vitalício',
    'Atualizações gratuitas',
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
          <div className="rounded-3xl bg-white border border-slate-200 p-6 md:p-10 shadow-sm text-center hover:border-slate-300 transition-colors">
            <h3 className="font-black text-2xl md:text-3xl text-[#0A192F]">
              PLANO BÁSICO
            </h3>

            <div className="mt-6 flex justify-center">
              <img
                loading="lazy"
                decoding="async"
                src={ASSETS.basicPlanMockup}
                alt="Coleção +100 Treinos Ilustrados de Karatê"
                className="w-full max-w-[260px] h-auto object-contain"
              />
            </div>

            <ul className="mt-6 space-y-2 text-left max-w-xs mx-auto">
              {basicPlanFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{feat}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-rose-500 line-through text-lg">
              de R$54,90 por:
            </p>
            <div className="mt-1 leading-none">
              <span className="text-7xl md:text-[5rem] font-black text-[#0066CC] tracking-tight">
                R$17,90
              </span>
            </div>
            <p className="mt-3 font-bold text-[#0A192F] text-lg">
              ou 3x de R$6,39 no cartão
            </p>
            <p className="mt-2 text-[#0A192F] text-base sm:text-lg flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
              <span>
                Você economiza <strong>R$37,00</strong>
              </span>
            </p>

            <a
              id="basic-plan-cta"
              href={CHECKOUT_LINKS.basicPlan}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wide shadow-[0_6px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer animate-cta-pulse"
            >
              Quero adquirir o meu →
            </a>
          </div>

          {/* Plano Completo (Mais Vendido) */}
          <div className="relative rounded-3xl bg-white border-[3px] border-[#0066CC] p-6 md:p-10 shadow-xl text-center">
            <div className="-mx-6 md:-mx-10 -mt-6 md:-mt-10 rounded-t-[20px] bg-[#0066CC] text-white text-center py-3.5 px-4 font-black uppercase tracking-wide text-sm md:text-base">
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
                className="w-full max-w-[280px] h-auto object-contain"
              />
            </div>

            <ul className="mt-6 space-y-2 text-left max-w-sm mx-auto">
              {completePlanFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{feat}</span>
                </li>
              ))}
              {completePlanGoldFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-800 font-semibold">
                  <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5 fill-amber-500" />
                  <span className="text-sm">{feat}</span>
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
              href={CHECKOUT_LINKS.completePlan}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0066CC] text-white font-black uppercase tracking-wide shadow-[0_6px_0_0_#004F9F] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#004F9F] hover:bg-[#0055B3] transition-all cursor-pointer animate-cta-pulse"
            >
              Quero adquirir o meu →
            </a>

            <div className="mt-6 rounded-xl bg-sky-50 border border-sky-200 px-4 py-3 text-sky-900 text-sm flex items-center justify-center gap-2 text-center">
              <Flame className="w-4 h-4 text-[#0066CC] flex-shrink-0" />
              <span>
                <strong>APROVEITE AGORA:</strong> Este conjunto completo não permanecerá disponível por esse preço para sempre.
              </span>
            </div>

            <p className="mt-2 text-slate-500 text-sm flex items-center justify-center gap-2">
              🛡️ 7 dias de garantia incondicional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
