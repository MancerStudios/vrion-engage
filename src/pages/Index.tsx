import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MissionVisionSection } from "@/components/MissionVisionSection";
import { ProductsSection } from "@/components/ProductsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { PerformanceSection } from "@/components/PerformanceSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionVisionSection />
        <ProductsSection />
        <PartnersSection />
        <PerformanceSection />
        <ServicesSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
