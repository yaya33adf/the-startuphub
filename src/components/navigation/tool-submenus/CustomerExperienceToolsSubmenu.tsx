import { DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@/components/ui/dropdown-menu";
import { Heart } from "lucide-react";
import { Tool } from "@/components/tools/types/ToolTypes";
import { Link } from "react-router-dom";

interface CustomerExperienceToolsSubmenuProps {
  tools: Tool[];
  onClick?: () => void;
}

export const CustomerExperienceToolsSubmenu = ({ tools, onClick }: CustomerExperienceToolsSubmenuProps) => {
  if (tools.length === 0) return null;

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="flex items-center gap-2">
        <Heart className="w-4 h-4" />
        <span>Customer Experience Tools</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent className="bg-background">
        {tools.map((tool) => (
          <DropdownMenuItem
            key={tool.path}
            asChild
            onClick={onClick}
            className="transition-colors duration-200 hover:bg-accent/50"
          >
            <Link to={tool.path} className="flex items-center gap-2 w-full p-2">
              <tool.icon className="w-4 h-4" />
              <span>{tool.title}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
};