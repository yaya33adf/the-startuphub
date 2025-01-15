import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "./SidebarContext";
import { Menu } from "lucide-react";

interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function SidebarTrigger({ className, children, ...props }: SidebarTriggerProps) {
  const { setIsOpen } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("h-10 w-10", className)}
      onClick={() => setIsOpen(true)}
      {...props}
    >
      {children || <Menu className="h-5 w-5" />}
    </Button>
  );
}