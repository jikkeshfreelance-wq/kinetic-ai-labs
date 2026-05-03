import ServiceTemplate from "@/components/propilo/ServiceTemplate";
import img from "@/assets/svc-hardware.jpg";

const HardwareEmbeddedPage = () => (
  <ServiceTemplate
    pageTitle="Hardware & Embedded AI — Propilo"
    pageDescription="From smart devices to industrial fleets — we put intelligence on the machines that run your business."
    index="S/03"
    eyebrow="Hardware & Embedded AI"
    title={<>If it has a sensor,{" "}<span className="italic text-muted-foreground">we can talk to it.</span></>}
    lede="Smart devices, connected fleets, industrial machines, and edge AI — engineered to lift uptime, cut waste, and turn physical operations into a real-time business."
    heroImage={img}
    heroAlt="Robotic arm assembling an edge AI module on engineering blueprints"
    metrics={[
      { k: "Devices online", v: "12k+", note: "managed in production" },
      { k: "Uptime gain", v: "+18%", note: "after AI rollout" },
      { k: "Maintenance cost", v: "−41%", note: "predictive vs reactive" },
      { k: "Decision time", v: "<40ms", note: "on the device, no cloud" },
    ]}
    capabilities={[
      { code: "01", title: "Smart Devices", body: "Turn a 'dumb' product into a connected one — telemetry, remote control, AI features customers will pay more for." },
      { code: "02", title: "Connected Fleets", body: "Manage 10 or 10,000 devices from one screen. Updates, diagnostics, and health all from your laptop." },
      { code: "03", title: "Predictive Maintenance", body: "AI watches your machines and tells you what's about to break — before it costs you a shift." },
      { code: "04", title: "Industrial Automation", body: "Bring AI to the factory floor — vision-based QC, anomaly detection, line-rate optimization." },
      { code: "05", title: "Edge AI", body: "Models that run on-device — instant decisions, no cloud bill, no latency, no privacy compromise." },
      { code: "06", title: "Robotics & Vision", body: "Camera-driven inspection, sorting, and motion — reliable enough to replace a manual station." },
    ]}
    process={[
      { code: "P/01", title: "Bench", body: "Reference hardware in our lab within 7 days. We benchmark before we promise anything." },
      { code: "P/02", title: "Bridge", body: "First device sending live data to your dashboard inside 4 weeks." },
      { code: "P/03", title: "Field", body: "Pilot 10–100 units in real conditions. We instrument failure, not just success stories." },
      { code: "P/04", title: "Fleet", body: "Roll out to thousands. Updates ship over-the-air, problems get found before customers call." },
    ]}
    deliverables={[
      { title: "Smarter physical products", body: "Devices that report, learn, and unlock features your competitors can't ship." },
      { title: "A live operations dashboard", body: "Every device visible — health, usage, alerts — in one place your team actually uses." },
      { title: "Predictive savings", body: "Less downtime, fewer truck rolls, fewer warranty claims. Cost reductions you can put on a slide." },
      { title: "A fleet you can grow", body: "Provisioning, OTA updates, remote diagnostics — scale from 10 units to 10,000 without re-architecting." },
    ]}
    workflows={[
      {
        trigger: "A motor on the production line starts vibrating slightly off-spec.",
        agent: "Edge AI on the device flags the anomaly, opens a maintenance ticket, schedules service before failure.",
        outcome: "Avoided a 6-hour line stoppage that would have cost $48k. Maintenance becomes a planned cost.",
        lift: "−41% downtime",
      },
      {
        trigger: "A customer in the field has an issue with a connected device.",
        agent: "Support pulls up the device's live telemetry, diagnoses remotely, pushes a fix over-the-air.",
        outcome: "No truck roll. Issue resolved in 12 minutes instead of 2 days. Customer keeps their contract.",
        lift: "−87% field visits",
      },
      {
        trigger: "A camera on the QC line sees a defect.",
        agent: "On-device vision model rejects the unit in 30ms, logs the defect type, alerts the line lead if a pattern emerges.",
        outcome: "Defect rate drops, scrap cost drops, customer returns drop — without slowing the line.",
        lift: "+18% throughput yield",
      },
      {
        trigger: "Product team wants to launch a premium tier.",
        agent: "We unlock new AI-driven features over-the-air on the existing hardware fleet — no recall, no new SKU.",
        outcome: "New revenue stream from devices already in customer hands. Margin expansion without a new product launch.",
        lift: "New ARR, zero hardware cost",
      },
    ]}
    faqs={[
      { q: "Do you design the circuit board?", a: "We partner with hardware design firms for the board itself. We own everything from the firmware up — the brains of the device." },
      { q: "Can AI really run on a tiny chip?", a: "Yes — we run vision and intent models on devices the size of a coin. Heavier work routes to the cloud only when needed." },
      { q: "What about certification?", a: "We design with FCC/CE/UL pathways in mind and hand off a clean package to your compliance partner." },
    ]}
    prev={{ to: "/services/product-engineering", label: "Product Engineering" }}
    next={{ to: "/services/growth-engineering", label: "Growth Engineering" }}
  />
);

export default HardwareEmbeddedPage;
