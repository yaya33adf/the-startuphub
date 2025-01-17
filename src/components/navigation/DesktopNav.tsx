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
  <div className="hidden md:flex items-center gap-2">
    <NavLinks />
    {!session && (
      <Button variant="outline" asChild className="ml-2">
        <Link to="/auth/signin" className="flex items-center gap-2">
          <LogIn className="h-4 w-4" />
          <span>Sign In</span>
        </Link>
      </Button>
    )}
  </div>
);