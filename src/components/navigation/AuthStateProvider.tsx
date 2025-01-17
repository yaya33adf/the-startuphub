import { useState, useEffect, useCallback, useRef } from "react";
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
  const mountedRef = useRef(true);
  const fetchingRef = useRef(false);

  const fetchUserProfile = useCallback(async (userId: string) => {
    if (!userId || fetchingRef.current || !mountedRef.current) return;

    try {
      fetchingRef.current = true;
      console.log("Fetching profile for user:", userId);
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.error("Error fetching user profile:", error);
        if (mountedRef.current) {
          toast({
            title: "Error",
            description: "Failed to fetch user profile",
            variant: "destructive",
          });
        }
        return;
      }

      if (!profile) {
        console.log("No profile found for user:", userId);
      } else {
        console.log("Profile found:", profile);
        if (mountedRef.current) {
          setUserProfile(profile);
        }
      }
    } catch (error) {
      console.error("Error in fetchUserProfile:", error);
    } finally {
      fetchingRef.current = false;
    }
  }, [toast]);

  const handleSignOut = useCallback(async () => {
    try {
      await supabase.auth.signOut();
      if (mountedRef.current) {
        setSession(null);
        setUserProfile(null);
      }
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
    console.log("Setting up auth state listener");
    
    const initializeAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (mountedRef.current) {
        setSession(session);
        if (session?.user) {
          fetchUserProfile(session.user.id);
        }
      }
    };

    initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mountedRef.current) {
        console.log("Auth state changed:", _event);
        setSession(session);
        if (session?.user) {
          fetchUserProfile(session.user.id);
        } else {
          setUserProfile(null);
        }
      }
    });

    return () => {
      console.log("Cleaning up auth state listener");
      mountedRef.current = false;
      subscription.unsubscribe();
    };
  }, [fetchUserProfile]);

  return children({ session, userProfile, handleSignOut });
};