import { useState } from "react";
import { toast } from "sonner";

const PROMPTS = [
  "$ propilo --new-project",
  "Briefly: what are you building?",
];

const Console = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");

  const next = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 0 && name.trim()) setStep(1);
    else if (step === 1 && email.trim()) setStep(2);
    else if (step === 2 && project.trim()) {
      toast.success("Project declared. We'll respond within 24h.");
      setStep(3);
    }
  };

  return (
    <section id="console" className="relative border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
            [ 04 ] Console
          </div>
          <h2 className="md:col-span-9 font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight reveal">
            Declare a project.
            <br />
            <span className="italic text-muted-foreground">Skip the form.</span>
          </h2>
        </div>

        <div className="reveal border border-foreground bg-foreground text-background font-mono-tech text-sm md:text-base shadow-[var(--shadow-elevated)]">
          <div className="flex items-center justify-between px-5 py-3 border-b border-background/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-background/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-background/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-background/30" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-background/50">
              propilo · console v2026.1
            </span>
            <span className="text-[10px] text-background/50">tcp / secure</span>
          </div>

          <form onSubmit={next} className="p-6 md:p-10 min-h-[420px] flex flex-col gap-3 leading-relaxed">
            <Line>{PROMPTS[0]}</Line>
            <Line muted>$ initializing handshake...</Line>
            <Line muted>$ ok. operator on the line.</Line>

            <div className="h-4" />

            <Line>{`> identify yourself:`}</Line>
            {step >= 1 ? (
              <Line value={`> ${name}`} />
            ) : (
              <InputLine
                value={name}
                onChange={setName}
                placeholder="full name"
                autoFocus
              />
            )}

            {step >= 1 && (
              <>
                <div className="h-2" />
                <Line>{`> channel of contact:`}</Line>
                {step >= 2 ? (
                  <Line value={`> ${email}`} />
                ) : (
                  <InputLine value={email} onChange={setEmail} placeholder="email" autoFocus />
                )}
              </>
            )}

            {step >= 2 && (
              <>
                <div className="h-2" />
                <Line>{`> describe the system to build:`}</Line>
                {step >= 3 ? (
                  <Line value={`> ${project}`} />
                ) : (
                  <InputLine
                    value={project}
                    onChange={setProject}
                    placeholder="e.g. agentic ops layer for our logistics stack"
                    autoFocus
                  />
                )}
              </>
            )}

            {step >= 3 && (
              <>
                <div className="h-2" />
                <Line muted>$ packet transmitted.</Line>
                <Line muted>$ expect contact within 24h. — propilo</Line>
              </>
            )}

            <div className="mt-auto pt-6 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] text-background/50">
                ↵ to submit · esc to abort
              </span>
              {step < 3 && (
                <button
                  type="submit"
                  className="text-[10px] uppercase tracking-[0.3em] border border-background/30 px-4 py-2 hover:bg-background hover:text-foreground transition-colors"
                >
                  transmit →
                </button>
              )}
            </div>
          </form>
        </div>

        <p className="mt-8 font-mono-tech text-xs text-muted-foreground reveal">
          // Or breach protocol: <a href="mailto:hello@propilo.studio" className="text-foreground underline underline-offset-4">hello@propilo.studio</a>
        </p>
      </div>
    </section>
  );
};

const Line = ({ children, muted, value }: { children?: React.ReactNode; muted?: boolean; value?: string }) => (
  <div className={muted ? "text-background/50" : "text-background"}>
    {value ?? children}
  </div>
);

const InputLine = ({
  value, onChange, placeholder, autoFocus,
}: {
  value: string; onChange: (v: string) => void; placeholder: string; autoFocus?: boolean;
}) => (
  <div className="flex items-center text-background">
    <span className="mr-2">{`>`}</span>
    <input
      autoFocus={autoFocus}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="flex-1 bg-transparent outline-none placeholder:text-background/30 caret-transparent"
    />
    <span className="cursor-blink" />
  </div>
);

export default Console;
