import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          EIGER<span className="text-accent">.</span>
        </motion.div>
        
        <nav className="hidden space-x-12 text-sm font-medium uppercase tracking-widest md:flex">
          {["Ascent", "Gear", "Technical", "Lab"].map((item, i) => (
            <motion.a
              key={item}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-accent transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary px-6 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground"
        >
          Shop Now
        </motion.button>
      </div>
    </header>
  );
}