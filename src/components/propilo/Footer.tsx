import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5">
        <div className="font-serif-display text-6xl tracking-tight leading-none">
          Propilo<span className="text-muted-foreground">.</span>
        </div>
        <p className="font-mono-tech text-xs text-muted-foreground mt-4 max-w-md leading-relaxed">
          High-performance AI engineering studio.<br />
          Chennai → World. We build. You profit.
        </p>
      </div>

      <FooterCol title="Studio" items={[
        { label: "Services", to: "/services" },
        { label: "Products", to: "/products" },
        { label: "Industries", to: "/industries" },
      ]} />
      <FooterCol title="Company" items={[
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
        { label: "Method", to: "/#method" },
      ]} />
      <FooterCol title="Signal" items={[
        { label: "hello@propilo.in", href: "mailto:hello@propilo.in" },
        { label: "Chennai · IN", href: "#" },
        { label: "GMT+5:30", href: "#" },
      ]} />
    </div>
    <div className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span>© 2026 Propilo · All systems engineered</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
          studio online
        </span>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, items }: { title: string; items: { label: string; to?: string; href?: string }[] }) => (
  <div className="md:col-span-2 font-mono-tech text-xs space-y-2 text-muted-foreground">
    <div className="text-foreground uppercase tracking-[0.25em] text-[10px] mb-4">{title}</div>
    {items.map((it) =>
      it.to ? (
        <Link key={it.label} to={it.to} className="block hover:text-foreground transition-colors">
          {it.label}
        </Link>
      ) : (
        <a key={it.label} href={it.href} className="block hover:text-foreground transition-colors">
          {it.label}
        </a>
      )
    )}
  </div>
);

export default Footer;
