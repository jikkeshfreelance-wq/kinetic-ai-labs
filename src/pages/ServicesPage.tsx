import { Link } from "react-router-dom";
import Nav from "@/components/propilo/Nav";
import Footer from "@/components/propilo/Footer";
import PageShell from "@/components/propilo/PageShell";
import { useReveal } from "@/hooks/useReveal";

import aiImg from "@/assets/svc-ai.jpg";
import productImg from "@/assets/svc-product.jpg";
import hardwareImg from "@/assets/svc-hardware.jpg";
import growthImg from "@/assets/svc-growth.jpg";
import cloudImg from "@/assets/svc-cloud.jpg";

type Service = {
  index: string;
  to: string;
  title: string;
  blurb: string;
  image: string;
  alt: string;
  tags: string[];
};

const SERVICES: Service[] = [
  {
    index: "S/01",
    to: "/services/ai-engineering",
    title: "AI Engineering",
    blurb: "Agents, RAG, copilots, fine-tuning. Production-grade AI bound to a P&L number.",
    image: aiImg,
    alt: "Iridescent neural sculpture representing AI engineering",
    tags: ["Agents", "RAG", "Copilots", "Fine-tuning", "Voice"],
  },
  {
    index: "S/02",
    to: "/services/product-engineering",
    title: "Product Engineering",
    blurb: "Web, mobile, SaaS — engineered in weeks, not quarters. AI-native by default.",
    image: productImg,
    alt: "Layered frosted glass devices representing cross-platform product engineering",
    tags: ["SaaS", "Web", "iOS", "Android", "Design Systems"],
  },
  {
    index: "S/03",
    to: "/services/hardware-embedded",
    title: "Hardware & Embedded AI",
    blurb: "Edge AI, custom firmware, IoT fleets, robotics. We talk to anything with a sensor.",
    image: hardwareImg,
    alt: "Robotic arm assembling an edge AI module",
    tags: ["Edge AI", "Firmware", "IoT", "Robotics", "Industrial"],
  },
  {
    index: "S/04",
    to: "/services/growth-engineering",
    title: "Growth Engineering",
    blurb: "SEO + paid + AI lead agents engineered as one closed loop. More leads, closed by an agent.",
    image: growthImg,
    alt: "Iridescent funnel sculpture distilling ribbons of light",
    tags: ["SEO", "Paid", "AI Agents", "CRM", "Attribution"],
  },
  {
    index: "S/05",
    to: "/services/cloud-data",
    title: "Cloud, Data & Integration",
    blurb: "Data platforms, integrations, and cloud infra engineered for the AI era.",
    image: cloudImg,
    alt: "Brushed-titanium server cluster with iridescent fiber connections",
    tags: ["Data", "ETL", "Cloud", "Integrations", "Compliance"],
  },
];

const ServicesPage = () => {
  useReveal();
  return (
    <>
      <Nav />
      <PageShell
        pageTitle="Services — Propilo · AI Engineering Studio"
        pageDescription="Five disciplines: AI engineering, product engineering, hardware & embedded AI, growth engineering, and cloud, data & integration."
        index="S"
        eyebrow="Services"
        title={<>Five disciplines.{" "}<span className="italic text-muted-foreground">One operating system for value.</span></>}
        lede="We don't sell hours — we sell engineered outcomes. Every service ends in shipped code, an instrumented system, and a number on your P&L that moves."
      >
        <section className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-px bg-border">
            {SERVICES.map((s, i) => (
              <Link
                key={s.to}
                to={s.to}
                className={`group bg-background p-8 lg:p-12 reveal block relative overflow-hidden ${
                  i === SERVICES.length - 1 && SERVICES.length % 2 === 1 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "var(--gradient-chrome)", mixBlendMode: "multiply" }}
                />
                <div className="relative grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-5 aspect-[4/3] overflow-hidden border border-border">
                    <img
                      src={s.image}
                      alt={s.alt}
                      width={1280}
                      height={1280}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="md:col-span-7">
                    <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      <span>{s.index}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">explore →</span>
                    </div>
                    <h3 className="font-serif-display text-4xl lg:text-5xl mt-8 leading-tight">
                      {s.title}
                    </h3>
                    <p className="font-mono-tech text-sm text-muted-foreground mt-6 leading-relaxed">
                      {s.blurb}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono-tech text-[10px] uppercase tracking-widest border border-foreground/30 px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-secondary/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28">
            <div className="grid md:grid-cols-12 gap-10 items-end">
              <h2 className="md:col-span-8 font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight reveal">
                We can build{" "}
                <span className="italic text-muted-foreground">anything.</span>
              </h2>
              <p className="md:col-span-4 font-mono-tech text-sm text-muted-foreground leading-relaxed reveal">
                <span className="text-foreground">// </span>
                Software that thinks. Hardware that listens. Loops that compound.
                If you can describe the outcome, we can engineer the system.
              </p>
            </div>
            <div className="mt-12 reveal">
              <Link
                to="/contact"
                className="btn-liquid inline-block border border-foreground px-7 py-4 text-xs uppercase tracking-[0.22em]"
              >
                Declare a project →
              </Link>
            </div>
          </div>
        </section>
      </PageShell>
      <Footer />
    </>
  );
};

export default ServicesPage;
