import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { OfferSection } from '@/components/sections/offer-section';
import { WhyUsSection } from '@/components/sections/why-us-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CtaBanner } from '@/components/sections/cta-banner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <OfferSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
