import { useEffect } from "react";
import Nav from "@/components/propilo/Nav";
import Hero from "@/components/propilo/Hero";
import Services from "@/components/propilo/Services";
import Method from "@/components/propilo/Method";
import Console from "@/components/propilo/Console";
import Footer from "@/components/propilo/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Propilo — High-Performance AI Engineering Studio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Propilo is a high-performance AI engineering studio building agentic operations, AI-native platforms, and cognitive integrations. We build. You profit.");
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Method />
      <Console />
      <Footer />
    </main>
  );
};

export default Index;
