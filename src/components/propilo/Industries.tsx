import neural from "@/assets/neural-sculpture.jpg";

const ROWS = [
  ["I/01", "Logistics & Mobility", "Routing intelligence, dispatch agents, exception handling at scale."],
  ["I/02", "Financial Services", "Underwriting copilots, KYC pipelines, anomaly graphs."],
  ["I/03", "Healthcare & Life Sciences", "Clinical summarization, trial matching, regulatory-aware retrieval."],
  ["I/04", "Manufacturing", "Vision QC, predictive maintenance, MES integrations."],
  ["I/05", "Retail & Commerce", "Catalog enrichment, conversational merchandising, demand sensing."],
  ["I/06", "Media & Education", "Generative production lines, adaptive learning systems."],
];

const Industries = () => (
  <section id="industries" className="relative border-t border-border">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
      <div className="grid md:grid-cols-12 gap-10 mb-16">
        <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
          [ I ] Industries
        </div>
        <div className="md:col-span-9 reveal">
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Domain fluency.{" "}
            <span className="italic text-muted-foreground">Not just engineering.</span>
          </h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 reveal">
          <div className="aspect-[4/5] overflow-hidden border border-border">
            <img
              src={neural}
              alt="Iridescent neural sculpture — abstract representation of Propilo's domain models"
              width={1600}
              height={2000}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <ul className="lg:col-span-7 divide-y divide-border border-y border-border reveal">
          {ROWS.map(([k, t, d]) => (
            <li key={k} className="grid grid-cols-12 gap-4 py-6 group hover:bg-secondary/40 transition-colors">
              <span className="col-span-2 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {k}
              </span>
              <span className="col-span-5 font-serif-display text-2xl">{t}</span>
              <span className="col-span-5 font-mono-tech text-xs text-muted-foreground leading-relaxed">
                {d}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Industries;
