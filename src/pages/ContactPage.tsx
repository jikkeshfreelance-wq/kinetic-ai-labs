import Nav from "@/components/propilo/Nav";
import Footer from "@/components/propilo/Footer";
import PageShell from "@/components/propilo/PageShell";
import Console from "@/components/propilo/Console";
import { useReveal } from "@/hooks/useReveal";

const ContactPage = () => {
  useReveal();
  return (
    <>
      <Nav />
      <PageShell
        pageTitle="Contact — Propilo"
        pageDescription="Declare a project with Propilo. No forms. A console. Response within 24h."
        index="04"
        eyebrow="Contact"
        title={<>No contact form.{" "}<span className="italic text-muted-foreground">A console.</span></>}
        lede="Tell us the system you want to exist. We'll respond within 24h with a yes, a no, or a sharper question."
      >
        <Console />
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-3 gap-10 font-mono-tech text-sm">
            {[
              ["Email", "hello@propilo.studio", "mailto:hello@propilo.studio"],
              ["Studio", "Chennai, India", "#"],
              ["Hours", "Mon–Fri · GMT+5:30", "#"],
            ].map(([k, v, href]) => (
              <a key={k} href={href} className="border-t border-border pt-6 group reveal block">
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{k}</div>
                <div className="font-serif-display text-3xl mt-3 group-hover:italic transition-all">{v}</div>
              </a>
            ))}
          </div>
        </section>
      </PageShell>
      <Footer />
    </>
  );
};

export default ContactPage;
