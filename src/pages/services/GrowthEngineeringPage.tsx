import ServiceTemplate from "@/components/propilo/ServiceTemplate";
import img from "@/assets/svc-growth.jpg";

const GrowthEngineeringPage = () => (
  <ServiceTemplate
    pageTitle="Growth Engineering — SEO + AI Lead Agents — Propilo"
    pageDescription="SEO, performance marketing, and AI agents that close inbound leads automatically. A profit loop, not a campaign."
    index="S/04"
    eyebrow="Growth Engineering"
    title={<>More leads.{" "}<span className="italic text-muted-foreground">Closed by an agent.</span></>}
    lede="SEO + paid + AI lead agents, engineered as one closed loop. We don't run marketing campaigns — we install a profit engine that compounds every month."
    heroImage={img}
    heroAlt="Iridescent funnel sculpture distilling ribbons of light into a gold ingot"
    metrics={[
      { k: "Inbound", v: "+212%", note: "avg organic traffic, 6mo" },
      { k: "CAC", v: "−34%", note: "after agent rollout" },
      { k: "Reply time", v: "<60s", note: "AI agent first touch" },
      { k: "Lead → meet", v: "+47%", note: "vs. human-only baseline" },
    ]}
    capabilities={[
      { code: "01", title: "Programmatic SEO", body: "Thousands of pages generated from your data + AI, ranked for long-tail intent." },
      { code: "02", title: "Editorial SEO", body: "Pillar pages, internal linking graphs, schema, Core Web Vitals — engineered to rank." },
      { code: "03", title: "Paid Performance", body: "Google, Meta, LinkedIn — wired to your CRM with closed-loop attribution." },
      { code: "04", title: "AI Lead Agents", body: "24/7 agents that qualify, answer, and book meetings — across email, WhatsApp, and chat." },
      { code: "05", title: "CRM Automation", body: "Lifecycle sequences that move leads through stages without a human touching the keyboard." },
      { code: "06", title: "Attribution & Analytics", body: "Server-side tracking, multi-touch attribution, dashboards your CFO actually trusts." },
    ]}
    process={[
      { code: "P/01", title: "Audit", body: "Map every revenue and cost edge in your funnel. Find the leaks, rank by impact." },
      { code: "P/02", title: "Plumb", body: "Wire CRM, analytics, and channels into one source of truth. Kill the dashboards that lie." },
      { code: "P/03", title: "Deploy", body: "Ship SEO surfaces, ad accounts, and lead agents — all instrumented, all measurable." },
      { code: "P/04", title: "Compound", body: "Weekly experiments, monthly compounding. Each cycle gets cheaper per qualified lead." },
    ]}
    deliverables={[
      { title: "Growth dashboard", body: "Channel → cost → lead → meeting → revenue. One screen, real-time." },
      { title: "AI lead agent", body: "Multi-channel agent (email, WhatsApp, chat), trained on your offer, handed over with eval suite." },
      { title: "SEO infrastructure", body: "Programmatic CMS, schema generator, internal link graph, content ops playbook." },
      { title: "Paid playbook", body: "Account structures, creative library, weekly experiment cadence, kill criteria." },
    ]}
    stack={[
      { group: "SEO", items: ["Next.js ISR", "Schema.org", "Ahrefs", "Search Console", "Screaming Frog"] },
      { group: "Paid", items: ["Google Ads", "Meta Ads", "LinkedIn", "Reddit Ads"] },
      { group: "Lead Agents", items: ["GPT-5", "Claude 4", "WhatsApp Cloud", "Resend", "Twilio"] },
      { group: "CRM & Attr", items: ["HubSpot", "Salesforce", "Attio", "PostHog", "Segment"] },
    ]}
    faqs={[
      { q: "Is this a marketing agency?", a: "No. We're an engineering studio. Growth is a system we build and hand over — not a retainer that bills hours." },
      { q: "Will the AI agent sound like a bot?", a: "No. We tune voice on your transcripts, run human-in-loop on edge cases, and route hot leads to a human in <2 minutes." },
      { q: "How fast do we see lift?", a: "Paid + agents lift inside 2 weeks. SEO compounds from week 6 and dominates by month 4." },
    ]}
    prev={{ to: "/services/hardware-embedded", label: "Hardware & Embedded AI" }}
    next={{ to: "/services/cloud-data", label: "Cloud, Data & Integration" }}
  />
);

export default GrowthEngineeringPage;
