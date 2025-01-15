import * as React from "react";
import { cn } from "@/lib/utils";

interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function SidebarSection({ 
  className,
  title,
  children,
  ...props
}: SidebarSectionProps) {
  return (
    <div className={cn("space-y-2 px-4", className)} {...props}>
      {title && (
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      )}
      {children}
    </div>
  );
}