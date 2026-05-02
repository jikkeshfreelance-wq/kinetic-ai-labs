import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import IndustriesPage from "./pages/IndustriesPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AIServicesPage from "./pages/services/AIServicesPage.tsx";
import ProductEngineeringPage from "./pages/services/ProductEngineeringPage.tsx";
import HardwareEmbeddedPage from "./pages/services/HardwareEmbeddedPage.tsx";
import GrowthEngineeringPage from "./pages/services/GrowthEngineeringPage.tsx";
import CloudDataPage from "./pages/services/CloudDataPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/ai-engineering" element={<AIServicesPage />} />
          <Route path="/services/product-engineering" element={<ProductEngineeringPage />} />
          <Route path="/services/hardware-embedded" element={<HardwareEmbeddedPage />} />
          <Route path="/services/growth-engineering" element={<GrowthEngineeringPage />} />
          <Route path="/services/cloud-data" element={<CloudDataPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
