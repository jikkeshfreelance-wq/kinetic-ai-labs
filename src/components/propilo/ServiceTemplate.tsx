import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/propilo/Nav";
import Footer from "@/components/propilo/Footer";
import { useReveal } from "@/hooks/useReveal";

export type Capability = { code: string; title: string; body: string };
export type ProcessStep = { code: string; title: string; body: string };
export type Deliverable = { title: string; body: string };
export type Workflow = { trigger: string; agent: string; outcome: string; lift: string };
export type FAQ = { q: string; a: string };
export type Metric = { k: string; v: string; note: string };

export interface ServiceTemplateProps {
  index: string;
  eyebrow: string;
  pageTitle: string;
  pageDescription: string;
  title: ReactNode;
  lede: ReactNode;
  heroImage: string;
  heroAlt: string;
  metrics: Metric[];
  capabilities: Capability[];
  process: ProcessStep[];
  deliverables: Deliverable[];
  stack: StackItem[];
  faqs: FAQ[];
  prev: { to: string; label: string };
  next: { to: string; label: string };
}

const ServiceTemplate = (p: ServiceTemplateProps) => {
  useReveal();
  return (
    <>
      <Nav />
      <main className="bg-background text-foreground">
        {/* HERO */}
        <section className="pt-36 pb-20 border-b border-border relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-3">
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  [ {p.index} ] {p.eyebrow}
                </div>
              </div>
              <div className="md:col-span-9">
                <h1 className="font-serif-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.92] tracking-tight">
                  {p.title}
                </h1>
                <p className="mt-10 max-w-2xl font-mono-tech text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground">// </span>
                  {p.lede}
                </p>
              </div>
            </div>

            <div className="mt-16 grid lg:grid-cols-12 gap-10 items-stretch">
              <div className="lg:col-span-7 relative aspect-[4/3] overflow-hidden border border-border shadow-[var(--shadow-elevated)]">
                <img
                  src={p.heroImage}
                  alt={p.heroAlt}
                  width={1280}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-5 grid grid-cols-2 border-t border-l border-border self-stretch">
                {p.metrics.map((m) => (
                  <div key={m.k} className="border-r border-b border-border p-6">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {m.k}
                    </div>
                    <div className="font-serif-display text-4xl mt-4">{m.v}</div>
                    <div className="font-mono-tech text-[11px] text-muted-foreground mt-3">
                      {m.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="border-b border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
            <div className="grid md:grid-cols-12 gap-10 mb-16">
              <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
                [ C ] Capabilities
              </div>
              <h2 className="md:col-span-9 font-serif-display text-4xl md:text-6xl leading-[0.95] tracking-tight reveal">
                What we actually build.{" "}
                <span className="italic text-muted-foreground">No abstractions.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
              {p.capabilities.map((c) => (
                <article
                  key={c.code}
                  className="border-r border-b border-border p-8 lg:p-10 min-h-[260px] reveal group relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: "var(--gradient-chrome)", mixBlendMode: "multiply" }}
                  />
                  <div className="relative">
                    <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      <span>{c.code}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </div>
                    <h3 className="font-serif-display text-2xl mt-8 leading-tight">{c.title}</h3>
                    <p className="font-mono-tech text-sm text-muted-foreground mt-4 leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-b border-border bg-secondary/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
            <div className="grid md:grid-cols-12 gap-10 mb-16">
              <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
                [ P ] Process
              </div>
              <h2 className="md:col-span-9 font-serif-display text-4xl md:text-6xl leading-[0.95] tracking-tight reveal">
                How a project moves{" "}
                <span className="italic text-muted-foreground">from intent to invoice.</span>
              </h2>
            </div>
            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {p.process.map((s, i) => (
                <li key={s.code} className="bg-background p-8 reveal relative">
                  <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    <span>{s.code}</span>
                    <span>step {i + 1}/{p.process.length}</span>
                  </div>
                  <div className="font-serif-display text-3xl mt-8">{s.title}</div>
                  <p className="font-mono-tech text-sm text-muted-foreground mt-4 leading-relaxed">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* DELIVERABLES + STACK */}
        <section className="border-b border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 reveal">
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                [ D ] Deliverables
              </div>
              <h2 className="font-serif-display text-4xl md:text-6xl leading-[0.95] tracking-tight mt-6">
                What lands in your{" "}
                <span className="italic text-muted-foreground">repository.</span>
              </h2>
              <ul className="mt-12 border-t border-border">
                {p.deliverables.map((d) => (
                  <li key={d.title} className="py-6 border-b border-border grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-4 font-serif-display text-2xl">{d.title}</div>
                    <div className="md:col-span-8 font-mono-tech text-sm text-muted-foreground leading-relaxed">
                      {d.body}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:col-span-5 reveal">
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                [ S ] Stack
              </div>
              <h3 className="font-serif-display text-3xl mt-6 leading-tight">
                Tools we reach for, by default.
              </h3>
              <div className="mt-10 space-y-8">
                {p.stack.map((s) => (
                  <div key={s.group}>
                    <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                      {s.group}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <span
                          key={it}
                          className="font-mono-tech text-[11px] uppercase tracking-widest border border-foreground/30 px-3 py-1.5"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4 reveal">
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                [ Q ] Common questions
              </div>
              <h2 className="font-serif-display text-4xl md:text-5xl mt-6 leading-tight">
                The things buyers always ask.
              </h2>
            </div>
            <dl className="md:col-span-8 reveal border-t border-border">
              {p.faqs.map((f) => (
                <div key={f.q} className="py-6 border-b border-border">
                  <dt className="font-serif-display text-2xl">{f.q}</dt>
                  <dd className="font-mono-tech text-sm text-muted-foreground mt-3 leading-relaxed">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA + PREV/NEXT */}
        <section className="border-b border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 reveal">
            <div className="grid md:grid-cols-12 gap-10 items-end">
              <h2 className="md:col-span-8 font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
                Ready to move a number?{" "}
                <span className="italic text-muted-foreground">Let's draw the system.</span>
              </h2>
              <div className="md:col-span-4 flex md:justify-end">
                <Link
                  to="/contact"
                  className="btn-liquid border border-foreground px-7 py-4 text-xs uppercase tracking-[0.22em]"
                >
                  Declare a project →
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-border">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row justify-between gap-4 font-mono-tech text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              <Link to={p.prev.to} className="hover:text-foreground transition-colors">
                ← {p.prev.label}
              </Link>
              <Link to="/services" className="hover:text-foreground transition-colors">
                · index of services ·
              </Link>
              <Link to={p.next.to} className="hover:text-foreground transition-colors">
                {p.next.label} →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceTemplate;
