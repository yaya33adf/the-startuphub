import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

export const ProtectedAdminRoute = ({ children }: ProtectedAdminRouteProps) => {
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

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        checkAdmin();
      } else {
        setIsAdmin(false);
        setLoading(false);
      }
    });

    checkAdmin();

    return () => {
      subscription.unsubscribe();
    };
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