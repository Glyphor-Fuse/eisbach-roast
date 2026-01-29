// Update this page (the content is just a fallback if you fail to update the page)

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { MountainStats } from "@/components/MountainStats";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <FeatureGrid />
        <MountainStats />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
