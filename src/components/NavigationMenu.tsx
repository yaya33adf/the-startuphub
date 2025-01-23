import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Logo } from "./navigation/Logo";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileMenu } from "./navigation/MobileMenu";
import { UserMenu } from "./navigation/UserMenu";
import { NavigationContainer } from "./navigation/NavigationContainer";
import { AuthStateProvider } from "./navigation/AuthStateProvider";
import { useMobile } from "@/hooks/use-mobile";
import { Briefcase } from "lucide-react";
import { Button } from "./ui/button";

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
          <div className="flex items-center justify-between w-full gap-4">
            <Logo />
            
            <div className="flex items-center gap-2">
              {isMobile ? (
                <MobileMenu 
                  isOpen={isOpen} 
                  setIsOpen={setIsOpen}
                  session={session}
                  userProfile={userProfile}
                  handleSignOut={handleSignOut}
                />
              ) : (
                <>
                  <Button variant="ghost" className="h-10 px-4" asChild>
                    <Link to="/job-board" className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      <span>Job Board</span>
                    </Link>
                  </Button>
                  <DesktopNav 
                    session={session}
                    userProfile={userProfile}
                    handleSignOut={handleSignOut}
                  />
                </>
              )}
              
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