import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { TechSpecSection } from "@/components/TechSpecSection";
import { BrandManifesto } from "@/components/BrandManifesto";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Orb } from "@/components/ui/orb";

const Index = () => {
  return (
    <div className="bg-background text-foreground selection:bg-accent selection:text-accent-foreground min-h-screen">
      <Orb 
        className="fixed top-[-20%] right-[-10%] opacity-20 pointer-events-none" 
        size={800} 
        color="hsl(var(--primary))" 
      />
      <Header />
      <main>
        <HeroSection />
        <ProductGrid />
        <BrandManifesto />
        <TechSpecSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
