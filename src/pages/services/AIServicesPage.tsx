import ServiceTemplate from "@/components/propilo/ServiceTemplate";
import img from "@/assets/svc-ai.jpg";

const AIServicesPage = () => (
  <ServiceTemplate
    pageTitle="AI Agents & Automation — Propilo"
    pageDescription="AI agents that handle real work — sales follow-ups, support tickets, ops tasks. Engineered to lift revenue and cut cost."
    index="S/01"
    eyebrow="AI Agents & Automation"
    title={
      <>
        AI that{" "}
        <span className="italic text-muted-foreground">earns its keep.</span>
      </>
    }
    lede="We don't sell chatbots. We deploy AI agents that take real work off your team — closing leads, answering customers, processing operations — and we tie every agent to a number on your P&L."
    heroImage={img}
    heroAlt="Iridescent neural sculpture on paper representing AI engineering"
    metrics={[
      { k: "Hours saved / wk", v: "120+", note: "per team, after rollout" },
      { k: "Lead reply", v: "<60s", note: "24/7, every channel" },
      { k: "Support deflection", v: "63%", note: "tickets resolved by agent" },
      { k: "Avg ROI", v: "8.4×", note: "in first 12 months" },
    ]}
    capabilities={[
      { code: "01", title: "Sales Agents", body: "Qualify, nurture, and book meetings 24/7. Your pipeline stays warm while your team sleeps." },
      { code: "02", title: "Customer Support Agents", body: "Resolve 60–80% of tickets instantly with answers grounded in your real docs and history." },
      { code: "03", title: "Operations Agents", body: "Replace manual SOPs — invoice processing, data entry, scheduling, internal lookups." },
      { code: "04", title: "In-Product Copilots", body: "Embed an AI assistant inside your product that drives activation, retention, and upsell." },
      { code: "05", title: "Voice Agents", body: "Pick up calls, qualify, escalate. A 24/7 receptionist that never has a bad day." },
      { code: "06", title: "Document & Data Agents", body: "Read contracts, extract data, summarize meetings, fill forms — at scale, with citations." },
    ]}
    process={[
      { code: "P/01", title: "Map", body: "We find the 3 highest-cost workflows in your business — the ones that drain hours or leak revenue." },
      { code: "P/02", title: "Prototype", body: "Working agent in 14 days, plugged into your real data. You see lift, not slides." },
      { code: "P/03", title: "Harden", body: "We add guardrails, fallbacks, and quality scoring so the agent stays on-brand on the bad day." },
      { code: "P/04", title: "Scale", body: "Roll out across the team, measure dollars saved or earned, then compound to the next workflow." },
    ]}
    deliverables={[
      { title: "A working AI workforce", body: "Agents live in your business, doing the jobs you defined — with measurable output every week." },
      { title: "Performance dashboard", body: "See exactly what each agent is doing, how much it's saving, and where to push next." },
      { title: "Quality safety net", body: "Human-in-the-loop on edge cases, brand-safe responses, instant rollback if anything drifts." },
      { title: "Ownership & playbook", body: "You own the system. We hand over a runbook so your team can extend it without us." },
    ]}
    workflows={[
      {
        trigger: "A new lead fills out your website form at 2:14 AM.",
        agent: "AI agent replies in 40 seconds, qualifies budget and timeline, books a meeting on your calendar.",
        outcome: "Lead is sold while your competitors are still asleep.",
        lift: "+47% lead → meeting",
      },
      {
        trigger: "Customer emails: 'Where's my order?'",
        agent: "Agent looks up order status, shipping ETA, replies in your brand voice with a tracking link.",
        outcome: "Ticket closed in 30 seconds. Support team focuses on real problems.",
        lift: "63% deflection",
      },
      {
        trigger: "Invoice PDF arrives in shared inbox.",
        agent: "Agent extracts vendor, amount, line items, posts to accounting, flags anomalies.",
        outcome: "Finance team stops doing data entry. Closes books 4 days faster.",
        lift: "−92% manual entry",
      },
      {
        trigger: "User opens your product for the 3rd time without converting.",
        agent: "In-app copilot offers a personalized walkthrough, answers their stuck question, nudges to upgrade.",
        outcome: "Activation lift the day it ships. Upsell revenue without hiring CS.",
        lift: "+31% activation",
      },
    ]}
    faqs={[
      { q: "How is this different from ChatGPT or a chatbot vendor?", a: "ChatGPT is a tool. We build an employee — an AI system that owns a job, hits a number, and reports to your team." },
      { q: "Will it sound like a robot?", a: "No. We tune voice on your real conversations and run quality checks before anything reaches a customer." },
      { q: "What if it makes a mistake?", a: "We engineer guardrails, escalation paths, and human-in-loop for edge cases. The agent knows when to ask for help." },
      { q: "How fast do we see results?", a: "First agent live in 2 weeks. Measurable ROI in 30–60 days. Compound from there." },
    ]}
    prev={{ to: "/services/cloud-data", label: "Connected Systems" }}
    next={{ to: "/services/product-engineering", label: "Product Engineering" }}
  />
);

export default AIServicesPage;
