import { Navigate } from "react-router-dom";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute = ({ children }: ProtectedAdminRouteProps) => {
  const { session, isLoading: sessionLoading } = useSessionContext();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const checkAdminStatus = async () => {
      if (!session?.user) {
        console.log("No session found, redirecting to login");
        if (mounted) {
          setIsAdmin(false);
          setIsLoading(false);
        }
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
          if (mounted) {
            setIsAdmin(false);
            setIsLoading(false);
          }
          return;
        }

        console.log("Profile data:", profile);
        if (mounted) {
          setIsAdmin(profile?.role === 'admin');
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error in checkAdminStatus:", error);
        if (mounted) {
          setIsAdmin(false);
          setIsLoading(false);
        }
      }
    };

    if (!sessionLoading) {
      console.log("Session loading complete, checking admin status");
      checkAdminStatus();
    }

    return () => {
      mounted = false;
    };
  }, [session, sessionLoading]);

  // Debug logging
  console.log("Current state:", { 
    sessionLoading, 
    isLoading, 
    isAdmin, 
    hasSession: !!session,
    userId: session?.user?.id 
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

export default ProtectedAdminRoute;