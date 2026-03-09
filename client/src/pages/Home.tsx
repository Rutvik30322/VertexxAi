import { Navbar, Footer } from "@/components/layout/Navigation";
import { HeroSection, AboutSection, ServicesSection, TechStackSection, ProcessSection, WhyUsSection } from "@/components/sections/MarketingSections";
import { PortfolioSection, TestimonialsSection, PricingSection } from "@/components/sections/ConversionSections";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechStackSection />
        <PortfolioSection />
        <ProcessSection />
        <WhyUsSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
