import { motion } from "framer-motion";

const items = [
  {
    title: "Structural Integrity",
    code: "ISO-9001",
    desc: "Rigid grid systems applied to organic architectural forms.",
    image: "///IMG:industrial architecture concrete minimalist|landscape|editorial///"
  },
  {
    title: "Hydro-Dynamics",
    code: "FLOW-22",
    desc: "Capturing the kinetic energy of alpine river streams.",
    image: "///IMG:rushing river water long exposure|portrait|editorial///"
  },
  {
    title: "Thermal Precision",
    code: "ROAST-01",
    desc: "Molecular control of temperature variables in roast profiles.",
    image: "///IMG:coffee beans roasting machinery|landscape|industrial///"
  }
];

export function EngineeringGrid() {
  return (
    <section id="technical" className="py-32 px-6 md:px-12 bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-24">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-6">
              THE<br />ENGINEERING<br />PHASE
            </h2>
            <div className="w-12 h-1 bg-accent" />
          </div>
          <div className="col-span-12 md:col-span-8 md:pl-12">
            <p className="text-xl md:text-2xl font-light opacity-80 max-w-2xl">
              Our process is a mathematical baseline. We anchor every project to the Swiss grid, allowing technical details to breathe within heavy whitespace.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`col-span-12 md:col-span-4 ${idx % 2 === 0 ? "md:translate-y-12" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                <img 
                  src={item.image.replace("///IMG:", "https://images.unsplash.com/photo-").replace("///", "")} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute top-4 left-4 font-mono text-xs tracking-widest bg-background text-foreground px-2 py-1">
                  {item.code}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2 italic">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
