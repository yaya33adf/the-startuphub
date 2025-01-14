import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  component?: React.ComponentType;
  active: boolean;
  fullWidth?: boolean;
}

export const ToolCard = ({ title, description, icon: Icon, component: Component, active, fullWidth }: ToolCardProps) => {
  return (
    <Card 
      className={`hover:shadow-lg transition-shadow ${
        fullWidth ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <Icon className="h-6 w-6 text-primary" />
          <CardTitle className="flex-1">{title}</CardTitle>
          {active ? (
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          ) : (
            <XCircle className="h-5 w-5 text-gray-400" />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        {Component && <Component />}
      </CardContent>
    </Card>
  );
};