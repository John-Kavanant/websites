
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";

// Pages
import HomePage from "./pages/Index";
import RPMPage from "./pages/RPM";
import RTMPage from "./pages/RTM";
import CardiacPage from "./pages/Cardiac";
import ServicesPage from "./pages/Services";
import OnboardingPage from "./pages/Onboarding";
import ReimbursementPage from "./pages/Reimbursement";
import ContactPage from "./pages/Contact";
import NotFoundPage from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rpm" element={<RPMPage />} />
            <Route path="/rtm" element={<RTMPage />} />
            <Route path="/cardiac" element={<CardiacPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/reimbursement" element={<ReimbursementPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
