import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { ComparisonSection } from './components/ComparisonSection';
import { SecondaryMarqueeSection } from './components/SecondaryMarqueeSection';
import { ContentSection } from './components/ContentSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <main className="min-h-screen hero-bg">
      {/* 1. Top Announcement Bar + Hero Section */}
      <HeroSection />

      {/* 2. Marquee of Illustrated Trainings */}
      <MarqueeSection />

      {/* 3. Ideal para você que deseja */}
      <TargetAudienceSection />

      {/* 4. Para quem é este material? */}
      <ComparisonSection />

      {/* 4.1 Carrossel Dedicado de Treinos Ilustrados (Ordem Aleatória) */}
      <SecondaryMarqueeSection />

      {/* 5. Tudo isso está incluso no seu kit */}
      <ContentSection />

      {/* 7. E não para por aí... 4 Bônus Exclusivos */}
      <BonusesSection />

      {/* 8. Escolha seu plano e comece agora (Pricing) */}
      <PricingSection />

      {/* 9. Garantia Incondicional de 7 Dias */}
      <div className="content-auto">
        <GuaranteeSection />
      </div>

      {/* 10. Depoimentos (Quem já utilizou, aprovou) */}
      <div className="content-auto">
        <TestimonialsSection />
      </div>

      {/* 11. Comece a treinar em poucos minutos (Passo a passo) */}
      <div className="content-auto">
        <HowItWorksSection />
      </div>

      {/* 12. Perguntas Frequentes (FAQ) */}
      <div className="content-auto">
        <FaqSection />
      </div>

      {/* 13. Rodapé */}
      <div className="content-auto">
        <FooterSection />
      </div>
    </main>
  );
}
