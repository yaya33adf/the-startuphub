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
  const authChangeRef = useRef(false);

  const fetchUserProfile = useCallback(async (userId: string) => {
    if (!userId || fetchingRef.current || !mountedRef.current) {
      console.log("Skipping profile fetch:", { 
        noUserId: !userId, 
        alreadyFetching: fetchingRef.current, 
        unmounted: !mountedRef.current 
      });
      return;
    }

    try {
      fetchingRef.current = true;
      console.log("Starting profile fetch for user:", userId);
      
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.error("Error fetching profile:", error);
        if (mountedRef.current) {
          toast({
            title: "Error",
            description: "Failed to fetch user profile",
            variant: "destructive",
          });
        }
        return;
      }

      if (mountedRef.current) {
        console.log("Setting profile:", profile);
        setUserProfile(profile);
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
    let authSubscription: { data: { subscription: any } } | null = null;
    
    const initializeAuth = async () => {
      if (authChangeRef.current) return;
      
      try {
        authChangeRef.current = true;
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        
        if (mountedRef.current) {
          console.log("Initial session:", currentSession?.user?.id);
          setSession(currentSession);
          if (currentSession?.user) {
            await fetchUserProfile(currentSession.user.id);
          }
        }
      } finally {
        authChangeRef.current = false;
      }
    };

    const setupAuthListener = async () => {
      try {
        authSubscription = supabase.auth.onAuthStateChange(async (event, newSession) => {
          if (!mountedRef.current || authChangeRef.current) return;
          
          console.log("Auth state changed:", event);
          authChangeRef.current = true;

          try {
            if (mountedRef.current) {
              setSession(newSession);
              
              if (newSession?.user) {
                await fetchUserProfile(newSession.user.id);
              } else {
                setUserProfile(null);
              }
            }
          } finally {
            authChangeRef.current = false;
          }
        });
      } catch (error) {
        console.error("Error setting up auth listener:", error);
      }
    };

    initializeAuth();
    setupAuthListener();

    return () => {
      console.log("Cleaning up auth state listener");
      mountedRef.current = false;
      if (authSubscription?.data?.subscription) {
        authSubscription.data.subscription.unsubscribe();
      }
    };
  }, [fetchUserProfile]);

  return children({ session, userProfile, handleSignOut });
};