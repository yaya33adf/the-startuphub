import { Link } from "react-router-dom";
import { Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LearnDropdownProps {
  onClick?: () => void;
}

export const LearnDropdown = ({ onClick = () => {} }: LearnDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="h-10 px-3 py-2 transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105"
        >
          <Route className="w-4 h-4 mr-2" />
          <span>Learn</span>
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
          <Link to="/roadmap" className="flex items-center gap-2 w-full p-2">
            <Route className="w-4 h-4" />
            <span>Career Roadmap</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};