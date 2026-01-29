import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference bg-transparent px-6 py-8 md:px-12 border-b border-foreground/5 backdrop-blur-sm">
      <nav className="max-w-[1400px] mx-auto grid grid-cols-12 items-baseline">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-6 md:col-span-3"
        >
          <span className="text-2xl font-black tracking-tighter uppercase italic">ISAR FLOW</span>
        </motion.div>
        
        <div className="hidden md:flex col-span-6 justify-center gap-12 text-sm font-medium tracking-[0.2em] uppercase">
          {["Technical", "Artisanal", "Chronology", "Archive"].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05, letterSpacing: "0.3em" }}
              className="hover:text-accent transition-all duration-300"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-6 md:col-span-3 text-right"
        >
          <button className="text-xs border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors uppercase tracking-widest font-bold">
            Contact System
          </button>
        </motion.div>
      </nav>
    </header>
  );
}
