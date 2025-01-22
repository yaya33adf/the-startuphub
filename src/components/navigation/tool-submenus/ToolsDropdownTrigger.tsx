import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const ToolsDropdownTrigger = () => {
  return (
    <DropdownMenuTrigger asChild>
      <Button 
        variant="ghost" 
        className="h-10 px-3 py-2 transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105"
      >
        <Wrench className="w-4 h-4 mr-2" />
        <span>Tools</span>
      </Button>
    </DropdownMenuTrigger>
  );
};