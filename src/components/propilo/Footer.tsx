const Footer = () => (
  <footer className="border-t border-border">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 grid md:grid-cols-12 gap-8 items-end">
      <div className="md:col-span-6">
        <div className="font-serif-display text-5xl tracking-tight">Propilo<span className="text-muted-foreground">.</span></div>
        <p className="font-mono-tech text-xs text-muted-foreground mt-3 max-w-md">
          High-performance AI engineering studio. Chennai → World.
        </p>
      </div>
      <div className="md:col-span-3 font-mono-tech text-xs space-y-1 text-muted-foreground">
        <div className="text-foreground uppercase tracking-[0.25em] text-[10px] mb-3">Studio</div>
        <div>Chennai, IN</div>
        <div>hello@propilo.studio</div>
      </div>
      <div className="md:col-span-3 font-mono-tech text-xs text-muted-foreground md:text-right">
        © 2026 Propilo. All systems engineered.
      </div>
    </div>
  </footer>
);

export default Footer;
