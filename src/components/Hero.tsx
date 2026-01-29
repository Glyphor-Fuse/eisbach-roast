import { motion } from "framer-motion";
import { LiquidEther } from "@/components/ui/LiquidEther";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-40">
        <LiquidEther />
      </div>

      <div className="container relative z-10 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase italic">
              GEOMETRIC<br />
              <span className="text-accent">DISCIPLINE</span><br />
              RAW ENERGY.
            </h1>
          </motion.div>

          <div className="grid grid-cols-12 mt-12 gap-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="h-[2px] w-full bg-foreground mb-4" />
              <p className="text-lg leading-relaxed font-light">
                A synthesis of Munich's industrial heritage and the alpine force of the Isar. 
                Engineering precision meeting the erratic flow of nature.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-9 flex flex-col justify-end"
            >
              <div className="text-[10px] uppercase tracking-[0.4em] mb-2 text-muted-foreground">Coordinates</div>
              <div className="font-mono text-xl tabular-nums">48.1351° N, 11.5820° E</div>
              <div className="h-px w-24 bg-accent mt-4" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vertical Side Label */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[10px] tracking-[1em] uppercase text-muted-foreground whitespace-nowrap pr-24 hidden lg:block">
        Bauhaus Minimalist x Urban Alpine
      </div>
    </section>
  );
}
