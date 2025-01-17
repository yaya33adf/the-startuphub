import { useState, useEffect, useCallback } from "react";
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

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleMobileMenuToggle = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  const renderNavigation = useCallback(({ session, userProfile, handleSignOut }: any) => {
    if (isMobile) {
      return (
        <MobileMenu 
          isOpen={isOpen} 
          setIsOpen={handleMobileMenuToggle}
          session={session}
          handleSignOut={handleSignOut}
        />
      );
    }
    return (
      <DesktopNav
        session={session}
        userProfile={userProfile}
        handleSignOut={handleSignOut}
      />
    );
  }, [isMobile, isOpen, handleMobileMenuToggle]);

  return (
    <AuthStateProvider>
      {({ session, userProfile, handleSignOut }) => (
        <NavigationContainer>
          <div className="flex items-center gap-4">
            <Logo />
          </div>
          <div className="flex items-center justify-end w-full">
            {renderNavigation({ session, userProfile, handleSignOut })}
            <div className="flex items-center justify-end space-x-2">
              {session && (
                <UserMenu 
                  userProfile={userProfile} 
                  handleSignOut={handleSignOut}
                  userEmail={session.user.email}
                />
              )}
            </div>
          </div>
        </NavigationContainer>
      )}
    </AuthStateProvider>
  );
};