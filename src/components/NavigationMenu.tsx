import { useState, useMemo } from "react";
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
  useMemo(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const renderNavigation = useMemo(() => {
    return ({ session, userProfile, handleSignOut }: any) => {
      if (isMobile) {
        return (
          <MobileMenu 
            isOpen={isOpen} 
            setIsOpen={setIsOpen}
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
    };
  }, [isMobile, isOpen]);

  return (
    <AuthStateProvider>
      {({ session, userProfile, handleSignOut }) => (
        <NavigationContainer>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Logo />
          </div>
          <div className="flex-1 flex items-center justify-end overflow-hidden">
            {renderNavigation({ session, userProfile, handleSignOut })}
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
        </NavigationContainer>
      )}
    </AuthStateProvider>
  );
};