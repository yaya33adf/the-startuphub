import { ChartLine, Globe, Lightbulb, Briefcase, DollarSign, Wrench, MessageSquare, Calendar } from "lucide-react";
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
    { to: "/community", icon: MessageSquare, label: "Community" },
    { to: "/events", icon: Calendar, label: "Events" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="h-10 px-3 py-2 transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105"
        >
          <Briefcase className="w-4 h-4 mr-2" />
          <span>Business Insights</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start"
        className="w-56 animate-in fade-in-0 zoom-in-95"
      >
        {businessInsightsItems.map((item) => (
          <DropdownMenuItem 
            key={item.to} 
            asChild 
            onClick={onClick}
            className="transition-colors duration-200 hover:bg-accent/50"
          >
            <Link to={item.to} className="flex items-center gap-2 w-full p-2">
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// Re-export icons for NavLinks
export { Wrench, BookOpen, Users2, Users, MessageSquare } from "lucide-react";