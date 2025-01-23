import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileMenu } from "./navigation/MobileMenu";
import { Logo } from "./navigation/Logo";
import { UserMenu } from "./navigation/UserMenu";
import { useMobile } from "@/hooks/use-mobile";
import { AuthStateProvider } from "./navigation/AuthStateProvider";
import { NavigationContainer } from "./navigation/NavigationContainer";

export const NavigationMenu = () => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <AuthStateProvider>
      {({ session, userProfile, handleSignOut }) => (
        <NavigationContainer>
          <div className="flex items-center gap-4">
            <Logo />
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
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
            {session && (
              <UserMenu 
                userProfile={userProfile} 
                handleSignOut={handleSignOut}
                userEmail={session.user.email}
              />
            )}
          </div>
        </NavigationContainer>
      )}
    </AuthStateProvider>
  );
};