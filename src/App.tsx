import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VisionPage from "./pages/VisionPage";
import RisingPage from "./pages/RisingPage";
import EconomyPage from "./pages/EconomyPage";
import WelfarePage from "./pages/WelfarePage";
import StoriesPage from "./pages/StoriesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/rising" element={<RisingPage />} />
          <Route path="/rising/:category" element={<RisingPage />} />
          <Route path="/economy" element={<EconomyPage />} />
          <Route path="/economy/:category" element={<EconomyPage />} />
          <Route path="/welfare" element={<WelfarePage />} />
          <Route path="/welfare/:category" element={<WelfarePage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/stories/:id" element={<StoriesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
