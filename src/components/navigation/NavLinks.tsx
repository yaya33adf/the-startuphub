import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, CreditCard } from "lucide-react";
import { BusinessInsightsDropdown } from "./BusinessInsightsDropdown";
import { StartupsDropdown } from "./StartupsDropdown";
import { ToolsDropdown } from "./ToolsDropdown";

interface NavLinksProps {
  onClick?: () => void;
}

export const NavLinks = ({ onClick = () => {} }: NavLinksProps) => {
  return (
    <>
      <BusinessInsightsDropdown onClick={onClick} />
      <StartupsDropdown onClick={onClick} />
      <ToolsDropdown onClick={onClick} />
      <Button 
        variant="ghost" 
        asChild
        className="h-10 px-3 py-2 transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105"
      >
        <Link to="/business-cards" className="flex items-center gap-2" onClick={onClick}>
          <CreditCard className="h-4 w-4" />
          <span>Business Cards</span>
        </Link>
      </Button>
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
    </>
  );
};