import growthLoop from "@/assets/growth-loop.jpg";

/**
 * GrowthLoop — SEO + Digital Marketing → Leads → AI Agent → Customers → (loop)
 * The "more leads, less work, more profit" story.
 */
const STAGES = [
  {
    code: "G/01",
    name: "SEO + Content",
    title: "Be found.",
    body: "Programmatic SEO, technical content, and category capture engineered to rank — not to please a CMS.",
    metric: "10×",
    metricLabel: "indexable surface",
  },
  {
    code: "G/02",
    name: "Digital Marketing",
    title: "Be chosen.",
    body: "Performance creative, paid acquisition, and lifecycle journeys instrumented end-to-end.",
    metric: "−34%",
    metricLabel: "blended CAC",
  },
  {
    code: "G/03",
    name: "AI Lead Agent",
    title: "Be answered.",
    body: "An always-on agent that qualifies, routes, and books — in your tone, on every channel, in seconds.",
    metric: "24/7",
    metricLabel: "first-response SLA",
  },
  {
    code: "G/04",
    name: "Customer",
    title: "Be paid.",
    body: "Pipeline becomes revenue. The loop feeds back into SEO signals and creative iteration.",
    metric: "+2.8×",
    metricLabel: "lead → close rate",
  },
];

const GrowthLoop = () => (
  <section id="growth" className="relative border-t border-border">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
      <div className="grid md:grid-cols-12 gap-10 mb-20">
        <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
          [ G ] Growth Loop
        </div>
        <div className="md:col-span-9 reveal">
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            SEO finds them.{" "}
            <span className="italic text-muted-foreground">An agent closes them.</span>
            <br />You collect.
          </h2>
          <p className="mt-8 max-w-2xl font-mono-tech text-sm text-muted-foreground leading-relaxed">
            <span className="text-foreground">// </span>
            One closed system: search &amp; performance marketing generate leads,
            an AI agent qualifies and converts them, your team only touches deals
            that actually move the number.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-stretch">
        {/* Loop diagram + image */}
        <div className="lg:col-span-5 reveal flex flex-col gap-6">
          <div className="relative border border-border bg-background p-6 shadow-[var(--shadow-elevated)]">
            <div className="flex items-center justify-between mb-4 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span>fig. 03 / growth.loop</span>
              <span>closed-loop</span>
            </div>
            <LoopDiagram />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border">
            <img
              src={growthLoop}
              alt="Brushed titanium and glass orbit with sapphire nodes — Propilo growth loop"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stage list */}
        <ol className="lg:col-span-7 grid grid-cols-1 gap-px bg-border reveal">
          {STAGES.map((s) => (
            <li
              key={s.code}
              className="bg-background p-8 lg:p-10 grid grid-cols-12 gap-6 items-baseline group hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              <div className="col-span-2 font-mono-tech text-[10px] uppercase tracking-[0.3em] opacity-60">
                {s.code}
              </div>
              <div className="col-span-7">
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] opacity-60">
                  {s.name}
                </div>
                <div className="font-serif-display text-3xl lg:text-4xl mt-2">
                  {s.title}
                </div>
                <p className="font-mono-tech text-sm mt-4 leading-relaxed opacity-80">
                  {s.body}
                </p>
              </div>
              <div className="col-span-3 text-right">
                <div className="font-serif-display text-3xl">{s.metric}</div>
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] opacity-60 mt-1">
                  {s.metricLabel}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

const LoopDiagram = () => {
  const W = 360;
  const H = 360;
  const cx = W / 2;
  const cy = H / 2;
  const r = 130;
  const points = [
    { a: -90, label: "SEO" },
    { a: 0, label: "ADS" },
    { a: 90, label: "AGENT" },
    { a: 180, label: "CUSTOMER" },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Closed-loop growth diagram">
      <defs>
        <linearGradient id="loop" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(220 90% 70%)" />
          <stop offset="50%" stopColor="hsl(320 80% 75%)" />
          <stop offset="100%" stopColor="hsl(45 95% 70%)" />
        </linearGradient>
      </defs>

      <circle cx={cx} cy={cy} r={r} fill="none" stroke="url(#loop)" strokeWidth="2" />
      <circle cx={cx} cy={cy} r={r - 16} fill="none" stroke="hsl(0 0% 7% / 0.1)" strokeDasharray="2 5" />

      {points.map((p) => {
        const rad = (p.a * Math.PI) / 180;
        const x = cx + Math.cos(rad) * r;
        const y = cy + Math.sin(rad) * r;
        const lx = cx + Math.cos(rad) * (r + 28);
        const ly = cy + Math.sin(rad) * (r + 28);
        return (
          <g key={p.label}>
            <circle cx={x} cy={y} r={6} fill="hsl(0 0% 7%)" />
            <circle cx={x} cy={y} r={12} fill="none" stroke="hsl(0 0% 7% / 0.25)" />
            <text
              x={lx} y={ly} textAnchor="middle" dominantBaseline="middle"
              fontFamily="Geist Mono, monospace" fontSize="10" letterSpacing="2"
              fill="hsl(0 0% 20%)"
            >
              {p.label}
            </text>
          </g>
        );
      })}

      <text x={cx} y={cy - 6} textAnchor="middle"
        fontFamily="Fraunces, serif" fontSize="20" fill="hsl(0 0% 7%)">
        profit
      </text>
      <text x={cx} y={cy + 14} textAnchor="middle"
        fontFamily="Geist Mono, monospace" fontSize="9" letterSpacing="3" fill="hsl(0 0% 40%)">
        COMPOUNDS
      </text>
    </svg>
  );
};

export default GrowthLoop;
