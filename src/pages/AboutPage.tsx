import Nav from "@/components/propilo/Nav";
import Footer from "@/components/propilo/Footer";
import PageShell from "@/components/propilo/PageShell";
import { useReveal } from "@/hooks/useReveal";
import studio from "@/assets/studio.jpg";
import neural from "@/assets/neural-sculpture.jpg";

const PRINCIPLES = [
  ["01", "Engineering, not hours", "We sell shipped systems. Time-and-materials breeds slop."],
  ["02", "Show, don't tell", "Every claim has a Loom, a repo, or a metric attached."],
  ["03", "Smallest correct fix", "Leverage > effort. We refuse work we can't measure."],
  ["04", "Own the pager", "If we built it, we hold the incident channel."],
];

const AboutPage = () => {
  useReveal();
  return (
    <>
      <Nav />
      <PageShell
        pageTitle="About — Propilo"
        pageDescription="Propilo is a high-performance AI engineering studio. Chennai → World. Senior engineers only. Outcome-priced."
        index="00"
        eyebrow="About the studio"
        title={<>A studio{" "}<span className="italic text-muted-foreground">of engineers.</span><br />Not a consultancy.</>}
        lede="Propilo is small on purpose. Senior operators only. We pick the work, ship the system, and walk away when the loop is compounding."
      >
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 reveal">
              <div className="aspect-[16/10] overflow-hidden border border-border">
                <img src={studio} alt="Propilo studio interior" width={1920} height={1200} loading="lazy" className="w-full h-full object-cover grayscale" />
              </div>
            </div>
            <div className="lg:col-span-5 reveal">
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">[ M ] Manifesto</div>
              <p className="font-serif-display text-3xl md:text-4xl leading-[1.15] mt-8 tracking-tight">
                Software is leverage.{" "}
                <span className="italic text-muted-foreground">
                  AI is leverage on leverage.
                </span>{" "}
                Most studios squander both. We don't.
              </p>
              <p className="font-mono-tech text-sm text-muted-foreground mt-8 leading-relaxed">
                <span className="text-foreground">// </span>
                Founded in Chennai, 2024. Operating quietly. Booked through Q3.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
            <div className="grid md:grid-cols-12 gap-10 mb-16">
              <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
                [ Π ] Principles
              </div>
              <h2 className="md:col-span-9 font-serif-display text-5xl md:text-6xl leading-[0.95] tracking-tight reveal">
                Four rules.{" "}
                <span className="italic text-muted-foreground">No exceptions.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
              {PRINCIPLES.map(([n, t, d]) => (
                <div key={n} className="border-r border-b border-border p-8 min-h-[260px] flex flex-col justify-between reveal">
                  <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{n}</span>
                  <div>
                    <div className="font-serif-display text-2xl">{t}</div>
                    <p className="font-mono-tech text-xs text-muted-foreground mt-4 leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 reveal">
              <div className="aspect-square overflow-hidden border border-border">
                <img src={neural} alt="Propilo systems abstraction" width={1600} height={1600} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7 reveal">
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">[ N ] Numbers</div>
              <ul className="mt-10 divide-y divide-border border-y border-border font-mono-tech text-sm">
                {[
                  ["Year founded", "2024"],
                  ["HQ", "Chennai, IN"],
                  ["Engineers", "9"],
                  ["Clients shipped", "23"],
                  ["Avg. engagement", "11 weeks"],
                  ["Pager response", "< 7 min"],
                ].map(([k, v]) => (
                  <li key={k} className="grid grid-cols-12 gap-4 py-5">
                    <span className="col-span-7 text-muted-foreground uppercase tracking-[0.25em] text-[10px]">{k}</span>
                    <span className="col-span-5 text-right font-serif-display text-2xl">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </PageShell>
      <Footer />
    </>
  );
};

export default AboutPage;
