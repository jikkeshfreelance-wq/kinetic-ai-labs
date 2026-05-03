import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const SERVICES = [
  { to: "/services/ai-engineering", label: "AI Engineering", k: "S/01" },
  { to: "/services/product-engineering", label: "Product Engineering", k: "S/02" },
  { to: "/services/hardware-embedded", label: "Hardware & Embedded AI", k: "S/03" },
  { to: "/services/growth-engineering", label: "Growth Engineering", k: "S/04" },
  { to: "/services/cloud-data", label: "Cloud, Data & Integration", k: "S/05" },
];

const LINKS = [
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Nav = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif-display text-2xl tracking-tight">
          Propilo<span className="text-muted-foreground">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {LINKS.map((l) => {
            const active = pathname === l.to || (l.hasMenu && pathname.startsWith("/services"));
            if (l.hasMenu) {
              return (
                <div
                  key={l.to}
                  className="relative"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <Link
                    to={l.to}
                    className={`inline-flex items-center gap-1.5 transition-colors hover:text-foreground ${active ? "text-foreground" : ""}`}
                  >
                    {l.label}
                    <span className={`text-[8px] transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
                  </Link>
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}`}
                  >
                    <div className="w-[420px] border border-border bg-background shadow-[var(--shadow-elevated)]">
                      <div className="px-5 py-3 border-b border-border flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                          Capability stack
                        </span>
                        <Link to="/services" className="text-[10px] uppercase tracking-[0.25em] text-foreground hover:underline">
                          Index →
                        </Link>
                      </div>
                      <div className="divide-y divide-border">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.to}
                            to={s.to}
                            className="flex items-baseline gap-4 px-5 py-3 hover:bg-secondary/60 transition-colors group"
                          >
                            <span className="font-mono-tech text-[10px] tracking-[0.2em] text-muted-foreground w-10">
                              {s.k}
                            </span>
                            <span className="font-serif-display text-base text-foreground normal-case tracking-normal flex-1">
                              {s.label}
                            </span>
                            <span className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`transition-colors hover:text-foreground ${active ? "text-foreground" : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <Link
          to="/contact"
          className="btn-liquid border border-foreground px-5 py-2 text-[11px] uppercase tracking-[0.2em]"
        >
          Declare Project
        </Link>
      </div>
    </header>
  );
};

export default Nav;
