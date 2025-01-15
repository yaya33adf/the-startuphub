import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AuthStateHandler } from "./navigation/AuthStateHandler";
import { NavigationContainer } from "./navigation/NavigationContainer";

export const NavigationMenu = () => {
  const [session, setSession] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<any>(null);

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
    <>
      <AuthStateHandler 
        setSession={setSession}
        setUserProfile={setUserProfile}
      />
      <NavigationContainer
        session={session}
        userProfile={userProfile}
        handleSignOut={handleSignOut}
      />
    </>
  );
};