import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavLinks } from "./NavLinks";

interface DesktopNavProps {
  session: any;
  userProfile: any;
  handleSignOut: () => Promise<void>;
}

export const DesktopNav = ({ session }: DesktopNavProps) => (
  <div className="hidden md:flex items-center gap-1 overflow-x-auto flex-grow justify-end max-w-[calc(100%-200px)]">
    <NavLinks />
    {!session && (
      <Button variant="outline" asChild className="ml-2 h-10 px-3 py-2">
        <Link to="/auth/signin" className="flex items-center gap-2 min-w-[100px] justify-center">
          <LogIn className="w-4 h-4 flex-shrink-0" />
          <span className="whitespace-nowrap">Sign In</span>
        </Link>
      </Button>
    )}
  </div>
);