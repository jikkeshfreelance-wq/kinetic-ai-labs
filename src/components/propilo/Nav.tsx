const Nav = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
      <a href="#top" className="font-serif-display text-2xl tracking-tight">
        Propilo<span className="text-muted-foreground">.</span>
      </a>
      <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <a href="#services" className="hover:text-foreground transition-colors">Services</a>
        <a href="#method" className="hover:text-foreground transition-colors">Method</a>
        <a href="#console" className="hover:text-foreground transition-colors">Console</a>
      </nav>
      <a
        href="#console"
        className="btn-liquid border border-foreground px-5 py-2 text-[11px] uppercase tracking-[0.2em]"
      >
        Declare Project
      </a>
    </div>
  </header>
);

export default Nav;
