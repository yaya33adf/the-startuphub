import * as React from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useSidebar } from "./SidebarContext";
import { useMobile } from "@/hooks/use-mobile";

interface SidebarContentProps {
  children?: React.ReactNode;
  className?: string;
  side?: "left" | "right" | "top" | "bottom";
}

export function SidebarContent({ children, className, side = "right" }: SidebarContentProps) {
  const { isOpen, setIsOpen } = useSidebar();
  const isMobile = useMobile();

  if (!isMobile) {
    return (
      <nav className={cn("h-screen w-64 border-r bg-background", className)}>
        {children}
      </nav>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side={side} className={cn("w-[80vw] sm:w-[350px]", className)}>
        {children}
      </SheetContent>
    </Sheet>
  );
}