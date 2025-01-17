import { Navigate } from "react-router-dom";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute = ({ children }: ProtectedAdminRouteProps) => {
  const { session, isLoading: sessionLoading } = useSessionContext();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const mountedRef = useRef(true);
  const checkingRef = useRef(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (sessionLoading || checkingRef.current || !mountedRef.current) return;
      
      checkingRef.current = true;
      
      if (!session?.user) {
        console.log("No session found, redirecting to login");
        if (mountedRef.current) {
          setIsAdmin(false);
        }
        checkingRef.current = false;
        return;
      }

      try {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error);
          if (mountedRef.current) {
            setIsAdmin(false);
          }
        } else {
          console.log("Profile data:", profile);
          if (mountedRef.current) {
            setIsAdmin(profile?.role === 'admin');
          }
        }
      } catch (error) {
        console.error("Error in checkAdminStatus:", error);
        if (mountedRef.current) {
          setIsAdmin(false);
        }
      } finally {
        checkingRef.current = false;
      }
    };

    checkAdminStatus();

    return () => {
      mountedRef.current = false;
    };
  }, [session?.user?.id, sessionLoading]);

  if (sessionLoading || isAdmin === null) {
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