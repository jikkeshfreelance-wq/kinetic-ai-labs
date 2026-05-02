import profitCurve from "@/assets/profit-curve.jpg";

/**
 * ProfitEngine — visualizes the business outcome promise:
 * Revenue ↑   Effort ↓   Margin ↑
 * A workflow diagram + the editorial chrome render.
 */
const METRICS = [
  { k: "Revenue", v: "+38%", dir: "▲", note: "avg uplift, 90-day window" },
  { k: "Effort cost", v: "−47%", dir: "▼", note: "manual hours displaced" },
  { k: "Margin", v: "+22pts", dir: "▲", note: "after agent rollout" },
  { k: "Time to value", v: "21d", dir: "→", note: "first shipped surface" },
];

const FLOW = [
  { code: "01", label: "Friction", body: "Manual ops, missed leads, slow follow-up." },
  { code: "02", label: "Instrument", body: "We map every revenue and cost edge in your funnel." },
  { code: "03", label: "Automate", body: "Agentic workflows replace the repetitive 80%." },
  { code: "04", label: "Compound", body: "Each cycle gets cheaper. Margin compounds monthly." },
];

const ProfitEngine = () => (
  <section id="profit-engine" className="relative border-t border-border bg-secondary/40">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
      <div className="grid md:grid-cols-12 gap-10 mb-20">
        <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
          [ R ] Profit Engine
        </div>
        <div className="md:col-span-9 reveal">
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Revenue up.{" "}
            <span className="italic text-muted-foreground">Effort down.</span>
            <br />Margin, compounded.
          </h2>
          <p className="mt-8 max-w-2xl font-mono-tech text-sm text-muted-foreground leading-relaxed">
            <span className="text-foreground">// </span>
            We don&apos;t install software. We install a profit engine — a closed
            loop where every shipped surface measurably moves one of three numbers.
          </p>
        </div>
      </div>

      {/* Metric strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-border reveal">
        {METRICS.map((m) => (
          <div key={m.k} className="border-r border-b border-border p-8">
            <div className="flex items-baseline justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span>{m.k}</span>
              <span>{m.dir}</span>
            </div>
            <div className="font-serif-display text-5xl mt-6">{m.v}</div>
            <div className="font-mono-tech text-[11px] text-muted-foreground mt-3">
              {m.note}
            </div>
          </div>
        ))}
      </div>

      {/* Diagram + render */}
      <div className="grid lg:grid-cols-12 gap-10 mt-20 items-stretch">
        <div className="lg:col-span-7 reveal">
          <div className="relative border border-border bg-background p-6 md:p-10 shadow-[var(--shadow-elevated)]">
            <div className="flex items-center justify-between mb-8 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span>fig. 02 / propilo.profit.loop</span>
              <span>$ ↑ · effort ↓</span>
            </div>
            <ProfitDiagram />
          </div>

          {/* Flow steps */}
          <ol className="grid sm:grid-cols-2 gap-px bg-border mt-px">
            {FLOW.map((f) => (
              <li key={f.code} className="bg-background p-6">
                <div className="flex justify-between font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  <span>{f.code}</span><span>{f.label}</span>
                </div>
                <p className="font-mono-tech text-sm text-foreground mt-4 leading-relaxed">
                  {f.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <aside className="lg:col-span-5 reveal flex flex-col gap-6">
          <div className="relative aspect-square w-full overflow-hidden border border-border">
            <img
              src={profitCurve}
              alt="Iridescent chrome arrow ascending through a concrete bar — Propilo profit engine"
              width={1280}
              height={1280}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border border-border p-8">
            <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              The contract
            </div>
            <p className="font-serif-display text-2xl mt-4 leading-snug">
              Every system we ship is bound to a number on your P&amp;L.
              <span className="italic text-muted-foreground"> If it doesn&apos;t move, we don&apos;t ship.</span>
            </p>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

const ProfitDiagram = () => {
  const W = 900;
  const H = 360;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Revenue rising and effort falling diagram">
      <defs>
        <linearGradient id="rev" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="hsl(220 90% 70%)" />
          <stop offset="50%" stopColor="hsl(320 80% 75%)" />
          <stop offset="100%" stopColor="hsl(45 95% 70%)" />
        </linearGradient>
      </defs>

      {/* axes */}
      <line x1="60" y1="40" x2="60" y2="320" stroke="hsl(0 0% 7% / 0.2)" />
      <line x1="60" y1="320" x2={W - 30} y2="320" stroke="hsl(0 0% 7% / 0.2)" />

      {/* gridlines */}
      {[0.25, 0.5, 0.75].map((p) => (
        <line key={p} x1="60" y1={40 + p * 280} x2={W - 30} y2={40 + p * 280}
          stroke="hsl(0 0% 7% / 0.06)" strokeDasharray="2 4" />
      ))}

      {/* effort line — descending */}
      <path
        d={`M 60 90 C 250 110, 450 240, ${W - 30} 290`}
        fill="none" stroke="hsl(0 0% 7%)" strokeWidth="1.4" strokeDasharray="4 3"
      />
      {/* revenue line — ascending */}
      <path
        d={`M 60 290 C 250 270, 450 130, ${W - 30} 60`}
        fill="none" stroke="url(#rev)" strokeWidth="3"
      />

      {/* labels */}
      <text x="70" y="60" fontFamily="Geist Mono, monospace" fontSize="10" fill="hsl(0 0% 20%)" letterSpacing="2">REVENUE</text>
      <text x={W - 110} y="50" fontFamily="Geist Mono, monospace" fontSize="10" fill="hsl(0 0% 20%)" letterSpacing="2">+38%</text>

      <text x="70" y="105" fontFamily="Geist Mono, monospace" fontSize="10" fill="hsl(0 0% 40%)" letterSpacing="2">EFFORT COST</text>
      <text x={W - 110} y="305" fontFamily="Geist Mono, monospace" fontSize="10" fill="hsl(0 0% 40%)" letterSpacing="2">−47%</text>

      {/* x-axis ticks */}
      {["WK 0", "WK 4", "WK 8", "WK 12"].map((t, i) => (
        <text key={t} x={60 + (i * (W - 90)) / 3} y="340"
          fontFamily="Geist Mono, monospace" fontSize="9" fill="hsl(0 0% 40%)" letterSpacing="2">
          {t}
        </text>
      ))}

      {/* crossover marker */}
      <circle cx="430" cy="195" r="5" fill="hsl(0 0% 7%)" />
      <circle cx="430" cy="195" r="12" fill="none" stroke="hsl(0 0% 7% / 0.3)" />
      <text x="445" y="190" fontFamily="Geist Mono, monospace" fontSize="9" fill="hsl(0 0% 20%)" letterSpacing="2">
        CROSSOVER · WK 6
      </text>
    </svg>
  );
};

export default ProfitEngine;
