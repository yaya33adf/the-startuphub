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
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <div className="hidden md:flex items-center gap-6 mx-6 flex-1">
          <NavLinks />
        </div>
        <div className="flex items-center ml-auto">
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