import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-24">
      <div className="container px-6">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-6">
            <div className="text-4xl font-black tracking-tighter">EIGER<span className="text-accent">.</span></div>
            <p className="mt-6 max-w-sm text-muted-foreground uppercase text-xs tracking-[0.2em] font-bold">
              Designed in Zurich. <br />
              Tested on the North Face. <br />
              Worn Worldwide.
            </p>
          </div>
          
          <div className="col-span-6 md:col-span-3">
            <h5 className="text-xs font-black uppercase tracking-widest text-foreground">Navigation</h5>
            <ul className="mt-6 space-y-4 text-sm font-medium text-muted-foreground">
              <li><a href="#" className="hover:text-accent">The Lab</a></li>
              <li><a href="#" className="hover:text-accent">Collections</a></li>
              <li><a href="#" className="hover:text-accent">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent">Journal</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <h5 className="text-xs font-black uppercase tracking-widest text-foreground">Connect</h5>
            <ul className="mt-6 space-y-4 text-sm font-medium text-muted-foreground">
              <li><a href="#" className="hover:text-accent">Instagram</a></li>
              <li><a href="#" className="hover:text-accent">Twitter</a></li>
              <li><a href="#" className="hover:text-accent">Strava</a></li>
              <li><a href="#" className="hover:text-accent">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between border-t border-border pt-12 md:flex-row">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © 2024 EIGER TECHNICAL EQUIPMENT. ALL RIGHTS RESERVED.
          </p>
          <div className="mt-6 flex space-x-8 md:mt-0">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Terms</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}