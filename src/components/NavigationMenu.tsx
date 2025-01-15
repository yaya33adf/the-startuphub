import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileMenu } from "./navigation/MobileMenu";
import { Logo } from "./navigation/Logo";
import { UserMenu } from "./navigation/UserMenu";
import { useMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const NavigationMenu = () => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<any>(null);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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

  const handleSignOut = async () => {
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
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm overflow-hidden">
      <div className="container flex h-16 items-center justify-between transition-all duration-200 ease-in-out transform-gpu max-w-[100vw] overflow-hidden">
        <div className="flex items-center gap-4 flex-shrink-0">
          <Logo />
        </div>
        <div className="flex-1 flex items-center justify-end overflow-hidden">
          {isMobile ? (
            <MobileMenu 
              isOpen={isOpen} 
              setIsOpen={setIsOpen}
              session={session}
              handleSignOut={handleSignOut}
            />
          ) : (
            <DesktopNav
              session={session}
              userProfile={userProfile}
              handleSignOut={handleSignOut}
            />
          )}
          <div className="flex items-center justify-end space-x-2">
            <div className="w-full flex-1 md:w-auto md:flex-none" />
            {session && (
              <UserMenu 
                userProfile={userProfile} 
                handleSignOut={handleSignOut}
                userEmail={session.user.email}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};