import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ASSETS } from '../data/salesPageData';

export const GuaranteeSection: React.FC = () => {
  return (
    <section id="guarantee-section" className="relative bg-[#F8FAFC] py-20 lg:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <img
            loading="eager"
            decoding="async"
            src={ASSETS.guaranteeBadge}
            alt="Selo de garantia de 7 dias"
            className="flex-shrink-0 w-44 h-44 md:w-52 md:h-52 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          />

          <div className="text-center md:text-left">
            <h3 className="font-black text-2xl md:text-4xl text-[#0A192F]">
              Garantia Incondicional de{' '}
              <span className="text-[#0066CC]">7 Dias</span>
            </h3>

            <p className="mt-3 text-slate-600 max-w-2xl leading-relaxed">
              Se por qualquer motivo você não ficar satisfeito com o material, basta solicitar o reembolso em até 7 dias após a compra e devolveremos{' '}
              <strong className="text-[#0A192F]">100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
            </p>

            <p className="mt-3 inline-flex items-center gap-2 text-slate-700 text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              Compra 100% segura
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
