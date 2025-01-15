import { Wrench, BookOpen, MessageSquare, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BusinessInsightsDropdown } from "./BusinessInsightsDropdown";

interface NavLinksProps {
  onClick?: () => void;
}

export const NavLinks = ({ onClick = () => {} }: NavLinksProps) => {
  const navItems = [
    { to: "/tools", icon: Wrench, label: "Tools" },
    { to: "/blog", icon: BookOpen, label: "Blog" },
    { to: "/community", icon: MessageSquare, label: "Community" },
    { to: "/crowdfunding", icon: DollarSign, label: "Crowdfunding" },
    { to: "/team", icon: Users, label: "Team" },
  ];

  return (
    <>
      <BusinessInsightsDropdown onClick={onClick} />
      {navItems.map((item) => (
        <Button 
          key={item.to} 
          variant="ghost" 
          asChild 
          onClick={onClick}
          className="h-10 px-3 py-2"
        >
          <Link to={item.to} className="flex items-center gap-2 min-w-[100px] justify-start">
            <item.icon className="w-4 h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">{item.label}</span>
          </Link>
        </Button>
      ))}
    </>
  );
};