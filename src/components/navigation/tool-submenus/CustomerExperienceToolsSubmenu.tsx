import { DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@/components/ui/dropdown-menu";
import { MessageSquare, Smile, Heart, Users, Headset } from "lucide-react";
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
      <DropdownMenuSubTrigger className="flex items-center">
        <Heart className="w-4 h-4 mr-2" />
        <span>Customer Experience Tools</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent className="bg-background">
        {tools.map((tool) => (
          <DropdownMenuItem key={tool.title} asChild onClick={onClick}>
            <Link to={tool.path || "#"} className="flex items-center">
              <tool.icon className="w-4 h-4 mr-2" />
              <span>{tool.title}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
};