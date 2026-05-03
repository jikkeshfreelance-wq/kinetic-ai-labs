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
            How the system <span className="italic text-muted-foreground">actually works.</span>
          </h2>
          <p className="mt-8 max-w-2xl font-mono-tech text-sm text-muted-foreground leading-relaxed">
            <span className="text-foreground">// </span>
            Signal in. Reasoning in the middle. Action out — wired into a closed feedback loop.
            This is the architecture we ship under every Propilo engagement.
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
            ["01", "Decompose", "Map the system as it actually runs."],
            ["02", "Diagnose", "Identify the leverage points."],
            ["03", "Engineer", "Ship the smallest correct fix."],
            ["04", "Compound", "Wire the loop. Walk away."],
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
