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
      <Button asChild variant="outline">
        <Link 
          to="/auth/signin"
          className="flex items-center gap-2"
        >
          <LogIn aria-hidden="true" />
          Sign In
        </Link>
      </Button>
    )}
  </div>
);