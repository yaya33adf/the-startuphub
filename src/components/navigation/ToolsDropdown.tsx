import { Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { tools } from "@/components/tools/ToolsData";

interface ToolsDropdownProps {
  onClick?: () => void;
}

export const ToolsDropdown = ({ onClick = () => {} }: ToolsDropdownProps) => {
  // Filter only active tools
  const activeTools = tools.filter(tool => tool.active);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="h-10 px-3 py-2 transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105"
        >
          <Wrench className="w-4 h-4 mr-2" />
          <span>Tools</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start"
        className="w-56 animate-in fade-in-0 zoom-in-95 bg-background"
      >
        {activeTools.map((tool) => (
          <DropdownMenuItem 
            key={tool.title} 
            asChild 
            onClick={onClick}
            className="transition-colors duration-200 hover:bg-accent/50"
          >
            <Link to={tool.path || "/tools"} className="flex items-center gap-2 w-full p-2">
              <span>{tool.title}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};