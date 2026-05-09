import { useEffect, useState } from "react";

/**
 * Business flow animation: how a visitor becomes revenue.
 * Website + SEO bring leads → AI agent replies & qualifies →
 * Propilo workflows handle the repetitive work →
 * your team only touches real deals → revenue → reinvest.
 */
const NODES = [
  { id: "website", x: 80, y: 110, label: "Your Website", sub: "open 24 / 7" },
  { id: "seo", x: 80, y: 290, label: "SEO + Ads", sub: "buyers find you" },
  { id: "leads", x: 290, y: 200, label: "Leads", sub: "inbound interest" },
  { id: "agent", x: 510, y: 110, label: "AI Agent", sub: "replies in 60s · qualifies" },
  { id: "workflow", x: 510, y: 290, label: "Propilo Workflow", sub: "handles the repetitive work" },
  { id: "team", x: 730, y: 200, label: "Your Team", sub: "closes real deals" },
  { id: "revenue", x: 920, y: 200, label: "Revenue", sub: "money in the bank" },
] as const;

const EDGES: [string, string][] = [
  ["website", "leads"],
  ["seo", "leads"],
  ["leads", "agent"],
  ["leads", "workflow"],
  ["agent", "team"],
  ["workflow", "team"],
  ["team", "revenue"],
  ["agent", "revenue"],
  ["revenue", "seo"], // reinvest
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
          propilo / revenue.flow
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
          aria-label="How Propilo turns website visitors into revenue"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
            </pattern>
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
            const accent = n.id === "revenue" || n.id === "agent" || n.id === "workflow";
            return (
              <g key={n.id}>
                <rect
                  x={n.x - 80}
                  y={n.y - 26}
                  width="160"
                  height="52"
                  fill={accent ? "hsl(var(--foreground))" : "hsl(var(--background))"}
                  stroke="hsl(var(--foreground))"
                  strokeWidth="1"
                />
                {pulse && (
                  <rect
                    x={n.x - 83}
                    y={n.y - 29}
                    width="166"
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
                  fontSize="15"
                  fill={accent ? "hsl(var(--background))" : "hsl(var(--foreground))"}
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
                  fill={accent ? "hsl(var(--background) / 0.7)" : "hsl(var(--muted-foreground))"}
                >
                  {n.sub}
                </text>
              </g>
            );
          })}

          <text x="20" y="30" fontFamily="Geist Mono, monospace" fontSize="10" letterSpacing="2" fill="hsl(var(--muted-foreground))">
            VISITORS
          </text>
          <text x="980" y="30" textAnchor="end" fontFamily="Geist Mono, monospace" fontSize="10" letterSpacing="2" fill="hsl(var(--muted-foreground))">
            REVENUE
          </text>
          <text x="500" y="380" textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="10" letterSpacing="3" fill="hsl(var(--muted-foreground))">
            ↻  every customer funds the next one
          </text>
        </svg>
      </div>
    </div>
  );
};

export default SystemAnimation;
