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
  userEmail: string;
}

export function UserMenu({ userProfile, handleSignOut, userEmail }: UserMenuProps) {
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
        <DropdownMenuItem asChild>
          <Link to="/auth/profile">Profile Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}