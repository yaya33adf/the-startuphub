import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

interface UserMenuProps {
  userProfile: any;
  handleSignOut: () => Promise<void>;
  userEmail?: string;
}

export function UserMenu({ userProfile, handleSignOut, userEmail }: UserMenuProps) {
  // If no userEmail is provided, show sign in button
  if (!userEmail) {
    return (
      <Button variant="ghost" asChild>
        <Link to="/auth/signin" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Sign In</span>
        </Link>
      </Button>
    );
  }

  // If user is authenticated, show the dropdown menu
  const displayName = userProfile?.name || userEmail.split('@')[0];
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-10 px-3">
          <User className="h-4 w-4 mr-2" />
          <span>{displayName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleSignOut}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}