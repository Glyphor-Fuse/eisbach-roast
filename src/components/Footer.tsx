import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-secondary text-background py-24 px-6 md:px-12 border-t border-background/10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-8">ISAR FLOW</h3>
            <p className="text-sm font-light opacity-60 leading-relaxed max-w-xs">
              Industrial discipline applied to the organic chaos of nature. Munich-born, alpine-driven.
            </p>
          </div>
          <div className="mt-12 space-y-2 text-[10px] font-mono uppercase tracking-[0.3em]">
            <p>© 2024 Isar Flow Systems</p>
            <p>Built for the modern alpine</p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-accent">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-accent transition-colors">Engineering</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Roastery</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Logistics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-accent">Munich HQ</h4>
            <ul className="space-y-4 text-sm font-light opacity-80">
              <li>Isarwerk 1</li>
              <li>81379 München</li>
              <li>Germany</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-accent">Newsletter</h4>
            <div className="flex border-b border-background/20 pb-2">
              <input 
                type="email" 
                placeholder="SYSTEM_ENTRY@EMAIL.COM" 
                className="bg-transparent border-none outline-none text-xs w-full uppercase tracking-widest placeholder:text-background/30"
              />
              <button className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">Send</button>
            </div>
            <p className="text-[9px] mt-4 opacity-40 uppercase tracking-[0.2em]">Join the frequency. No spam, only data.</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto mt-24 pt-12 border-t border-background/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] font-bold">
          <a href="#" className="hover:text-accent">Instagram</a>
          <a href="#" className="hover:text-accent">LinkedIn</a>
          <a href="#" className="hover:text-accent">Behance</a>
        </div>
        <div className="text-[10px] uppercase tracking-[0.5em] opacity-30">
          BAUHAUS MINIMALIST // URBAN ALPINE
        </div>
      </div>
    </footer>
  );
}
