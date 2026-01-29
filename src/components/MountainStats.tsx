import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function MountainStats() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} className="overflow-hidden bg-background py-32">
      <div className="space-y-4">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap text-[12vw] font-black leading-none text-muted uppercase">
          Eiger Nordwand 3967M Eiger Nordwand 3967M
        </motion.div>
        
        <div className="container relative py-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4 bg-accent p-12 text-white">
              <h4 className="text-6xl font-black">40%</h4>
              <p className="mt-4 text-sm font-bold uppercase tracking-widest">Weight Reduction</p>
              <p className="mt-2 text-xs opacity-80">Compared to traditional alpine shells using our new Aerogel-Grid technology.</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="h-full w-full bg-secondary min-h-[300px] overflow-hidden">
                ///IMG:aerial mountain ridge silhouette|landscape|dramatic///
              </div>
            </div>
          </div>
        </div>

        <motion.div style={{ x: x2 }} className="whitespace-nowrap text-[12vw] font-black leading-none text-muted uppercase">
          Matterhorn Peak 4478M Matterhorn Peak 4478M
        </motion.div>
      </div>
    </section>
  );
}