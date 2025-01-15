import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import { DesktopNav } from "./DesktopNav";
import { useMobile } from "@/hooks/use-mobile";
import { useState } from "react";

interface NavigationContainerProps {
  session: any;
  userProfile: any;
  handleSignOut: () => Promise<void>;
}

export const NavigationContainer = ({ session, userProfile, handleSignOut }: NavigationContainerProps) => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center px-4">
        <Logo />
        <div className="flex items-center gap-4 ml-auto">
          {!isMobile && <NavLinks />}
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
        </div>
      </div>
    </nav>
  );
};