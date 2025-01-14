import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (path && path === "/startup-ideas" && keyword.trim()) {
      navigate(`${path}?keyword=${encodeURIComponent(keyword.trim())}`);
    }
  };

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
        <CardDescription className="mb-4">{description}</CardDescription>
        {title === "Startup Ideas Generator" ? (
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSearch}>Generate</Button>
          </div>
        ) : null}
        {Component && <Component />}
      </CardContent>
    </Card>
  );

  if (path) {
    return (
      <div className={`block ${fullWidth ? 'md:col-span-2 lg:col-span-3' : ''}`}>
        {cardContent}
      </div>
    );
  }

  return (
    <div className={`block ${fullWidth ? 'md:col-span-2 lg:col-span-3' : ''}`}>
      {cardContent}
    </div>
  );
};