import ServiceTemplate from "@/components/propilo/ServiceTemplate";
import img from "@/assets/svc-hardware.jpg";

const HardwareEmbeddedPage = () => (
  <ServiceTemplate
    pageTitle="Hardware & Embedded AI — Propilo"
    pageDescription="From custom firmware to edge AI on industrial hardware. We integrate with anything that has a serial port — and most things that don't."
    index="S/03"
    eyebrow="Hardware & Embedded AI"
    title={<>If it has a sensor,{" "}<span className="italic text-muted-foreground">we can talk to it.</span></>}
    lede="IoT fleets, edge AI, robotics, industrial PLCs, custom firmware. We bridge atoms and bits — and put a model on the chip when it matters."
    heroImage={img}
    heroAlt="Robotic arm assembling an edge AI module on engineering blueprints"
    metrics={[
      { k: "Devices online", v: "12k+", note: "managed in production fleets" },
      { k: "OTA success", v: "99.7%", note: "across last 1M updates" },
      { k: "Edge inference", v: "<40ms", note: "on-device, no cloud" },
      { k: "Protocols", v: "20+", note: "from MQTT to Modbus" },
    ]}
    capabilities={[
      { code: "01", title: "Edge AI", body: "Quantized, distilled models running on-device — Jetson, Coral, ESP32-S3, Raspberry Pi, custom MCUs." },
      { code: "02", title: "Custom Firmware", body: "Bare-metal, RTOS, or Linux. Power-aware, secure-boot, OTA-ready from day one." },
      { code: "03", title: "IoT Fleets", body: "Provisioning, OTA, telemetry, remote shell. Manage 10 devices the same way you manage 10,000." },
      { code: "04", title: "Industrial Integration", body: "PLCs, SCADA, Modbus, OPC-UA, CAN bus. We meet legacy hardware where it lives." },
      { code: "05", title: "Robotics & Vision", body: "ROS2, computer vision pipelines, sensor fusion, motion planning, safety interlocks." },
      { code: "06", title: "Wearables & Devices", body: "BLE, low-power design, companion apps, FCC/CE-aware design choices." },
    ]}
    process={[
      { code: "P/01", title: "Bench", body: "Reference hardware in our lab within 7 days. We benchmark before we promise." },
      { code: "P/02", title: "Bridge", body: "Firmware + cloud bridge live. First device telemetry hits your dashboard." },
      { code: "P/03", title: "Field", body: "Pilot 10–100 units in real conditions. We instrument failure, not just success." },
      { code: "P/04", title: "Fleet", body: "OTA pipeline, remote diagnostics, scale-up to thousands of devices." },
    ]}
    deliverables={[
      { title: "Firmware repo", body: "Source, toolchain, build scripts, signed OTA pipeline. Reproducible from a clean machine." },
      { title: "Cloud control plane", body: "Device registry, telemetry, OTA, remote shell, audit log." },
      { title: "Edge model bundle", body: "Quantized model, runtime, on-device eval suite, fallback paths." },
      { title: "Hardware report", body: "BOM analysis, power profile, thermal data, certification readiness." },
    ]}
    stack={[
      { group: "Silicon", items: ["NVIDIA Jetson", "Coral TPU", "ESP32", "STM32", "RP2040"] },
      { group: "Runtime", items: ["FreeRTOS", "Zephyr", "Yocto Linux", "ROS2"] },
      { group: "Edge ML", items: ["ONNX", "TensorRT", "TFLite Micro", "llama.cpp"] },
      { group: "Cloud", items: ["AWS IoT", "Azure IoT", "Memfault", "Balena", "MQTT"] },
    ]}
    faqs={[
      { q: "Do you design the PCB too?", a: "We partner with hardware design houses for board bring-up. We own everything from the bootloader up." },
      { q: "Can you put an LLM on a $5 chip?", a: "No — but we can put a 50MB distilled vision/intent model on one and route the hard cases to the cloud." },
      { q: "What about certification?", a: "We design with FCC/CE/UL pathways in mind and hand off a clean package to your compliance partner." },
    ]}
    prev={{ to: "/services/product-engineering", label: "Product Engineering" }}
    next={{ to: "/services/growth-engineering", label: "Growth Engineering" }}
  />
);

export default HardwareEmbeddedPage;
