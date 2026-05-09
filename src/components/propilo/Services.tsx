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
    title: "AI Agents that do the work",
    blurb:
      "Sales replies, support tickets, follow-ups, data entry — handled 24/7 by an AI workforce that reports to your team.",
    diagram: ["Lead in", "Agent replies", "Qualifies", "Books meeting", "Revenue"],
  },
  {
    id: "native",
    index: "S/02",
    title: "Products that ship in weeks",
    blurb:
      "Your SaaS, mobile app or internal tool — designed, built and live in 6 weeks, not 6 months.",
    diagram: ["Idea", "Design", "Build", "Launch", "Grow"],
  },
  {
    id: "cognitive",
    index: "S/03",
    title: "Growth on autopilot",
    blurb:
      "SEO, content and ads that bring buyers in — wired to an AI agent that turns them into customers.",
    diagram: ["Get found", "Get clicked", "Get replied", "Get closed", "Get paid"],
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
