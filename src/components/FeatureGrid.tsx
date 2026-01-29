import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Structural Rigidity",
    desc: "3D-knit alpine structures providing maximum warmth with zero bulk.",
    img: "///IMG:technical fabric texture macro|square|macro///"
  },
  {
    id: "02",
    title: "Thermal Mapping",
    desc: "Zoned insulation based on physiological heat loss patterns.",
    img: "///IMG:geometric mountain peaks abstract|square|bw///"
  },
  {
    id: "03",
    title: "Dynamic Shell",
    desc: "Hydrophobic membranes that breathe during exertion and seal in rest.",
    img: "///IMG:modern minimalist watch technical|square|editorial///"
  }
];

export function FeatureGrid() {
  return (
    <section className="bg-primary py-24 text-primary-foreground">
      <div className="container px-6">
        <div className="mb-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Engineered <br /> Dynamics</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="max-w-xl text-lg text-muted-foreground">
              Our design philosophy rejects the unnecessary. Every stitch serves a purpose. 
              Every seam is a calculated decision in the pursuit of high-altitude efficiency.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-muted/20 border border-muted/20">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative aspect-square overflow-hidden bg-primary p-12 transition-colors hover:bg-secondary"
            >
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="text-sm font-mono text-accent">{f.id}</span>
                  <h3 className="mt-4 text-3xl font-bold uppercase">{f.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white transition-colors">
                  {f.desc}
                </p>
              </div>
              <div className="absolute inset-0 opacity-10 grayscale transition-all group-hover:scale-110 group-hover:opacity-30">
                {f.img}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}