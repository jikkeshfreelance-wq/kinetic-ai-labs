import wafer from "@/assets/wafer.jpg";

/**
 * SVG-based architecture diagram — Propilo's reference stack.
 * Pure SVG so it stays crisp, prints clean, and animates with CSS.
 */
const Architecture = () => {
  return (
    <section id="architecture" className="relative border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
            [ A ] Reference Architecture
          </div>
          <div className="md:col-span-9 reveal">
            <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              The stack we ship.{" "}
              <span className="italic text-muted-foreground">Drawn, not pitched.</span>
            </h2>
            <p className="mt-8 max-w-2xl font-mono-tech text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground">// </span>
              Six layers. Zero ambiguity. Every Propilo system can be traced from
              ingress to action — and audited at any node.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Diagram */}
          <div className="lg:col-span-8 reveal">
            <div className="relative border border-border bg-background p-6 md:p-10 shadow-[var(--shadow-elevated)]">
              <div className="flex items-center justify-between mb-6 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>fig. 01 / propilo.stack.v3</span>
                <span>scale 1:1</span>
              </div>
              <ArchSVG />
            </div>
          </div>

          {/* Legend */}
          <aside className="lg:col-span-4 reveal flex flex-col">
            <div className="relative aspect-square w-full overflow-hidden border border-border mb-6">
              <img
                src={wafer}
                alt="Brushed titanium wafer with sapphire LED nodes"
                width={1600}
                height={1600}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <ul className="font-mono-tech text-xs space-y-4">
              {[
                ["L6", "Action", "side-effects, tools, deploys"],
                ["L5", "Critic", "evals, guardrails, scoring"],
                ["L4", "Planner", "graph of decisions"],
                ["L3", "Retrieval", "vector + structured"],
                ["L2", "Model", "frontier + fine-tuned"],
                ["L1", "Ingress", "events, webhooks, UI"],
              ].map(([k, t, d]) => (
                <li key={k} className="flex gap-4 border-t border-border pt-3">
                  <span className="text-muted-foreground w-8">{k}</span>
                  <span className="font-serif-display text-base text-foreground w-24">{t}</span>
                  <span className="text-muted-foreground flex-1">{d}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

const LAYERS = [
  { y: 60, label: "L1 · Ingress", nodes: ["Events", "Webhooks", "UI", "API"] },
  { y: 140, label: "L2 · Model", nodes: ["Frontier", "Fine-tuned", "Embedding"] },
  { y: 220, label: "L3 · Retrieval", nodes: ["Vector", "SQL", "Graph", "Cache"] },
  { y: 300, label: "L4 · Planner", nodes: ["Router", "Tool DAG", "Memory"] },
  { y: 380, label: "L5 · Critic", nodes: ["Evals", "Guardrails", "Scorer"] },
  { y: 460, label: "L6 · Action", nodes: ["Webhook", "DB Write", "Deploy", "Notify"] },
];

const ArchSVG = () => {
  const W = 900;
  const H = 540;
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      role="img"
      aria-label="Propilo six-layer reference architecture diagram"
    >
      <defs>
        <linearGradient id="iri" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(220 90% 70%)" />
          <stop offset="50%" stopColor="hsl(320 80% 75%)" />
          <stop offset="100%" stopColor="hsl(45 95% 70%)" />
        </linearGradient>
        <pattern id="paper" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.5" fill="hsl(0 0% 7% / 0.06)" />
        </pattern>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#paper)" />

      {/* connecting edges (rendered first so they sit behind nodes) */}
      {LAYERS.slice(0, -1).map((layer, li) => {
        const next = LAYERS[li + 1];
        return layer.nodes.map((_, i) =>
          next.nodes.map((__, j) => {
            const x1 = nodeX(layer.nodes.length, i);
            const x2 = nodeX(next.nodes.length, j);
            return (
              <line
                key={`e-${li}-${i}-${j}`}
                x1={x1}
                y1={layer.y + 14}
                x2={x2}
                y2={next.y - 14}
                stroke="hsl(0 0% 7% / 0.12)"
                strokeWidth={0.6}
              />
            );
          })
        );
      })}

      {LAYERS.map((layer, li) => (
        <g key={layer.label}>
          {/* layer label */}
          <text
            x={20}
            y={layer.y + 4}
            fontSize={9}
            fontFamily="Geist Mono, monospace"
            letterSpacing="2"
            fill="hsl(0 0% 40%)"
          >
            {layer.label.toUpperCase()}
          </text>
          {/* baseline */}
          <line
            x1={150}
            y1={layer.y}
            x2={W - 20}
            y2={layer.y}
            stroke="hsl(0 0% 7% / 0.08)"
            strokeDasharray="2 4"
          />
          {/* nodes */}
          {layer.nodes.map((n, i) => {
            const x = nodeX(layer.nodes.length, i);
            const isCenter = li === 3;
            return (
              <g key={`${layer.label}-${n}`}>
                <circle
                  cx={x}
                  cy={layer.y}
                  r={isCenter ? 7 : 5}
                  fill={isCenter ? "url(#iri)" : "hsl(0 0% 7%)"}
                />
                <circle
                  cx={x}
                  cy={layer.y}
                  r={isCenter ? 14 : 10}
                  fill="none"
                  stroke="hsl(0 0% 7% / 0.2)"
                />
                <text
                  x={x}
                  y={layer.y + 28}
                  textAnchor="middle"
                  fontSize={9}
                  fontFamily="Geist Mono, monospace"
                  fill="hsl(0 0% 20%)"
                >
                  {n}
                </text>
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
};

const nodeX = (count: number, i: number) => {
  const left = 200;
  const right = 880;
  if (count === 1) return (left + right) / 2;
  return left + ((right - left) * i) / (count - 1);
};

export default Architecture;
