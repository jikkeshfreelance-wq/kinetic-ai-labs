import { useEffect, useState } from "react";
import mechanism from "@/assets/mechanism.png";

const WORDS = ["Autonomy.", "Profitability.", "Speed.", "Scale."];

const Hero = () => {
  const [idx, setIdx] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative pt-32 pb-32 overflow-hidden">
      {/* Floating mechanism */}
      <div
        className="pointer-events-none absolute right-[-10%] top-20 w-[58vw] max-w-[820px] aspect-square opacity-90 animate-drift"
        style={{
          transform: `rotate(${scrollY * 0.08}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src={mechanism}
          alt="Iridescent chrome mechanism with glowing glass tubes representing AI engineering architecture"
          className="w-full h-full object-contain"
          width={1280}
          height={1280}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground mb-10">
          [ 01 ] Propilo / High-Performance AI Engineering Studio
        </div>

        <h1 className="font-serif-display text-[14vw] sm:text-[11vw] lg:text-[9.5vw] xl:text-[150px] leading-[0.92] tracking-tight max-w-[14ch]">
          <span className="block">Engineering</span>
          <span className="relative inline-block italic">
            <span className="opacity-0 select-none">Profitability.</span>
            {WORDS.map((w, i) => (
              <span
                key={w}
                aria-hidden={i !== idx}
                className="absolute inset-0 transition-all duration-700"
                style={{
                  opacity: i === idx ? 1 : 0,
                  transform: `translateY(${i === idx ? 0 : 14}px)`,
                  background: i === idx ? "var(--gradient-iridescent)" : undefined,
                  WebkitBackgroundClip: i === idx ? "text" : undefined,
                  WebkitTextFillColor: i === idx ? "transparent" : undefined,
                }}
              >
                {w}
              </span>
            ))}
          </span>
        </h1>

        <div className="mt-16 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-6 lg:col-span-5 font-mono-tech text-sm text-muted-foreground leading-relaxed">
            <span className="text-foreground">// </span>
            Full-stack AI, Web, &amp; Mobile — engineered from Chennai to the world.
            We build. You profit.
          </p>
          <div className="md:col-span-6 lg:col-span-7 flex flex-wrap gap-4 md:justify-end">
            <a
              href="#console"
              className="btn-liquid border border-foreground px-7 py-4 text-xs uppercase tracking-[0.22em]"
            >
              Declare a project →
            </a>
            <a
              href="#method"
              className="btn-liquid btn-liquid-chrome border border-border px-7 py-4 text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
            >
              See the method
            </a>
          </div>
        </div>

        <div className="mt-32 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          <span className="inline-block w-2 h-2 bg-foreground rounded-full animate-pulse" />
          Studio online · Accepting Q3 engagements
        </div>
      </div>
    </section>
  );
};

export default Hero;
