import ServiceTemplate from "@/components/propilo/ServiceTemplate";
import img from "@/assets/svc-cloud.jpg";

const CloudDataPage = () => (
  <ServiceTemplate
    pageTitle="Connected Systems & Data — Propilo"
    pageDescription="We connect the tools your business already runs on — so your data flows, your reports tell the truth, and your AI agents can actually do their job."
    index="S/05"
    eyebrow="Connected Systems & Data"
    title={<>The plumbing{" "}<span className="italic text-muted-foreground">that makes AI possible.</span></>}
    lede="Your CRM, your ERP, your spreadsheets, your warehouse — engineered into one connected system. So your team stops re-typing data, your reports stop lying, and your AI agents finally have something real to work with."
    heroImage={img}
    heroAlt="Floating brushed-titanium server cluster with iridescent fiber connections"
    metrics={[
      { k: "Integrations live", v: "150+", note: "shipped in production" },
      { k: "Data freshness", v: "<5min", note: "median end-to-end" },
      { k: "Manual entry", v: "−92%", note: "after automation" },
      { k: "Infra cost", v: "−38%", note: "avg after migration" },
    ]}
    capabilities={[
      { code: "01", title: "Systems That Talk", body: "Salesforce, HubSpot, NetSuite, your warehouse, your spreadsheets — finally synced, in real time, without copy-paste." },
      { code: "02", title: "One Source of Truth", body: "A single, trustworthy view of every customer, order, and number — so leadership stops arguing about whose dashboard is right." },
      { code: "03", title: "Automated Data Flows", body: "Data moves where it needs to go automatically. No more 'can you export that and email it to me?'" },
      { code: "04", title: "AI-Ready Foundations", body: "Clean, governed, queryable data — the prerequisite for any AI agent that's actually going to work in your business." },
      { code: "05", title: "Cost-Smart Cloud", body: "We rebuild cloud setups to cut waste — usually 30–40% off your bill within the first quarter." },
      { code: "06", title: "Security & Compliance", body: "SOC2, HIPAA, GDPR-ready. Audit trails, role-based access, encryption — so the deal doesn't stall in legal." },
    ]}
    process={[
      { code: "P/01", title: "Inventory", body: "Map every system, every dataset, every contract. Find the broken seams costing you money." },
      { code: "P/02", title: "Architect", body: "Design the target state — diagrams, data contracts, SLAs. Approved before we write code." },
      { code: "P/03", title: "Migrate", body: "Old and new run in parallel until you say cut. Zero downtime, zero drama." },
      { code: "P/04", title: "Operate", body: "Monitoring, on-call, monthly cost and performance reviews. We don't disappear after launch." },
    ]}
    deliverables={[
      { title: "A business that runs on connected data", body: "No more re-typing, no more contradicting reports, no more weekly 'data reconciliation' meetings." },
      { title: "Reports leadership trusts", body: "One dashboard, one number, real-time. Your CFO and your CMO finally agree." },
      { title: "A foundation AI can build on", body: "Clean, governed data — the difference between an AI demo and an AI agent that actually ships value." },
      { title: "A cloud bill that makes sense", body: "We typically cut 30–40% of waste in the first quarter and put guardrails in to keep it that way." },
    ]}
    workflows={[
      {
        trigger: "Sales rep updates a deal in the CRM.",
        agent: "Within 60 seconds the data syncs to finance, ops, and the customer-success tool — automatically.",
        outcome: "Every team works off the same number. Onboarding kicks off the day the deal closes, not 4 days later.",
        lift: "−92% manual entry",
      },
      {
        trigger: "CEO asks 'how much MRR did we add last week?'",
        agent: "One dashboard, refreshed every 5 minutes, sourced directly from billing — not a spreadsheet someone updated last Tuesday.",
        outcome: "Decisions get made in the meeting. No more 'we'll get back to you with the real number.'",
        lift: "<5min data freshness",
      },
      {
        trigger: "You want to deploy an AI agent — but your data is in 9 different tools.",
        agent: "We unify the data into a single, governed surface the agent can safely query — with permissions and audit trail.",
        outcome: "AI projects that used to fail at 'we can't access the data' actually ship and deliver ROI.",
        lift: "AI projects shipped, not shelved",
      },
      {
        trigger: "Cloud bill hits a new monthly high.",
        agent: "We audit usage, kill zombie services, right-size compute, install guardrails to alert before it spikes again.",
        outcome: "Bill drops 30–40% within the quarter. Engineering team gets a clear cost-per-customer number.",
        lift: "−38% cloud spend",
      },
    ]}
    faqs={[
      { q: "We're stuck on legacy infra. Can you migrate us?", a: "Yes. We run old and new in parallel until your team is comfortable cutting over. Zero downtime is the default." },
      { q: "Will this work with our AI agents?", a: "It's designed for it. Every dataset becomes a clean, governed surface an agent can query safely." },
      { q: "Do you handle compliance?", a: "We engineer to SOC2, HIPAA, and GDPR controls and partner with your auditor for certification." },
    ]}
    prev={{ to: "/services/growth-engineering", label: "Growth Engineering" }}
    next={{ to: "/services/ai-engineering", label: "AI Agents & Automation" }}
  />
);

export default CloudDataPage;
