import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface AuthState {
  session: any;
  userProfile: any;
  handleSignOut: () => Promise<void>;
}

interface AuthStateProviderProps {
  children: (authState: AuthState) => React.ReactNode;
}

export const AuthStateProvider = ({ children }: AuthStateProviderProps) => {
  const [session, setSession] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<any>(null);
  const { toast } = useToast();

  const fetchUserProfile = useCallback(async (userId: string) => {
    try {
      console.log("Fetching profile for user:", userId);
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.error("Error fetching user profile:", error);
        toast({
          title: "Error",
          description: "Failed to fetch user profile",
          variant: "destructive",
        });
        return;
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
  }, [toast]);

  const handleSignOut = useCallback(async () => {
    try {
      await supabase.auth.signOut();
      setSession(null);
      setUserProfile(null);
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account",
      });
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    }
  }, [toast]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user) {
        fetchUserProfile(session.user.id);
      }
    });

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
  }, [fetchUserProfile]);

  return children({ session, userProfile, handleSignOut });
};