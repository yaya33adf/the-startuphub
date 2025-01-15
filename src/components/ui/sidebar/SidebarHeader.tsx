import * as React from "react";
import { cn } from "@/lib/utils";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface SidebarHeaderProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

export function SidebarHeader({ className, children, title }: SidebarHeaderProps) {
  return (
    <SheetHeader className={cn("space-y-2 p-4", className)}>
      {title && <SheetTitle>{title}</SheetTitle>}
      {children}
    </SheetHeader>
  );
}