import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserMenu } from "./UserMenu";

interface DesktopNavProps {
  session: any;
  userProfile: any;
  handleSignOut: () => Promise<void>;
}

export const DesktopNav = ({ session, userProfile, handleSignOut }: DesktopNavProps) => (
  <div className="flex items-center gap-4">
    {session ? (
      <UserMenu 
        userProfile={userProfile} 
        handleSignOut={handleSignOut}
        userEmail={session.user.email || ''}
      />
    ) : (
      <Link to="/auth/signin">
        <Button variant="outline" className="flex items-center gap-2 min-w-[100px]">
          <LogIn className="h-4 w-4" />
          <span>Sign In</span>
        </Button>
      </Link>
    )}
  </div>
);