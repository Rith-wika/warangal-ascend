import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
import Index from "./pages/Index";
import VisionPage from "./pages/VisionPage";
import EconomyPage from "./pages/EconomyPage";
import WelfarePage from "./pages/WelfarePage";
import StoriesPage from "./pages/StoriesPage";
import NotFound from "./pages/NotFound";
import WarangalRising from "./pages/rising/WarangalRising";
import UrbanRising from "./pages/rising/UrbanRising";
import WomenRising from "./pages/rising/WomenRising";
import FarmersRising from "./pages/rising/FarmersRising";
import YouthRising from "./pages/rising/YouthRising";
import TrillionVision from "./pages/economy/TrillionVision";
import Investments from "./pages/economy/Investments";
import HousingInitiative from "./pages/welfare/Housing";
import SocialJustice from "./pages/welfare/Justice";
import PaymentPage from "./pages/PaymentPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vision" element={<VisionPage />} />

          {/* Separate Rising Pages */}
          <Route path="/rising/warangal" element={<WarangalRising />} />
          <Route path="/rising/urban" element={<UrbanRising />} />
          <Route path="/rising/women" element={<WomenRising />} />
          <Route path="/rising/farmers" element={<FarmersRising />} />
          <Route path="/rising/youth" element={<YouthRising />} />

          <Route path="/economy" element={<EconomyPage />} />
          {/* Separate Economy Pages */}
          <Route path="/economy/vision" element={<TrillionVision />} />
          <Route path="/economy/investments" element={<Investments />} />

          <Route path="/welfare" element={<WelfarePage />} />
          {/* Separate Welfare Pages */}
          <Route path="/welfare/housing" element={<HousingInitiative />} />
          <Route path="/welfare/justice" element={<SocialJustice />} />

          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/stories/:id" element={<StoriesPage />} />

          {/* Registration Flow Pages */}
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
