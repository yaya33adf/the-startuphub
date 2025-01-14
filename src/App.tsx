import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import { NavigationMenu } from "./components/NavigationMenu";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Tools from "./pages/Tools";
import Community from "./pages/Community";
import AdminDashboard from "./pages/admin/Dashboard";
import Crowdfunding from "./pages/Crowdfunding";
import Trends from "./pages/Trends";
import Markets from "./pages/Markets";
import SideHustles from "./pages/SideHustles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background">
          <header>
            <NavigationMenu />
          </header>
          <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/trends" element={<Trends />} />
              <Route path="/markets" element={<Markets />} />
              <Route path="/side-hustles" element={<SideHustles />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/community" element={<Community />} />
              <Route path="/crowdfunding" element={<Crowdfunding />} />
              <Route path="/auth/signin" element={<SignIn />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/auth/forgot-password" element={<ForgotPassword />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;