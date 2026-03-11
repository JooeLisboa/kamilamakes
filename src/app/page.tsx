import { SiteShell } from '@/components/layout/site-shell';
import { AuthoritySection } from '@/components/sections/authority-section';
import { ContentSection } from '@/components/sections/content-section';
import { FinalCtaSection } from '@/components/sections/final-cta-section';
import { HeroSection } from '@/components/sections/hero-section';
import { LocationSection } from '@/components/sections/location-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';

export default function HomePage() {
  return (
    <SiteShell>
      <main className="space-y-24 md:space-y-32">
        <HeroSection />
        <ServicesSection />
        <AuthoritySection />
        <ContentSection />
        <TestimonialsSection />
        <LocationSection />
        <FinalCtaSection />
      </main>
    </SiteShell>
  );
}
