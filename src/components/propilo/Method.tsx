import node from "@/assets/node.png";
import SystemAnimation from "./SystemAnimation";

const Method = () => (
  <section id="method" className="relative border-t border-border bg-secondary/40">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
      <div className="grid md:grid-cols-12 gap-10 mb-16">
        <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
          [ 03 ] The Propilo Method
        </div>
        <div className="md:col-span-9 reveal">
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            How a visitor turns into <span className="italic text-muted-foreground">revenue.</span>
          </h2>
          <p className="mt-8 max-w-2xl font-mono-tech text-sm text-muted-foreground leading-relaxed">
            <span className="text-foreground">// </span>
            Your website and SEO bring buyers in. An AI agent replies in seconds and qualifies them.
            Propilo workflows quietly handle the repetitive work in the background.
            Your team only touches deals that are ready to close — and the revenue funds the next cycle.
          </p>
        </div>
      </div>

      <div className="relative reveal">
        <div className="absolute -top-10 -left-10 w-28 h-28 opacity-80 animate-drift hidden md:block">
          <img src={node} alt="" width={768} height={768} className="w-full h-full object-contain" loading="lazy" />
        </div>

        <SystemAnimation />

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {[
            ["01", "Get found", "SEO + a site that ranks for what your buyers actually search."],
            ["02", "Reply instantly", "AI agent answers, qualifies and books — 24/7, in your voice."],
            ["03", "Remove the busywork", "Workflows handle follow-ups, data entry and ops in the background."],
            ["04", "Close & compound", "Your team focuses on real deals. Revenue funds the next cycle."],
          ].map(([n, t, d]) => (
            <div key={n} className="border-t border-border pt-4 reveal">
              <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{n}</div>
              <div className="font-serif-display text-2xl mt-2">{t}</div>
              <div className="font-mono-tech text-xs text-muted-foreground mt-2 leading-relaxed">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Method;
