import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import Index from "./pages/Index";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
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
import { useToast } from "./components/ui/use-toast";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedAdminRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        console.log("Starting admin check...");
        const { data: { session } } = await supabase.auth.getSession();
        console.log("Current session:", session);
        
        if (!session?.user?.id) {
          console.log("No active session found");
          setIsAdmin(false);
          setLoading(false);
          toast({
            variant: "destructive",
            title: "Access Denied",
            description: "Please sign in to access the admin area"
          });
          return;
        }

        // Check profile and role
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        console.log("Profile query result:", { profile, profileError });

        if (profileError) {
          console.error("Error fetching profile:", profileError);
          throw profileError;
        }

        const userIsAdmin = profile?.role === 'admin';
        console.log("Is admin?", userIsAdmin, "Profile role:", profile?.role);
        
        if (!userIsAdmin) {
          toast({
            variant: "destructive",
            title: "Access Denied",
            description: "You need admin privileges to access this page"
          });
        }
        
        setIsAdmin(userIsAdmin);
        
      } catch (error) {
        console.error("Error in checkAdmin:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to verify admin status"
        });
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, [toast]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

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
                <Route 
                  path="/admin" 
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