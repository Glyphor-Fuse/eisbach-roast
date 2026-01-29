import { motion } from "framer-motion";
import { Menu, Search, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 w-full z-50 mix-blend-difference"
    >
      <div className="flex justify-between items-start p-6 md:p-10">
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tighter text-white">MPP</span>
          <span className="text-[10px] tracking-widest uppercase text-white/60">Munich Peak Performance</span>
        </div>

        <nav className="hidden md:flex gap-12 text-sm font-medium uppercase tracking-widest text-white">
          <a href="#" className="hover:text-accent transition-colors">Archive</a>
          <a href="#" className="hover:text-accent transition-colors">Expeditions</a>
          <a href="#" className="hover:text-accent transition-colors">Technical</a>
        </nav>

        <div className="flex gap-6 text-white">
          <Search size={20} className="cursor-pointer hover:text-accent transition-colors" />
          <ShoppingBag size={20} className="cursor-pointer hover:text-accent transition-colors" />
          <Menu size={20} className="cursor-pointer hover:text-accent transition-colors" />
        </div>
      </div>
    </motion.header>
  );
}
