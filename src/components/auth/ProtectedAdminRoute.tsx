import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute = ({ children }: ProtectedAdminRouteProps) => {
  const { session, isLoading: isLoadingSession } = useSessionContext();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!session?.user?.id) {
        console.log("No session found, redirecting to login");
        toast({
          title: "Authentication Required",
          description: "Please sign in to access the admin area",
          variant: "destructive",
        });
        navigate("/auth/signin");
        return;
      }

      try {
        console.log("Checking admin status for user:", session.user.id);
        
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", session.user.id)
          .single();

        if (error) {
          console.error("Error checking admin status:", error);
          throw error;
        }

        const isUserAdmin = profile?.role === "admin";
        console.log("User admin status:", isUserAdmin);
        setIsAdmin(isUserAdmin);

        if (!isUserAdmin) {
          toast({
            title: "Access Denied",
            description: "You do not have permission to access this area",
            variant: "destructive",
          });
          navigate("/");
        }
      } catch (error) {
        console.error("Error in checkAdminStatus:", error);
        toast({
          title: "Error",
          description: "Failed to verify admin status",
          variant: "destructive",
        });
        navigate("/");
      }
    };

    if (!isLoadingSession) {
      checkAdminStatus();
    }
  }, [session, isLoadingSession, navigate, toast]);

  if (isLoadingSession || isAdmin === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!session || !isAdmin) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedAdminRoute;