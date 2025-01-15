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
      <Button asChild variant="outline" size="default">
        <Link 
          to="/auth/signin"
          className="flex items-center justify-center gap-2 min-w-[100px]"
        >
          <LogIn className="size-4" />
          <span>Sign In</span>
        </Link>
      </Button>
    )}
  </div>
);