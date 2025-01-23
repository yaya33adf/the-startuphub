import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { ToolsDropdownTrigger } from "./tool-submenus/ToolsDropdownTrigger";
import { ToolsDropdownContent } from "./tool-submenus/ToolsDropdownContent";
import { useToolsFilter } from "@/hooks/useToolsFilter";
import { tools } from "@/components/tools/ToolsData";

interface ToolsDropdownProps {
  onClick?: () => void;
}

export const ToolsDropdown = ({ onClick = () => {} }: ToolsDropdownProps) => {
  const filteredTools = useToolsFilter(tools);
  
  return (
    <DropdownMenu>
      <ToolsDropdownTrigger />
      <ToolsDropdownContent tools={filteredTools} onClick={onClick} />
    </DropdownMenu>
  );
};