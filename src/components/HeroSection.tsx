import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="container relative grid grid-cols-12 gap-0 md:min-h-[calc(100vh-64px)]">
        
        {/* Radical Asymmetric Block - Left Text */}
        <div className="col-span-12 flex flex-col justify-center p-6 md:col-span-7 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <span className="h-1 w-12 bg-accent" />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
                Base Layer 01 / Alpine System
              </span>
            </div>
            <h1 className="text-6xl font-black leading-[0.9] tracking-tighter md:text-9xl">
              PRECISION <br />
              <span className="text-secondary">ELEVATION</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Engineering the intersection of Bauhaus utility and high-altitude performance. 
              Minimalist gear designed for the radical verticality of the Alps.
            </p>
            <div className="flex space-x-6 pt-4">
              <motion.button 
                whileHover={{ x: 10 }}
                className="group flex items-center space-x-3 text-sm font-bold uppercase tracking-widest"
              >
                <span>View Collection</span>
                <span className="h-[2px] w-8 bg-primary transition-all group-hover:w-16" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Radical Asymmetric Block - Right Image/Visual */}
        <div className="col-span-12 h-96 md:col-span-5 md:h-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative h-full w-full bg-muted"
          >
            <div className="absolute inset-0 grayscale contrast-125">
               ///IMG:brutalist concrete architecture in snowy swiss alps|portrait|minimalist///
            </div>
            <div className="absolute bottom-12 -left-12 hidden h-48 w-48 bg-accent p-8 md:block">
              <span className="text-xs font-bold uppercase tracking-tighter text-white">
                Vertical Velocity <br /> Index 9.4
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Swiss Grid Background Decoration */}
      <div className="absolute inset-0 -z-10 grid grid-cols-12 opacity-5 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-foreground h-full" />
        ))}
      </div>
    </section>
  );
}