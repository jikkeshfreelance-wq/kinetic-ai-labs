import ServiceTemplate from "@/components/propilo/ServiceTemplate";
import img from "@/assets/svc-cloud.jpg";

const CloudDataPage = () => (
  <ServiceTemplate
    pageTitle="Cloud, Data & Integration — Propilo"
    pageDescription="Data platforms, integrations, and cloud infrastructure engineered for AI workloads. We connect what your business already runs on."
    index="S/05"
    eyebrow="Cloud · Data · Integration"
    title={<>The plumbing{" "}<span className="italic text-muted-foreground">that makes AI possible.</span></>}
    lede="Data platforms, integrations, and cloud infra engineered for the AI era. We connect Salesforce to Snowflake to your agent, and make the whole loop observable."
    heroImage={img}
    heroAlt="Floating brushed-titanium server cluster with iridescent fiber connections"
    metrics={[
      { k: "Integrations", v: "150+", note: "shipped in production" },
      { k: "Data freshness", v: "<5min", note: "median end-to-end" },
      { k: "Uptime", v: "99.95%", note: "rolling 12 months" },
      { k: "Infra cost", v: "−38%", note: "avg after migration" },
    ]}
    capabilities={[
      { code: "01", title: "Data Platforms", body: "Lakehouse, warehouse, vector — modeled, governed, query-ready for analytics and AI." },
      { code: "02", title: "ETL / ELT Pipelines", body: "CDC, streaming, batch. Idempotent, replayable, observable end-to-end." },
      { code: "03", title: "Enterprise Integration", body: "Salesforce, SAP, NetSuite, Workday, HubSpot — bidirectional sync, conflict-resolved." },
      { code: "04", title: "API & Event Platforms", body: "GraphQL gateways, event buses, webhook routers — your systems speaking one language." },
      { code: "05", title: "Cloud Architecture", body: "AWS, GCP, Azure — VPC design, IAM, cost guardrails, disaster recovery." },
      { code: "06", title: "Security & Compliance", body: "SOC2, HIPAA, GDPR readiness. Audit trails, RBAC, encryption-at-rest, secrets rotation." },
    ]}
    process={[
      { code: "P/01", title: "Inventory", body: "Map every system, every dataset, every contract. Find the broken seams." },
      { code: "P/02", title: "Architect", body: "Design the target state — diagrams, contracts, SLAs. Approved before we write code." },
      { code: "P/03", title: "Migrate", body: "Strangler pattern. Old and new run in parallel until you say cut." },
      { code: "P/04", title: "Operate", body: "Observability, on-call playbook, monthly cost & performance reviews." },
    ]}
    deliverables={[
      { title: "Architecture spec", body: "C4 diagrams, data contracts, sequence flows. Living docs, not slides." },
      { title: "IaC repository", body: "Terraform/Pulumi modules, env-isolated, peer-reviewed, drift-detected." },
      { title: "Pipeline catalog", body: "Every job documented, lineage tracked, failures alertable, SLAs measurable." },
      { title: "Cost dashboard", body: "Per-service, per-team cost attribution. Guardrails to prevent runaway spend." },
    ]}
    stack={[
      { group: "Data", items: ["Snowflake", "BigQuery", "Postgres", "DuckDB", "Iceberg"] },
      { group: "Pipelines", items: ["dbt", "Airbyte", "Fivetran", "Kafka", "Temporal"] },
      { group: "Cloud", items: ["AWS", "GCP", "Azure", "Cloudflare", "Lovable Cloud"] },
      { group: "Integration", items: ["Salesforce", "SAP", "NetSuite", "HubSpot", "Workato"] },
    ]}
    faqs={[
      { q: "We're stuck on legacy infra. Can you migrate?", a: "Yes. Strangler pattern, zero downtime, parallel-run until the team is comfortable cutting over." },
      { q: "Will this work with our AI agents?", a: "It's designed for it. Every dataset is exposed as a typed, governed surface an agent can query safely." },
      { q: "Do you handle compliance?", a: "We engineer to SOC2/HIPAA/GDPR controls and partner with your auditor for certification." },
    ]}
    prev={{ to: "/services/growth-engineering", label: "Growth Engineering" }}
    next={{ to: "/services/ai-engineering", label: "AI Engineering" }}
  />
);

export default CloudDataPage;
