import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileMenu } from "./navigation/MobileMenu";
import { Logo } from "./navigation/Logo";
import { UserMenu } from "./navigation/UserMenu";
import { NavLinks } from "./navigation/NavLinks";
import { useMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";

export const NavigationMenu = () => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Fetch initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
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
  }, []);

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

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setSession(null);
      setUserProfile(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center px-4 transition-all duration-200">
        <Logo />
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
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          {session ? (
            <UserMenu 
              userProfile={userProfile} 
              handleSignOut={handleSignOut}
              userEmail={session.user.email}
            />
          ) : null}
        </div>
      </div>
    </nav>
  );
};