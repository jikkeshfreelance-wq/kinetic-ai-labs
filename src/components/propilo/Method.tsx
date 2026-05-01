import node from "@/assets/node.png";

const Method = () => (
  <section id="method" className="relative border-t border-border bg-secondary/40">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
      <div className="grid md:grid-cols-12 gap-10 mb-16">
        <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
          [ 03 ] The Propilo Method
        </div>
        <div className="md:col-span-9 reveal">
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Show. <span className="italic text-muted-foreground">Don't tell.</span>
          </h2>
          <p className="mt-8 max-w-2xl font-mono-tech text-sm text-muted-foreground leading-relaxed">
            <span className="text-foreground">// </span>
            A live engineering audit. No decks. No fluff.
            Watch us decompose a real production system in 6 minutes.
          </p>
        </div>
      </div>

      <div className="relative reveal">
        <div className="absolute -top-10 -left-10 w-28 h-28 opacity-80 animate-drift hidden md:block">
          <img src={node} alt="" width={768} height={768} className="w-full h-full object-contain" loading="lazy" />
        </div>

        <div className="relative border border-border bg-background p-3 shadow-[var(--shadow-elevated)]">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
            </div>
            <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              propilo / audit_06.loom
            </div>
            <div className="font-mono-tech text-[10px] text-muted-foreground">REC ●</div>
          </div>
          <div className="relative aspect-video bg-foreground overflow-hidden">
            <iframe
              src="https://www.loom.com/embed/e883f718a8654e80a96f9d92b27f35c2?hide_owner=true&hide_share=true&hideEmbedTopBar=true"
              title="Propilo engineering audit"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

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
