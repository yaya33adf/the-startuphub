import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@supabase/auth-helpers-react";

export function UserMenu() {
  const session = useSession();
  const navigate = useNavigate();
  const userEmail = session?.user?.email;
  const userProfile = session?.user?.user_metadata;

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (!session) {
    return (
      <Button variant="ghost" onClick={() => navigate("/auth/signin")}>
        Sign In
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-10 px-3">
          <User className="w-4 h-4 mr-2" />
          <span>{userProfile?.name || userEmail || 'Profile'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => navigate("/auth/profile")}>
          Profile Settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}