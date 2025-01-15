import { Navigate } from "react-router-dom";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

export const ProtectedAdminRoute = ({ children }: ProtectedAdminRouteProps) => {
  const { session, isLoading: sessionLoading } = useSessionContext();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!session?.user) {
        console.log("No session found, redirecting to login");
        setIsAdmin(false);
        setIsLoading(false);
        return;
      }

      try {
        console.log("Session exists, checking admin status");
        console.log("Checking admin status for user:", session.user.id);
        
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error);
          setIsAdmin(false);
        } else {
          console.log("Full profile data:", profile);
          const isUserAdmin = profile?.role === 'admin';
          console.log("Is user admin?", isUserAdmin);
          setIsAdmin(isUserAdmin);
        }
      } catch (error) {
        console.error("Error in checkAdminStatus:", error);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    // Only check admin status once session loading is complete
    if (!sessionLoading) {
      console.log("Session loading complete, checking admin status");
      checkAdminStatus();
    }
  }, [session, sessionLoading]);

  // Log current state for debugging
  console.log("Current state:", { 
    sessionLoading, 
    isLoading, 
    isAdmin, 
    hasSession: !!session 
  });

  if (sessionLoading || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!session) {
    console.log("No session found, redirecting to login");
    return <Navigate to="/auth/signin" replace />;
  }

  if (!isAdmin) {
    console.log("User is not admin, redirecting to home");
    return <Navigate to="/" replace />;
  }

  console.log("User is admin, rendering admin content");
  return <>{children}</>;
};