// Update this page (the content is just a fallback if you fail to update the page)

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EngineeringGrid } from "@/components/EngineeringGrid";
import { CoffeeStream } from "@/components/CoffeeStream";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      <Header />
      <main>
        <Hero />
        <EngineeringGrid />
        <CoffeeStream />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
