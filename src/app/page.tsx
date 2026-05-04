import { HeroTakeoverSection } from '@/components/sections/HeroTakeoverSection';
import { FeaturedExpeditionsCarousel } from '@/components/sections/FeaturedExpeditionsCarousel';
import { TrustSafetySection } from '@/components/sections/TrustSafetySection';

export default function HomePage() {
  return (
    <>
      <HeroTakeoverSection />
      <FeaturedExpeditionsCarousel />
      <TrustSafetySection />
    </>
  );
}
