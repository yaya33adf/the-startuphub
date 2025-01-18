import { useSessionContext } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useAuth = () => {
  const { session, isLoading: sessionLoading } = useSessionContext();
  const [profile, setProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!session?.user) {
        setIsLoading(false);
        return;
      }

      try {
        console.log("Starting profile fetch for user:", session.user.id);
        
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .maybeSingle();

        if (error) {
          console.error("Error fetching profile:", error);
          return;
        }

        console.log("Setting profile:", data);
        setProfile(data);
      } catch (error) {
        console.error("Error in fetchProfile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!sessionLoading) {
      fetchProfile();
    }
  }, [session, sessionLoading]);

  return {
    user: session?.user ?? null,
    profile,
    isLoading: isLoading || sessionLoading,
  };
};