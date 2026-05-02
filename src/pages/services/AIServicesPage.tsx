import ServiceTemplate from "@/components/propilo/ServiceTemplate";
import img from "@/assets/svc-ai.jpg";

const AIServicesPage = () => (
  <ServiceTemplate
    pageTitle="AI Engineering Services — Propilo"
    pageDescription="Agents, RAG, copilots, fine-tuned models. Production-grade AI engineered for measurable business outcomes."
    index="S/01"
    eyebrow="AI Engineering"
    title={
      <>
        AI that{" "}
        <span className="italic text-muted-foreground">earns its keep.</span>
      </>
    }
    lede="From single-task automations to multi-agent systems with memory and tools — we engineer AI that ships, scales, and shows up on the P&L."
    heroImage={img}
    heroAlt="Iridescent neural sculpture on paper representing AI engineering"
    metrics={[
      { k: "Agents shipped", v: "60+", note: "across ops, sales, support" },
      { k: "Tokens / day", v: "180M", note: "served in production" },
      { k: "Eval coverage", v: "94%", note: "before any rollout" },
      { k: "Latency p95", v: "1.2s", note: "median agent response" },
    ]}
    capabilities={[
      { code: "01", title: "Agentic Workflows", body: "Planner → tool DAG → critic loops that replace SOPs and tickets, not just chatbots." },
      { code: "02", title: "RAG & Knowledge", body: "Vector + structured retrieval over your docs, tickets, and CRM with citation-grade answers." },
      { code: "03", title: "Copilots & Assistants", body: "In-app copilots embedded in your product to lift activation, retention, and ARPU." },
      { code: "04", title: "Fine-tuning & Distillation", body: "Smaller, cheaper, faster models tuned on your data. Frontier quality at 1/10 the cost." },
      { code: "05", title: "Voice & Multimodal", body: "Realtime voice agents, vision pipelines, document OCR + extraction at scale." },
      { code: "06", title: "Evals & Guardrails", body: "Offline eval suites, online scoring, PII filters, and rollback gates — every release scored." },
    ]}
    process={[
      { code: "P/01", title: "Map", body: "Find the 3 highest-ROI loops in your business where AI removes a person from a task." },
      { code: "P/02", title: "Prototype", body: "Working agent in 14 days, instrumented from day one with real data, real users." },
      { code: "P/03", title: "Harden", body: "Evals, guardrails, fallbacks, observability. We engineer for the bad day." },
      { code: "P/04", title: "Scale", body: "Roll out behind feature flags, measure lift, compound to the next loop." },
    ]}
    deliverables={[
      { title: "Agent codebase", body: "Typed, tested, version-controlled. Handed over with full IP transfer." },
      { title: "Eval harness", body: "Reproducible eval suite + dashboard you can run on every PR." },
      { title: "Observability", body: "Per-step traces, cost/latency/quality dashboards, alerting wired in." },
      { title: "Runbook", body: "On-call playbook, failure modes, model swap paths, cost guardrails." },
    ]}
    stack={[
      { group: "Models", items: ["GPT-5", "Claude 4", "Gemini 3", "Llama 4", "Custom FT"] },
      { group: "Orchestration", items: ["LangGraph", "Vercel AI SDK", "Temporal", "Inngest"] },
      { group: "Retrieval", items: ["pgvector", "Pinecone", "Turbopuffer", "Postgres FTS"] },
      { group: "Eval & Obs", items: ["Braintrust", "Langfuse", "OpenTelemetry"] },
    ]}
    faqs={[
      { q: "How is this different from a chatbot vendor?", a: "We don't license a wrapper. We engineer a system you own — model-agnostic, observable, and bound to a P&L number." },
      { q: "Will it work on our private data?", a: "Yes. We deploy in your VPC or on Lovable Cloud with row-level security, PII redaction, and per-tenant isolation." },
      { q: "What happens when models change?", a: "Our eval harness lets you swap models in a single config change and prove quality before rollout." },
    ]}
    prev={{ to: "/services/cloud-data", label: "Cloud, Data & Integration" }}
    next={{ to: "/services/product-engineering", label: "Product Engineering" }}
  />
);

export default AIServicesPage;
