import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, CreditCard, LayoutTemplate, Layout, Calendar } from "lucide-react";
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
              <span>Amazing Startup WordPress Ready Templates</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button 
        variant="ghost" 
        asChild
        className="h-10 px-3 py-2 transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105"
      >
        <Link to="/community" className="flex items-center gap-2" onClick={onClick}>
          <Users className="h-4 w-4" />
          <span>Community</span>
        </Link>
      </Button>

      <Button 
        variant="ghost" 
        asChild
        className="h-10 px-3 py-2 transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105"
      >
        <Link to="/events" className="flex items-center gap-2" onClick={onClick}>
          <Calendar className="h-4 w-4" />
          <span>Events</span>
        </Link>
      </Button>
    </>
  );
};