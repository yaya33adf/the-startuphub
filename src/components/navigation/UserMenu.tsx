import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Building2, Briefcase, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface UserMenuProps {
  userProfile: any;
  handleSignOut: () => Promise<void>;
  userEmail?: string;
}

export function UserMenu({ userProfile, handleSignOut, userEmail }: UserMenuProps) {
  // Query to get team members count
  const { data: teamMembersCount = 0 } = useQuery({
    queryKey: ["team-members-count"],
    queryFn: async () => {
      console.log("Fetching team members count...");
      const { count, error } = await supabase
        .from("teams")
        .select("*", { count: 'exact', head: true })
        .eq("user_id", userProfile?.id);

      if (error) {
        console.error("Error fetching team members count:", error);
        throw error;
      }

      console.log("Team members count:", count);
      return count || 0;
    },
    enabled: !!userProfile?.id
  });

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
  const avatarUrl = userProfile?.avatar_url;
  const userType = userProfile?.user_type;
  
  const UserTypeIcon = userType === 'startup' ? Building2 : 
                      userType === 'investor' ? Briefcase : 
                      null;
  
  return (
    <div className="flex items-center gap-2">
      {teamMembersCount > 0 && (
        <Button variant="ghost" size="icon" asChild className="relative">
          <Link to="/team">
            <Users className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
              {teamMembersCount}
            </span>
          </Link>
        </Button>
      )}
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-10 px-3">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={displayName}
                className="h-6 w-6 rounded-full mr-2"
              />
            ) : (
              <User className="h-4 w-4 mr-2" />
            )}
            <span>{displayName}</span>
            {UserTypeIcon && (
              <UserTypeIcon className="h-4 w-4 ml-2 text-muted-foreground" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link to="/auth/profile">Profile Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/team">Team Management</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSignOut}>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}