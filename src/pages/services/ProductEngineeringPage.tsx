import ServiceTemplate from "@/components/propilo/ServiceTemplate";
import img from "@/assets/svc-product.jpg";

const ProductEngineeringPage = () => (
  <ServiceTemplate
    pageTitle="Product Engineering — Propilo"
    pageDescription="SaaS, web, and mobile MVPs engineered in weeks. AI-native by default, production-grade from day one."
    index="S/02"
    eyebrow="Product Engineering"
    title={<>Ship the product.{" "}<span className="italic text-muted-foreground">Then ship the next one.</span></>}
    lede="Web, mobile, and SaaS platforms — engineered in weeks, not quarters. We compress the gap between idea, MVP, and the version users actually pay for."
    heroImage={img}
    heroAlt="Stacked frosted glass devices representing cross-platform product engineering"
    metrics={[
      { k: "Avg MVP", v: "6 wks", note: "from spec to live" },
      { k: "Lighthouse", v: "98+", note: "perf · a11y · SEO" },
      { k: "Crash-free", v: "99.9%", note: "mobile sessions" },
      { k: "Test coverage", v: "85%+", note: "shipped baseline" },
    ]}
    capabilities={[
      { code: "01", title: "SaaS Platforms", body: "Multi-tenant web apps with auth, billing, RBAC, and admin tooling — wired from day one." },
      { code: "02", title: "Mobile (iOS / Android)", body: "React Native + native modules. Single codebase, native feel, App Store-ready." },
      { code: "03", title: "AI-Native UX", body: "Streaming UIs, generative interfaces, copilots embedded in the product surface." },
      { code: "04", title: "Design Systems", body: "Tokens, primitives, motion language. A system your team can extend without us." },
      { code: "05", title: "Backend & APIs", body: "Type-safe APIs, queues, jobs, realtime — engineered for 10× scale from launch." },
      { code: "06", title: "Payments & Billing", body: "Stripe, Paddle, usage-based metering. Revenue infrastructure that won't break at $1M ARR." },
    ]}
    process={[
      { code: "P/01", title: "Spec", body: "One week. We compress your idea into a buildable spec with prioritized scope." },
      { code: "P/02", title: "Prototype", body: "Clickable, kinetic prototype within 7 days. We design in code, not in Figma." },
      { code: "P/03", title: "Build", body: "Two-week sprints, daily deploys, weekly demos. You see progress, not slides." },
      { code: "P/04", title: "Launch", body: "Hardened, instrumented, SEO-ready. Hand over keys + 30-day stabilization." },
    ]}
    deliverables={[
      { title: "Production codebase", body: "TypeScript, tested, CI/CD wired, infra-as-code, full IP transfer." },
      { title: "Design system", body: "Tokens, components, motion library — extendable by your team." },
      { title: "Analytics & SEO", body: "PostHog/GA4, structured data, sitemap, OG, perf budget enforced." },
      { title: "Launch runbook", body: "Deploy, rollback, on-call, scaling playbook. You own the keys." },
    ]}
    stack={[
      { group: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind", "Framer Motion"] },
      { group: "Mobile", items: ["React Native", "Expo", "Swift", "Kotlin"] },
      { group: "Backend", items: ["Node", "Bun", "Postgres", "Redis", "Edge Functions"] },
      { group: "Infra", items: ["Lovable Cloud", "Vercel", "AWS", "Cloudflare"] },
    ]}
    faqs={[
      { q: "Can you start from a Figma file?", a: "Yes — but we'll usually rebuild critical flows in code first. It's faster and exposes UX issues sooner." },
      { q: "Do you do mobile and web together?", a: "Yes. Most engagements ship a web app + a mobile companion sharing types and APIs." },
      { q: "What about post-launch?", a: "We offer a Compound retainer — engineering capacity that compounds your roadmap each month." },
    ]}
    prev={{ to: "/services/ai-engineering", label: "AI Engineering" }}
    next={{ to: "/services/hardware-embedded", label: "Hardware & Embedded AI" }}
  />
);

export default ProductEngineeringPage;
