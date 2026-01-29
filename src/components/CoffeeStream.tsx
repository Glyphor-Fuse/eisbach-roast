import { motion } from "framer-motion";
import { Orb } from "@/components/ui/orb";

export function CoffeeStream() {
  return (
    <section id="artisanal" className="py-32 px-6 md:px-12 relative overflow-hidden bg-background">
      <div className="absolute top-1/4 -left-24 opacity-20">
        <Orb size={400} color="hsl(var(--accent))" />
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-12 relative z-10">
        <div className="col-span-12 lg:col-span-8 lg:col-start-3">
          <div className="relative mb-24">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="absolute -top-12 left-0 w-full h-px bg-foreground origin-left"
            />
            <h2 className="text-[8vw] lg:text-[6vw] font-black uppercase italic tracking-tighter leading-none">
              LIQUID<br />
              <span className="pl-[20%]">GEOMETRY</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="aspect-square bg-secondary p-8 flex flex-col justify-between">
                <div className="text-4xl text-accent font-black tracking-tighter">01.</div>
                <div>
                  <h4 className="text-background uppercase font-bold tracking-[0.2em] mb-4">The Roast Curve</h4>
                  <p className="text-background/70 font-light text-sm">
                    Darkened hues of deep mountain soil. Our roasting process follows a strict parabolic trajectory, ensuring the chemical volatile compounds are preserved in stasis.
                  </p>
                </div>
              </div>
              <div className="p-4 border border-foreground/10 font-mono text-[10px] uppercase tracking-widest">
                Isar Roastery System // v.4.0.2
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 md:pt-24"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
                  alt="Coffee Extraction"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
              <p className="text-lg font-light leading-relaxed">
                Coffee as a fluid medium. We treat the pour-over as a hydraulic system, managing turbulence and temperature with the same rigor as Munich's civic plumbing.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Text Overlay */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
        <div className="text-[20vw] font-black uppercase italic whitespace-nowrap -mb-[5vw] translate-x-12">
          ISAR FLOW ISAR FLOW ISAR FLOW
        </div>
      </div>
    </section>
  );
}
