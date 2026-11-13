import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { TrustValueSection } from '@/components/sections/trust-value-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { EcosystemSection } from '@/components/sections/ecosystem-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { BusinessDeliverySection } from '@/components/sections/for-business-section';
import { DeliveryPartnerSection } from '@/components/sections/delivery-partner-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { FinalCtaSection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <TrustValueSection />
        <HowItWorksSection />
        <EcosystemSection />
        <FeaturesSection />
        <BusinessDeliverySection />
        <DeliveryPartnerSection />
        <WhyChooseUsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
