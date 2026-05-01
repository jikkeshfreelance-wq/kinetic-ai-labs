import strata from "@/assets/strata.jpg";

const PRODUCTS = [
  {
    code: "P/01",
    name: "Helm",
    tagline: "Agentic ops console",
    desc: "Operate, observe, and override agentic workflows from a single command surface.",
    status: "Beta · invite",
  },
  {
    code: "P/02",
    name: "Lattice",
    tagline: "Retrieval mesh",
    desc: "Unified vector + structured retrieval with provenance, evals, and freshness SLAs.",
    status: "GA",
  },
  {
    code: "P/03",
    name: "Forge",
    tagline: "MVP accelerator",
    desc: "Opinionated stack to ship AI-native SaaS in 21 days. Internal toolkit, rented.",
    status: "Internal",
  },
];

const Products = () => (
  <section id="products" className="relative border-t border-border bg-secondary/40">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
      <div className="grid md:grid-cols-12 gap-10 mb-20">
        <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
          [ P ] Products
        </div>
        <div className="md:col-span-9 reveal">
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Tools we built{" "}
            <span className="italic text-muted-foreground">for ourselves —</span>
            <br />then sharpened for you.
          </h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 reveal">
          <div className="aspect-square overflow-hidden border border-border">
            <img
              src={strata}
              alt="Stacked iridescent glass strata representing Propilo product surfaces"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-8 grid sm:grid-cols-1 gap-px bg-border reveal">
          {PRODUCTS.map((p) => (
            <article
              key={p.code}
              className="bg-background p-8 lg:p-10 grid grid-cols-12 gap-6 items-baseline group hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              <div className="col-span-2 font-mono-tech text-[10px] uppercase tracking-[0.3em] opacity-60">
                {p.code}
              </div>
              <div className="col-span-7">
                <div className="font-serif-display text-4xl">{p.name}</div>
                <div className="font-mono-tech text-xs uppercase tracking-[0.2em] mt-2 opacity-60">
                  {p.tagline}
                </div>
                <p className="font-mono-tech text-sm mt-5 leading-relaxed opacity-80">
                  {p.desc}
                </p>
              </div>
              <div className="col-span-3 text-right font-mono-tech text-[10px] uppercase tracking-[0.3em] opacity-60">
                {p.status}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Products;
