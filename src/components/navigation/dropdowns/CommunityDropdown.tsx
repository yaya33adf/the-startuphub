import { Link } from "react-router-dom";
import { Users, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CommunityDropdownProps {
  onClick?: () => void;
}

export const CommunityDropdown = ({ onClick = () => {} }: CommunityDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="h-10 px-3 py-2 transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          <span>Community</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start"
        className="w-56 animate-in fade-in-0 zoom-in-95 bg-background"
      >
        <DropdownMenuItem 
          asChild 
          onClick={onClick}
          className="transition-colors duration-200 hover:bg-accent/50"
        >
          <Link to="/community" className="flex items-center gap-2 w-full p-2">
            <Users className="w-4 h-4" />
            <span>Community</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem 
          asChild 
          onClick={onClick}
          className="transition-colors duration-200 hover:bg-accent/50"
        >
          <Link to="/events" className="flex items-center gap-2 w-full p-2">
            <Calendar className="w-4 h-4" />
            <span>Events</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};