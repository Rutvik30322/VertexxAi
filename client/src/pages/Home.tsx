import { Navbar, Footer } from "@/components/layout/Navigation";
import { HeroSection, AboutSection, ServicesSection, TechStackSection, ProcessSection, WhyUsSection } from "@/components/sections/MarketingSections";
import { PortfolioSection, TestimonialsSection, ClientsSection } from "@/components/sections/ConversionSections";
import { ContactSection } from "@/components/sections/ContactSection";
import { ChatBot } from "@/components/ui/ChatBot";

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
        <ClientsSection />
        <ContactSection />
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
