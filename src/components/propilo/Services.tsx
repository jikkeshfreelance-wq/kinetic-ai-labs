import { useState } from "react";

type Service = {
  id: string;
  index: string;
  title: string;
  blurb: string;
  diagram: string[];
};

const SERVICES: Service[] = [
  {
    id: "agentic",
    index: "S/01",
    title: "Agentic Operations",
    blurb:
      "Automated logic that replaces manual workflows. Decisioning, retrieval, and action loops — wired into your business.",
    diagram: ["Trigger", "Planner", "Tools[ ]", "Critic", "Action"],
  },
  {
    id: "native",
    index: "S/02",
    title: "AI-Native Platforms",
    blurb:
      "Building the next SaaS or Mobile MVP. Shipped in weeks, architected for the model of the next decade.",
    diagram: ["Spec", "UX", "Model", "Pipeline", "Ship"],
  },
  {
    id: "cognitive",
    index: "S/03",
    title: "Cognitive Integration",
    blurb:
      "Injecting intelligence into existing enterprise stacks. Surgical, secure, measurable.",
    diagram: ["Stack", "Bridge", "LLM", "Eval", "Deploy"],
  },
];

const Services = () => {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section id="services" className="relative border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
            [ 02 ] Capability stack
          </div>
          <h2 className="md:col-span-9 font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight reveal">
            Three disciplines.
            <br />
            <span className="italic text-muted-foreground">One operating system for value.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 border-t border-l border-border">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              onMouseEnter={() => setHover(s.id)}
              onMouseLeave={() => setHover(null)}
              className="group relative border-r border-b border-border p-8 lg:p-10 min-h-[420px] flex flex-col justify-between overflow-hidden reveal"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "var(--gradient-chrome)", mixBlendMode: "multiply" }}
              />
              <div className="relative">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  <span>{s.index}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <h3 className="font-serif-display text-3xl lg:text-4xl mt-10 leading-tight">
                  {s.title}
                </h3>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed font-mono-tech">
                  {s.blurb}
                </p>
              </div>

              <div className="relative mt-10 h-20">
                <div
                  className="absolute inset-0 flex items-center gap-2 transition-all duration-500"
                  style={{
                    opacity: hover === s.id ? 1 : 0,
                    transform: hover === s.id ? "translateY(0)" : "translateY(8px)",
                  }}
                >
                  {s.diagram.map((d, i) => (
                    <div key={d} className="flex items-center gap-2">
                      <span className="font-mono-tech text-[10px] uppercase tracking-widest border border-foreground/40 px-2 py-1 bg-background">
                        {d}
                      </span>
                      {i < s.diagram.length - 1 && (
                        <span className="text-foreground/40">—</span>
                      )}
                    </div>
                  ))}
                </div>
                <div
                  className="absolute bottom-0 left-0 font-mono-tech text-xs text-muted-foreground transition-opacity duration-300"
                  style={{ opacity: hover === s.id ? 0 : 1 }}
                >
                  hover · architecture
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
