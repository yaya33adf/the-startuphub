import { Rocket, MessageSquare, Users, Wallet, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface StartupsDropdownProps {
  onClick?: () => void;
}

export const StartupsDropdown = ({ onClick = () => {} }: StartupsDropdownProps) => {
  const startupsItems = [
    { to: "/startups", icon: Rocket, label: "Startups" },
    { to: "/investors", icon: Wallet, label: "Investors" },
    { to: "/events", icon: Calendar, label: "Events" },
    { to: "/feedback", icon: MessageSquare, label: "Feedback" },
    { to: "/team", icon: Users, label: "Team" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="h-10 px-3 py-2 transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105"
        >
          <Rocket className="w-4 h-4 mr-2" />
          <span>Startups</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start"
        className="w-56 animate-in fade-in-0 zoom-in-95"
      >
        {startupsItems.map((item) => (
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