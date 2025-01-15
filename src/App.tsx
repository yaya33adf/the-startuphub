import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import Index from "./pages/Index";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ProfileSettings from "./pages/auth/ProfileSettings";
import { NavigationMenu } from "./components/NavigationMenu";
import Footer from "./components/Footer";
import Trends from "./pages/Trends";
import Markets from "./pages/Markets";
import Blog from "./pages/Blog";
import Tools from "./pages/Tools";
import SideHustles from "./pages/SideHustles";
import Community from "./pages/Community";
import AdminDashboard from "./pages/admin/Dashboard";
import Crowdfunding from "./pages/Crowdfunding";
import Team from "./pages/Team";
import Feedback from "./pages/Feedback";
import { ProtectedAdminRoute } from "./components/auth/ProtectedAdminRoute";

const queryClient = new QueryClient();

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
    <a href="/" className="text-blue-500 hover:text-blue-700 underline">
      Go back home
    </a>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SessionContextProvider supabaseClient={supabase}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
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
                <Route path="/team" element={<Team />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/auth/signin" element={<SignIn />} />
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                <Route path="/auth/profile" element={<ProfileSettings />} />
                <Route 
                  path="/admin/*" 
                  element={
                    <ProtectedAdminRoute>
                      <AdminDashboard />
                    </ProtectedAdminRoute>
                  } 
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </SessionContextProvider>
  </QueryClientProvider>
);

export default App;