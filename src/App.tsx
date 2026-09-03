import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ComparisonSection } from './components/ComparisonSection';
import { CalloutSection } from './components/CalloutSection';
import { PainPointsSection } from './components/PainPointsSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
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

      {/* 3. O que vai mudar na sua forma de treinar */}
      <BenefitsSection />

      {/* 4. Veja a diferença sem os treinos e com os treinos */}
      <ComparisonSection />

      {/* 5. Você vai sentir a diferença logo nos primeiros treinos */}
      <CalloutSection />

      {/* 6. Você treina, repete... mas ainda sente que sua base não está firme? */}
      <PainPointsSection />

      {/* 7. Ideal para você que deseja */}
      <TargetAudienceSection />

      {/* 8. Tudo isso está incluso no seu kit */}
      <ContentSection />

      {/* 9. E não para por aí... 4 Bônus Exclusivos */}
      <BonusesSection />

      {/* 10. Escolha seu plano e comece agora (Pricing) */}
      <PricingSection />

      {/* 11. Garantia Incondicional de 7 Dias */}
      <GuaranteeSection />

      {/* 12. Depoimentos (Quem já utilizou, aprovou) */}
      <TestimonialsSection />

      {/* 13. Comece a treinar em poucos minutos (Passo a passo) */}
      <HowItWorksSection />

      {/* 14. Perguntas Frequentes (FAQ) */}
      <FaqSection />

      {/* 15. Rodapé */}
      <FooterSection />
    </main>
  );
}
