import { LucideIcon } from 'lucide-react';

export interface BenefitItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

export interface MarqueeItem {
  image: string;
  alt: string;
}

export interface TargetAudienceItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ContentModuleItem {
  title: string;
  desc: string;
}

export interface BonusItem {
  n: number;
  title: string;
  desc: string;
  image: string;
  originalPrice: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

export interface StepItem {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
