import ServiceTemplate from "@/components/propilo/ServiceTemplate";
import img from "@/assets/svc-product.jpg";

const ProductEngineeringPage = () => (
  <ServiceTemplate
    pageTitle="Product Engineering — Propilo"
    pageDescription="SaaS, web, and mobile products engineered in weeks. AI-native by default — built to make money, not just look good."
    index="S/02"
    eyebrow="Product Engineering"
    title={<>Ship the product.{" "}<span className="italic text-muted-foreground">Then ship the next one.</span></>}
    lede="Web, mobile, and SaaS products engineered in weeks, not quarters. We compress the gap between idea and the version users actually pay for — and we build AI into the product so it sells itself."
    heroImage={img}
    heroAlt="Stacked frosted glass devices representing cross-platform product engineering"
    metrics={[
      { k: "Avg MVP", v: "6 wks", note: "from spec to live" },
      { k: "Time to revenue", v: "−68%", note: "vs. traditional builds" },
      { k: "Activation lift", v: "+44%", note: "with AI-native UX" },
      { k: "Retention", v: "+27%", note: "after 90 days" },
    ]}
    capabilities={[
      { code: "01", title: "SaaS Products", body: "Multi-tenant platforms with auth, billing, and admin tooling — ready to charge customers from day one." },
      { code: "02", title: "Mobile Apps", body: "iOS and Android apps that feel native, ship together, and update without app-store delays." },
      { code: "03", title: "AI-Native Experiences", body: "Products with AI woven into the core flow — copilots, smart defaults, generative interfaces that lift conversion." },
      { code: "04", title: "Internal Tools", body: "Replace the spreadsheet that runs your business with a real product your team will actually use." },
      { code: "05", title: "MVPs That Convert", body: "Not a prototype — a polished, sellable v1 designed to validate willingness-to-pay in weeks." },
      { code: "06", title: "Revenue Infrastructure", body: "Subscriptions, usage billing, trials, upgrades, dunning. Money flows in without you babysitting it." },
    ]}
    process={[
      { code: "P/01", title: "Spec", body: "One week. We compress your idea into a buildable plan with prioritized scope and a clear revenue thesis." },
      { code: "P/02", title: "Prototype", body: "Clickable, kinetic prototype within 7 days. We design in code so you see the real thing, not a mockup." },
      { code: "P/03", title: "Build", body: "Two-week sprints, weekly demos. You see real progress, not status reports." },
      { code: "P/04", title: "Launch", body: "Live, instrumented, ready to charge. We hand over keys plus 30 days of stabilization." },
    ]}
    deliverables={[
      { title: "A product customers pay for", body: "Live, polished, billing-ready. Not a demo — a real product with a real checkout." },
      { title: "AI built into the core", body: "Smart features that lift activation and retention — not bolted-on chatbots." },
      { title: "Growth instrumentation", body: "Every funnel step measured. You know what's working and what to fix next." },
      { title: "A team that can extend it", body: "Clean handover, design system, and runbook so your team owns the future without us." },
    ]}
    workflows={[
      {
        trigger: "A founder has an idea but no engineering team.",
        agent: "We spec, design, and ship a paying-customer-ready MVP in 6 weeks — including billing and onboarding.",
        outcome: "First revenue in week 7 instead of month 9. Investor narrative goes from 'pre-launch' to 'paying users.'",
        lift: "−68% time to revenue",
      },
      {
        trigger: "A new user signs up but doesn't know where to start.",
        agent: "Embedded AI copilot greets them, asks one question, and personalizes the entire onboarding to their goal.",
        outcome: "Activation rate jumps the day it ships. Less drop-off, more paid conversions.",
        lift: "+44% activation",
      },
      {
        trigger: "Existing app feels slow, dated, and customers are churning.",
        agent: "We rebuild the critical flows in modern stack with AI-native UX — same features, ten-times the polish.",
        outcome: "Churn drops, NPS climbs, sales team finally has a demo they're proud to show.",
        lift: "+27% retention",
      },
      {
        trigger: "Your team is running the business out of 12 spreadsheets.",
        agent: "We turn the worst three into a real internal tool with workflows, permissions, and AI suggestions.",
        outcome: "Hours of weekly admin disappear. The team scales without hiring more ops headcount.",
        lift: "10+ hrs / wk reclaimed",
      },
    ]}
    faqs={[
      { q: "Can you start from a Figma file?", a: "Yes — but we'll usually rebuild critical flows in code first. It's faster, looks better, and exposes real UX issues sooner." },
      { q: "Do you do mobile and web together?", a: "Yes. Most engagements ship a web app and a mobile companion that share the same backend." },
      { q: "What about after launch?", a: "We offer a Compound retainer — engineering capacity that compounds your roadmap each month." },
    ]}
    prev={{ to: "/services/ai-engineering", label: "AI Agents & Automation" }}
    next={{ to: "/services/hardware-embedded", label: "Hardware & Embedded AI" }}
  />
);

export default ProductEngineeringPage;
