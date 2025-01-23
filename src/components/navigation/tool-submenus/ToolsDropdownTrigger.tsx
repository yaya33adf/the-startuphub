import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

export const ToolsDropdownTrigger = () => {
  return (
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="sm" className="flex items-center gap-2">
        <Wrench className="h-4 w-4" />
        Tools
      </Button>
    </DropdownMenuTrigger>
  );
};