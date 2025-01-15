import { ChartLine, Globe, Lightbulb, Briefcase, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BusinessInsightsDropdownProps {
  onClick?: () => void;
}

export const BusinessInsightsDropdown = ({ onClick = () => {} }: BusinessInsightsDropdownProps) => {
  const businessInsightsItems = [
    { to: "/trends", icon: ChartLine, label: "Trends" },
    { to: "/markets", icon: Globe, label: "Markets" },
    { to: "/side-hustles", icon: Lightbulb, label: "Side Hustles" },
    { to: "/crowdfunding", icon: DollarSign, label: "Crowdfunding" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-10 px-3 py-2">
          <Briefcase className="w-4 h-4 mr-2" />
          <span>Business Insights</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {businessInsightsItems.map((item) => (
          <DropdownMenuItem key={item.to} asChild onClick={onClick}>
            <Link to={item.to} className="flex items-center gap-2 w-full">
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};