import { useEffect, useState } from "react";

/**
 * Engineering animation: a live data-flow diagram that shows
 * how the Propilo system processes signal → intelligence → action.
 * Pure SVG + state-driven, no video, no external deps.
 */
const NODES = [
  { id: "signal", x: 80, y: 200, label: "Signal", sub: "events · users · sensors" },
  { id: "ingest", x: 280, y: 110, label: "Ingest", sub: "stream · normalize" },
  { id: "memory", x: 280, y: 290, label: "Memory", sub: "vector · graph" },
  { id: "reason", x: 500, y: 200, label: "Reason", sub: "LLM · planner · critic" },
  { id: "tools", x: 720, y: 110, label: "Tools", sub: "APIs · code · agents" },
  { id: "guard", x: 720, y: 290, label: "Guardrails", sub: "eval · policy" },
  { id: "action", x: 920, y: 200, label: "Action", sub: "ship · notify · revenue" },
] as const;

const EDGES: [string, string][] = [
  ["signal", "ingest"],
  ["signal", "memory"],
  ["ingest", "reason"],
  ["memory", "reason"],
  ["reason", "tools"],
  ["reason", "guard"],
  ["tools", "action"],
  ["guard", "action"],
  ["action", "memory"], // feedback loop
];

const node = (id: string) => NODES.find((n) => n.id === id)!;

const SystemAnimation = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 60);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative border border-border bg-background p-3 shadow-[var(--shadow-elevated)]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
        </div>
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          propilo / system.live
        </div>
        <div className="font-mono-tech text-[10px] text-muted-foreground flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
          LIVE
        </div>
      </div>

      <div className="relative bg-secondary/40 overflow-hidden">
        <svg
          viewBox="0 0 1000 400"
          className="w-full h-auto block"
          aria-label="Propilo system architecture animation"
        >
          {/* Grid */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="flow" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--foreground))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="1000" height="400" fill="url(#grid)" />

          {/* Edges */}
          {EDGES.map(([from, to], i) => {
            const a = node(from);
            const b = node(to);
            const dash = 600;
            const offset = ((tick * 4) + i * 80) % dash;
            return (
              <g key={`${from}-${to}`}>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                />
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="hsl(var(--foreground))"
                  strokeWidth="1.5"
                  strokeDasharray="40 560"
                  strokeDashoffset={-offset}
                  opacity="0.85"
                />
              </g>
            );
          })}

          {/* Nodes */}
          {NODES.map((n, i) => {
            const pulse = ((tick + i * 12) % 50) < 6;
            return (
              <g key={n.id}>
                <rect
                  x={n.x - 70}
                  y={n.y - 26}
                  width="140"
                  height="52"
                  fill="hsl(var(--background))"
                  stroke="hsl(var(--foreground))"
                  strokeWidth="1"
                />
                {pulse && (
                  <rect
                    x={n.x - 73}
                    y={n.y - 29}
                    width="146"
                    height="58"
                    fill="none"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                )}
                <text
                  x={n.x}
                  y={n.y - 4}
                  textAnchor="middle"
                  fontFamily="Fraunces, serif"
                  fontSize="16"
                  fill="hsl(var(--foreground))"
                >
                  {n.label}
                </text>
                <text
                  x={n.x}
                  y={n.y + 14}
                  textAnchor="middle"
                  fontFamily="Geist Mono, monospace"
                  fontSize="9"
                  letterSpacing="1"
                  fill="hsl(var(--muted-foreground))"
                >
                  {n.sub}
                </text>
              </g>
            );
          })}

          {/* Labels */}
          <text x="20" y="30" fontFamily="Geist Mono, monospace" fontSize="10" letterSpacing="2" fill="hsl(var(--muted-foreground))">
            INPUT
          </text>
          <text x="980" y="30" textAnchor="end" fontFamily="Geist Mono, monospace" fontSize="10" letterSpacing="2" fill="hsl(var(--muted-foreground))">
            OUTPUT
          </text>
          <text x="500" y="380" textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="10" letterSpacing="3" fill="hsl(var(--muted-foreground))">
            ↻  closed-loop · self-improving
          </text>
        </svg>
      </div>
    </div>
  );
};

export default SystemAnimation;
