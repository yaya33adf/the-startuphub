import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface AuthStateHandlerProps {
  setSession: (session: any) => void;
  setUserProfile: (profile: any) => void;
}

export const AuthStateHandler = ({ setSession, setUserProfile }: AuthStateHandlerProps) => {
  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Initial session:", session);
      setSession(session);
      if (session?.user) {
        fetchUserProfile(session.user.id);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Auth state changed:", _event, session);
      setSession(session);
      if (session?.user) {
        fetchUserProfile(session.user.id);
      } else {
        setUserProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [setSession, setUserProfile]);

  const fetchUserProfile = async (userId: string) => {
    try {
      console.log("Fetching profile for user:", userId);
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.error("Error fetching user profile:", error);
        throw error;
      }

      if (!profile) {
        console.log("No profile found for user:", userId);
      } else {
        console.log("Profile found:", profile);
        setUserProfile(profile);
      }
    } catch (error) {
      console.error("Error in fetchUserProfile:", error);
    }
  };

  return null;
};