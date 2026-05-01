import Nav from "@/components/propilo/Nav";
import Footer from "@/components/propilo/Footer";
import PageShell from "@/components/propilo/PageShell";
import Industries from "@/components/propilo/Industries";
import { useReveal } from "@/hooks/useReveal";

const IndustriesPage = () => {
  useReveal();
  return (
    <>
      <Nav />
      <PageShell
        pageTitle="Industries — Propilo"
        pageDescription="Logistics, finance, healthcare, manufacturing, retail, media. Domain fluency, not generic AI."
        index="I"
        eyebrow="Industries"
        title={<>We learn the domain{" "}<span className="italic text-muted-foreground">before we touch the code.</span></>}
        lede="Generic AI loses to specialists. We embed inside your domain — its constraints, regulations, and failure modes — before drawing the first arrow."
      >
        <Industries />
        <section className="border-t border-border bg-secondary/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
              [ K ] Selected outcomes
            </div>
            <div className="md:col-span-9 grid sm:grid-cols-3 gap-px bg-border border border-border reveal">
              {[
                ["−42%", "ops handling time", "logistics carrier"],
                ["8.4×", "pipeline velocity", "fintech underwriting"],
                ["19d", "MVP to production", "AI-native SaaS"],
              ].map(([n, t, d]) => (
                <div key={n} className="bg-background p-8">
                  <div className="font-serif-display text-6xl tracking-tight">{n}</div>
                  <div className="font-mono-tech text-xs text-muted-foreground mt-4 uppercase tracking-[0.25em]">{t}</div>
                  <div className="font-mono-tech text-[10px] text-muted-foreground mt-2">// {d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
      <Footer />
    </>
  );
};

export default IndustriesPage;
