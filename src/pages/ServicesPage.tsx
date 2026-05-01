import Nav from "@/components/propilo/Nav";
import Footer from "@/components/propilo/Footer";
import PageShell from "@/components/propilo/PageShell";
import Services from "@/components/propilo/Services";
import Architecture from "@/components/propilo/Architecture";
import { useReveal } from "@/hooks/useReveal";

const ServicesPage = () => {
  useReveal();
  return (
    <>
      <Nav />
      <PageShell
        pageTitle="Services — Propilo · AI Engineering Studio"
        pageDescription="Agentic operations, AI-native platforms, and cognitive integrations. Three disciplines, one operating system for value."
        index="S"
        eyebrow="Services"
        title={<>Three disciplines.{" "}<span className="italic text-muted-foreground">One operating system.</span></>}
        lede="We don't sell hours. We sell engineered outcomes — agentic ops, AI-native products, and cognitive integrations into the systems you already run."
      >
        <Services />
        <Architecture />
        <EngagementBlock />
      </PageShell>
      <Footer />
    </>
  );
};

const ENGAGEMENTS = [
  ["E/01", "Audit", "2 weeks", "Decompose your stack. Hand back a leverage map."],
  ["E/02", "Build", "6–12 weeks", "Production system, shipped, instrumented, owned."],
  ["E/03", "Compound", "Ongoing", "Monthly engineering retainer. We hold the pager."],
];

const EngagementBlock = () => (
  <section className="border-t border-border">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
      <div className="grid md:grid-cols-12 gap-10 mb-16">
        <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
          [ E ] Engagements
        </div>
        <h2 className="md:col-span-9 font-serif-display text-5xl md:text-6xl leading-[0.95] tracking-tight reveal">
          Three ways in.{" "}
          <span className="italic text-muted-foreground">All end in shipped code.</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 border-t border-l border-border">
        {ENGAGEMENTS.map(([k, t, d, body]) => (
          <div key={k} className="border-r border-b border-border p-10 reveal">
            <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span>{k}</span><span>{d}</span>
            </div>
            <div className="font-serif-display text-4xl mt-10">{t}</div>
            <p className="font-mono-tech text-sm text-muted-foreground mt-6 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPage;
