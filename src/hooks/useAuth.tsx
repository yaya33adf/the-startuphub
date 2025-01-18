import { useState, useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

interface Profile {
  id: string;
  email?: string;
  role?: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Setting up auth state listener");
    
    const fetchProfile = async (session: any) => {
      if (!session?.user?.id) {
        console.log("No user ID available for profile fetch");
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
          setIsLoading(false);
          return;
        }

        console.log("Setting profile:", data);
        setProfile(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error in fetchProfile:", error);
        setIsLoading(false);
      }
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session?.user?.id);
      
      setUser(session?.user ?? null);
      
      if (session?.user) {
        await fetchProfile(session);
      } else {
        setProfile(null);
        setIsLoading(false);
      }
    });

    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Initial session:", session?.user?.id);
      setUser(session?.user ?? null);
      if (session) {
        fetchProfile(session);
      } else {
        setIsLoading(false);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return { user, profile, isLoading };
}