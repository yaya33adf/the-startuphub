import { Link } from "react-router-dom";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface UserMenuItemsProps {
  handleSignOut: () => Promise<void>;
}

export const UserMenuItems = ({ handleSignOut }: UserMenuItemsProps) => {
  return (
    <>
      <DropdownMenuItem asChild>
        <Link to="/auth/profile">Profile Settings</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link to="/team">Team Management</Link>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={handleSignOut}>
        Sign Out
      </DropdownMenuItem>
    </>
  );
};