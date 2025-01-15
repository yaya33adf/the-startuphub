import { Link } from "react-router-dom";
import { Wrench, BookOpen, Users2, MessageSquare, Users, Rocket } from "lucide-react";
import { BusinessInsightsDropdown } from "./BusinessInsightsDropdown";

const navLinks = [
  { to: "/tools", icon: Wrench, label: "Tools" },
  { to: "/blog", icon: BookOpen, label: "Blog" },
  { to: "/community", icon: Users2, label: "Community" },
  { to: "/startups", icon: Rocket, label: "Startups" },
  { to: "/feedback", icon: MessageSquare, label: "Feedback" },
  { to: "/team", icon: Users, label: "Team" },
];

export const NavLinks = () => {
  return (
    <div className="flex items-center gap-6">
      <BusinessInsightsDropdown />
      {navLinks.map(({ to, icon: Icon, label }) => (
        <Link
          key={to}
          to={to}
          className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105"
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
};