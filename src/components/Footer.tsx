import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background py-20 px-6 md:px-10 border-t border-muted overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-32">
        <div className="md:col-span-4">
          <div className="flex flex-col mb-10">
            <span className="text-4xl font-black tracking-tighter">MPP</span>
            <span className="text-xs tracking-widest uppercase opacity-60">Munich Peak Performance</span>
          </div>
          <p className="text-sm max-w-xs text-muted-foreground uppercase leading-relaxed font-medium">
            Leopoldstraße 12 <br /> 80802 München, Germany <br /> peak@mpp-archive.de
          </p>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Nav</span>
          <a href="#" className="text-sm uppercase font-bold hover:text-primary transition-colors">Shop</a>
          <a href="#" className="text-sm uppercase font-bold hover:text-primary transition-colors">Impact</a>
          <a href="#" className="text-sm uppercase font-bold hover:text-primary transition-colors">Journal</a>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Legal</span>
          <a href="#" className="text-sm uppercase font-bold hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="text-sm uppercase font-bold hover:text-primary transition-colors">Terms</a>
          <a href="#" className="text-sm uppercase font-bold hover:text-primary transition-colors">Imprint</a>
        </div>

        <div className="md:col-span-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-6">Newsletter</span>
          <div className="flex border-b border-foreground pb-2">
            <input 
              type="email" 
              placeholder="YOUR@EMAIL.COM" 
              className="bg-transparent border-none outline-none w-full text-sm font-bold placeholder:text-muted"
            />
            <button className="text-xs font-bold uppercase tracking-widest">Join</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-10">
        <span className="text-[12vw] font-black leading-[0.8] tracking-tighter opacity-5 select-none">MUNICH</span>
        <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground pb-4">
          © 2024 Munich Peak Performance System. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
