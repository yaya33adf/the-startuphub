import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, CreditCard, LayoutTemplate, Layout, Calendar, MessageSquare, Blossom } from "lucide-react";
import { BusinessInsightsDropdown } from "./BusinessInsightsDropdown";
import { StartupsDropdown } from "./StartupsDropdown";
import { ToolsDropdown } from "./ToolsDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavLinksProps {
  onClick?: () => void;
}

export const NavLinks = ({ onClick = () => {} }: NavLinksProps) => {
  return (
    <>
      <BusinessInsightsDropdown onClick={onClick} />
      <StartupsDropdown onClick={onClick} />
      <ToolsDropdown onClick={onClick} />
      
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

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="h-10 px-3 py-2 transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105"
          >
            <LayoutTemplate className="w-4 h-4 mr-2" />
            <span>Templates</span>
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
            <Link to="/business-cards" className="flex items-center gap-2 w-full p-2">
              <CreditCard className="w-4 h-4" />
              <span>Business Cards</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem 
            asChild 
            onClick={onClick}
            className="transition-colors duration-200 hover:bg-accent/50"
          >
            <Link to="/wordpress-templates" className="flex items-center gap-2 w-full p-2">
              <Layout className="w-4 h-4" />
              <span>WordPress Templates</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem 
            asChild 
            onClick={onClick}
            className="transition-colors duration-200 hover:bg-accent/50"
          >
            <Link to="/blossom-word-game" className="flex items-center gap-2 w-full p-2">
              <Blossom className="w-4 h-4" />
              <span>Blossom Word Game</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};