import { motion } from "framer-motion";

const specs = [
  { label: "Waterproof Rating", value: "28,000mm", desc: "Highest industry standard for extreme conditions." },
  { label: "Breathability", value: "25,000g/m²", desc: "Optimized for high-output alpine activities." },
  { label: "Weight Reduction", value: "-24%", desc: "Compared to traditional hardshell constructions." },
  { label: "Recycled Content", value: "88%", desc: "Responsibly sourced technical fibers." },
];

export function TechSpecSection() {
  return (
    <section className="py-32 px-6 md:px-10 bg-secondary text-white relative overflow-hidden">
       <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-[0.1]">
          <circle cx="50" cy="50" r="40" />
          <path d="M50 10 V90 M10 50 H90" />
          <rect x="20" y="20" width="60" height="60" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-20"
        >
          <div className="md:col-span-5">
            <h2 className="text-5xl font-bold tracking-tighter uppercase mb-8">Engineering <br /> The Standard</h2>
            <p className="text-muted text-lg mb-12">
              Our lab in Munich uses advanced thermographic imaging and wind-tunnel testing to ensure every seam and zipper performs when the environment doesn't.
            </p>
            <motion.button 
              whileHover={{ backgroundColor: "white", color: "black" }}
              className="px-8 py-4 border border-white text-xs font-bold uppercase tracking-widest transition-colors"
            >
              View Lab Report
            </motion.button>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20">
            {specs.map((spec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-4 border-l border-accent/30 pl-6"
              >
                <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">{spec.label}</span>
                <span className="text-4xl font-bold">{spec.value}</span>
                <p className="text-muted text-sm leading-relaxed">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
