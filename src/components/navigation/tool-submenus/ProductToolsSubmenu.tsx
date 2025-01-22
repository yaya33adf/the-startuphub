import { Package } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Tool } from "@/components/tools/types/ToolTypes";

interface ProductToolsSubmenuProps {
  tools: Tool[];
  onClick?: () => void;
}

export const ProductToolsSubmenu = ({ tools, onClick }: ProductToolsSubmenuProps) => {
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className="flex items-center gap-2">
        <Package className="w-4 h-4" />
        <span>Product Development Tools</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent className="bg-background">
        {tools.length > 0 ? (
          tools.map((tool) => (
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
          ))
        ) : (
          <DropdownMenuLabel className="text-sm text-muted-foreground px-2 py-1">
            Coming soon...
          </DropdownMenuLabel>
        )}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
};