import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif-display text-2xl tracking-tight">
          Propilo<span className="text-muted-foreground">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {LINKS.map((l) => {
            const active = pathname === l.to;
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
