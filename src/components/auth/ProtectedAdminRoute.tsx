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
        console.log("No session found, setting isAdmin to false");
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
          console.log("Is user admin?", profile?.role === 'admin');
          setIsAdmin(profile?.role === 'admin');
        }
      } catch (error) {
        console.error("Error in checkAdminStatus:", error);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (!sessionLoading) {
      checkAdminStatus();
    }
  }, [session, sessionLoading]);

  if (sessionLoading || isLoading) {
    console.log("Loading state:", { sessionLoading, isLoading });
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