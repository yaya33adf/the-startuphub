import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StartupsDropdown } from "./StartupsDropdown";
import { ToolsDropdown } from "./ToolsDropdown";
import { BarChart2, BookOpen } from "lucide-react";

interface NavLinksProps {
  onClick?: () => void;
}

export const NavLinks = ({ onClick = () => {} }: NavLinksProps) => {
  return (
    <>
      <StartupsDropdown onClick={onClick} />
      <ToolsDropdown onClick={onClick} />
      <Button 
        variant="ghost" 
        asChild
        className="h-10 px-3 py-2 transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105"
      >
        <Link to="/markets" className="flex items-center gap-2" onClick={onClick}>
          <BarChart2 className="w-4 h-4" />
          <span>Markets</span>
        </Link>
      </Button>
      <Button 
        variant="ghost" 
        asChild
        className="h-10 px-3 py-2 transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105"
      >
        <Link to="/blog" className="flex items-center gap-2" onClick={onClick}>
          <BookOpen className="w-4 h-4" />
          <span>Blog</span>
        </Link>
      </Button>
    </>
  );
};