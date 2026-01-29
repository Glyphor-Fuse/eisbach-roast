import { motion } from "framer-motion";

export function BrandManifesto() {
  return (
    <section className="py-40 px-6 md:px-10 bg-background overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          <div className="md:col-span-12">
             <span className="text-sm font-bold uppercase tracking-[0.4em] text-primary mb-6 block">02 / Philosophy</span>
          </div>
          <div className="md:col-span-7">
            <p className="text-3xl md:text-5xl font-bold tracking-tight leading-tight uppercase">
              Form follows function is not a choice. It is a biological necessity in the alpine domain. We remove the noise to focus on survival.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end">
            <p className="text-muted-foreground leading-relaxed">
              Based in Munich, we draw inspiration from the brutalist geometry of urban structures and the raw, chaotic beauty of the Bavarian Alps. Our gear is built for those who traverse both.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
