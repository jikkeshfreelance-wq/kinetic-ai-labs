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
        pageDescription="Get in touch with Propilo. Tell us about your project and we'll respond within 24 hours."
        index="04"
        eyebrow="Contact"
        title={<>Let&apos;s talk about{" "}<span className="italic text-muted-foreground">your project.</span></>}
        lede="Send us a few details and a real human will reply within 24 hours — with a yes, a no, or a sharper question."
      >
        <Console />
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-3 gap-10 font-mono-tech text-sm">
            {[
              ["Email", "hello@propilo.in", "mailto:hello@propilo.in"],
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
