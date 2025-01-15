import type { HTMLAttributes } from "react";

export interface SidebarContentProps {
  children?: React.ReactNode;
  className?: string;
  side?: "left" | "right" | "top" | "bottom";
}

export interface SidebarHeaderProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

export interface SidebarItemProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  to?: string;
  onClick?: () => void;
}

export interface SidebarSectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export interface SidebarSeparatorProps extends HTMLAttributes<HTMLDivElement> {}

export interface SidebarTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}