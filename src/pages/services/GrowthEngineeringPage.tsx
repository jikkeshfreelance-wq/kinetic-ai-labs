import ServiceTemplate from "@/components/propilo/ServiceTemplate";
import img from "@/assets/svc-growth.jpg";

const GrowthEngineeringPage = () => (
  <ServiceTemplate
    pageTitle="Growth Engineering — SEO + AI Lead Agents — Propilo"
    pageDescription="SEO, paid, and AI agents that close inbound leads automatically. A profit loop, not a marketing campaign."
    index="S/04"
    eyebrow="Growth Engineering"
    title={<>More leads.{" "}<span className="italic text-muted-foreground">Closed by an agent.</span></>}
    lede="SEO, paid, and AI lead agents engineered as one closed loop. We don't run marketing campaigns — we install a profit engine that brings in leads while you sleep and closes them while your competitors are still typing a reply."
    heroImage={img}
    heroAlt="Iridescent funnel sculpture distilling ribbons of light into a gold ingot"
    metrics={[
      { k: "Inbound", v: "+212%", note: "avg organic traffic, 6mo" },
      { k: "Cost per lead", v: "−34%", note: "after agent rollout" },
      { k: "Reply time", v: "<60s", note: "AI agent first touch" },
      { k: "Lead → meet", v: "+47%", note: "vs. human-only baseline" },
    ]}
    capabilities={[
      { code: "01", title: "Found Online", body: "We make your business the answer customers find when they search — across hundreds of high-intent keywords." },
      { code: "02", title: "Pages That Convert", body: "Programmatic landing pages built from your data — one for every customer segment, niche, and city." },
      { code: "03", title: "Paid That Pays", body: "Google, Meta, LinkedIn — wired to your CRM so every dollar spent is tied to a closed deal, not a vanity click." },
      { code: "04", title: "AI Lead Agents", body: "24/7 agents that qualify inbound, answer questions, and book meetings on your calendar — across email, WhatsApp, and chat." },
      { code: "05", title: "Lifecycle Automation", body: "Leads moved through stages without your team touching a keyboard. Stay top-of-mind, close on autopilot." },
      { code: "06", title: "Revenue Reporting", body: "One dashboard your CFO trusts. Channel → cost → lead → meeting → revenue, in real time." },
    ]}
    process={[
      { code: "P/01", title: "Audit", body: "Map every revenue and cost edge in your funnel. Find the leaks, rank them by dollar impact." },
      { code: "P/02", title: "Plumb", body: "Wire your CRM, ads, and website into one source of truth. Kill the dashboards that lie." },
      { code: "P/03", title: "Deploy", body: "Ship SEO surfaces, ad accounts, and lead agents — all instrumented, all measurable from day one." },
      { code: "P/04", title: "Compound", body: "Weekly experiments, monthly compounding. Each cycle gets cheaper per qualified lead." },
    ]}
    deliverables={[
      { title: "A profit engine, not a campaign", body: "A working system that brings in leads and closes them — every day, with or without your involvement." },
      { title: "An AI sales rep on duty 24/7", body: "Replies in under a minute, qualifies properly, books meetings — never sick, never off-brand." },
      { title: "SEO that compounds", body: "Hundreds of high-intent pages ranking for the searches your buyers actually make." },
      { title: "Honest revenue numbers", body: "One dashboard. Channel, cost, lead, meeting, deal. No more 'we think marketing is working.'" },
    ]}
    workflows={[
      {
        trigger: "A buyer searches 'best [your category] for [their use case]' on Google.",
        agent: "Your programmatic SEO page — built for that exact search — ranks #1, converts them into a lead.",
        outcome: "Free, compounding inbound. The page keeps earning leads every month at zero marginal cost.",
        lift: "+212% organic, 6 months",
      },
      {
        trigger: "An ad click turns into a form fill at 11pm on a Saturday.",
        agent: "AI agent emails and texts within 60 seconds, qualifies BANT, books a Tuesday discovery call.",
        outcome: "Lead booked before competitors even see the inquiry on Monday morning.",
        lift: "+47% lead → meeting",
      },
      {
        trigger: "A lead replies with 'just researching, not ready yet.'",
        agent: "Agent moves them into a nurture track — sends relevant case studies, checks back in 2 weeks, re-qualifies.",
        outcome: "Cold leads turn warm without a human touching them. Pipeline stays full.",
        lift: "+22% reactivation",
      },
      {
        trigger: "CMO wants to know which channel is actually making money.",
        agent: "Real-time dashboard shows channel → cost → lead → meeting → closed revenue, attributed end-to-end.",
        outcome: "Marketing budget shifts to what works. Dead channels get killed. ROAS climbs every quarter.",
        lift: "−34% cost per lead",
      },
    ]}
    faqs={[
      { q: "Are you a marketing agency?", a: "No. We're an engineering studio. Growth is a system we build and hand over — not a retainer that bills hours." },
      { q: "Will the AI agent sound like a bot?", a: "No. We tune voice on your real conversations, run human-in-loop on edge cases, and route hot leads to a human in under 2 minutes." },
      { q: "How fast do we see lift?", a: "Paid plus agents lift inside 2 weeks. SEO compounds from week 6 and dominates by month 4." },
    ]}
    prev={{ to: "/services/hardware-embedded", label: "Hardware & Embedded AI" }}
    next={{ to: "/services/cloud-data", label: "Connected Systems" }}
  />
);

export default GrowthEngineeringPage;
