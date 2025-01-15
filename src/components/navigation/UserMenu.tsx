import { User, Wrench, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface UserMenuProps {
  userProfile: any;
  handleSignOut: () => Promise<void>;
  userEmail?: string;
}

export const UserMenu = ({ userProfile, handleSignOut, userEmail }: UserMenuProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="h-10 px-3">
        <User className="w-4 h-4 mr-2" />
        <span>{userEmail || 'Profile'}</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      {userProfile?.role === 'admin' && (
        <>
          <DropdownMenuItem asChild>
            <Link to="/admin" className="flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              <span>Admin Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </>
      )}
      <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
        <LogOut className="w-4 h-4 mr-2" />
        <span>Sign Out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);