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
      try {
        if (!session?.user) {
          console.log("No session found, redirecting to login");
          if (mounted) {
            setIsAdmin(false);
            setIsLoading(false);
          }
          return;
        }

        console.log("Checking admin status for user:", session.user.id);
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .maybeSingle();

        if (error) {
          console.error("Error fetching profile:", error);
          if (mounted) {
            setIsAdmin(false);
            setIsLoading(false);
          }
          return;
        }

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
      checkAdminStatus();
    }

    return () => {
      mounted = false;
    };
  }, [session, sessionLoading]);

  if (sessionLoading || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/auth/signin" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedAdminRoute;