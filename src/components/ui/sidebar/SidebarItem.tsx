import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "./SidebarContext";
import { Link } from "react-router-dom";

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  to?: string;
  onClick?: () => void;
}

export function SidebarItem({ 
  className,
  icon,
  title,
  to,
  onClick,
  ...props
}: SidebarItemProps) {
  const { setIsOpen } = useSidebar();

  const handleClick = () => {
    onClick?.();
    setIsOpen(false);
  };

  const content = (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      <span>{title}</span>
    </div>
  );

  if (to) {
    return (
      <Button variant="ghost" asChild className="w-full justify-start" onClick={handleClick}>
        <Link to={to}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button 
      variant="ghost" 
      className="w-full justify-start" 
      onClick={handleClick}
    >
      {content}
    </Button>
  );
}