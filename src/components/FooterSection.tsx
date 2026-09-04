import React from 'react';

export const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="bg-[#06101E] py-8 px-6 border-t border-slate-800">
      <div className="flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto">
        <p className="text-center text-slate-300 text-sm font-medium">
          © {currentYear} +150 Treinos Ilustrados de Karatê. Todos os direitos reservados.
        </p>
        <p className="text-center text-slate-400 text-xs leading-relaxed max-w-3xl whitespace-pre-line">
          Este material é um recurso educacional complementar, desenvolvido para estudo, consulta e revisão dos fundamentos do Karatê.
          {'\n\n'}
          Não substitui aulas presenciais, orientação técnica ou acompanhamento de um instrutor qualificado. Pratique com responsabilidade, respeite seus limites e interrompa qualquer exercício que cause dor ou desconforto.
        </p>
      </div>
    </footer>
  );
};
