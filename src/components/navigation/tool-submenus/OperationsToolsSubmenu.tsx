import { Truck, Package, Warehouse } from "lucide-react";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Tool } from "@/components/tools/types/ToolTypes";

interface OperationsToolsSubmenuProps {
  tools: Tool[];
  onClick?: () => void;
}

export const OperationsToolsSubmenu = ({ tools, onClick }: OperationsToolsSubmenuProps) => {
  if (tools.length === 0) return null;

  return (
    <>
      <DropdownMenuSeparator />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <Truck className="mr-2 h-4 w-4" />
          <span>Operations & Logistics</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent className="bg-background">
          {tools.map((tool) => (
            <DropdownMenuItem key={tool.path} onClick={onClick} asChild>
              <a href={tool.path} className="flex items-center">
                <tool.icon className="mr-2 h-4 w-4" />
                <span>{tool.title}</span>
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </>
  );
};