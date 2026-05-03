import { Link } from "react-router-dom";

const ContactCTA = () => (
  <section id="contact-cta" className="relative border-t border-border bg-secondary/40">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-32">
      <div className="grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground reveal">
          [ 04 ] Engage
        </div>
        <div className="md:col-span-9 reveal">
          <h2 className="font-serif-display text-5xl md:text-8xl leading-[0.92] tracking-tight">
            Let&apos;s build the system{" "}
            <span className="italic text-muted-foreground">that compounds your revenue.</span>
          </h2>
          <p className="mt-8 max-w-2xl font-mono-tech text-sm text-muted-foreground leading-relaxed">
            <span className="text-foreground">// </span>
            Tell us what you&apos;re building. We reply within 24 hours with a scoped path forward —
            no decks, no boilerplate, no sales loop.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              to="/contact"
              className="btn-liquid border border-foreground px-10 py-5 text-xs uppercase tracking-[0.25em] inline-flex items-center gap-3"
            >
              Declare a project
              <span aria-hidden>→</span>
            </Link>
            <a
              href="mailto:hello@propilo.studio"
              className="font-mono-tech text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
            >
              or email · hello@propilo.studio
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-16 max-w-3xl">
            {[
              ["24h", "First response"],
              ["5 days", "Scoped proposal"],
              ["2 wks", "First shipped artifact"],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-border pt-4">
                <div className="font-serif-display text-3xl">{k}</div>
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactCTA;
