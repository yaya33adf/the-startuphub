import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { NavigationMenu } from "./components/NavigationMenu";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trends" element={<div className="p-8">Trends page coming soon...</div>} />
          <Route path="/markets" element={<div className="p-8">Markets page coming soon...</div>} />
          <Route path="/side-hustles" element={<div className="p-8">Side Hustles page coming soon...</div>} />
          <Route path="/tools" element={<div className="p-8">Tools page coming soon...</div>} />
          <Route path="/blog" element={<div className="p-8">Blog page coming soon...</div>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;