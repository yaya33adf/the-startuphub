import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  component?: React.ComponentType;
  active: boolean;
  fullWidth?: boolean;
  path?: string;
}

export const ToolCard = ({ title, description, icon: Icon, component: Component, active, fullWidth, path }: ToolCardProps) => {
  const cardContent = (
    <Card className="hover:shadow-lg transition-shadow h-full">
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

  if (path) {
    return (
      <Link to={path} className={`block ${fullWidth ? 'md:col-span-2 lg:col-span-3' : ''}`}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={`block ${fullWidth ? 'md:col-span-2 lg:col-span-3' : ''}`}>
      {cardContent}
    </div>
  );
};