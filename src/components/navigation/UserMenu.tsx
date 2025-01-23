import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { UserDisplay } from "./user-menu/UserDisplay";
import { UserMenuItems } from "./user-menu/UserMenuItems";
import { TeamMembersCount } from "./user-menu/TeamMembersCount";

interface UserMenuProps {
  userProfile: any;
  handleSignOut: () => Promise<void>;
  userEmail?: string;
}

export function UserMenu({ userProfile, handleSignOut, userEmail }: UserMenuProps) {
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

  const displayName = userProfile?.name || userEmail.split('@')[0];
  
  return (
    <div className="flex items-center gap-2">
      <TeamMembersCount count={teamMembersCount} />
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="relative h-10 w-full px-3 text-left font-normal"
          >
            <span className="flex items-center gap-2">
              {userProfile?.avatar_url ? (
                <img
                  src={userProfile.avatar_url}
                  alt={displayName}
                  className="h-6 w-6 rounded-full"
                />
              ) : (
                <User className="h-4 w-4" />
              )}
              <span>{displayName}</span>
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <UserMenuItems handleSignOut={handleSignOut} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}