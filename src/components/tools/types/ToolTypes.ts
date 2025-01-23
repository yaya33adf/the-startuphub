import { LucideIcon } from "lucide-react";

export interface Tool {
  title: string;
  description: string;
  icon: LucideIcon;
  component?: React.ComponentType;
  active: boolean;
  fullWidth?: boolean;
  path?: string;
  isFree?: boolean;
}

export interface ToolCategory {
  name: string;
  tools: Tool[];
}