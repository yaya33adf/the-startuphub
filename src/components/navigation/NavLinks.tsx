import { Link } from "react-router-dom";
import { Wrench, BookOpen, Users2, MessageSquare, Users } from "lucide-react";
import { BusinessInsightsDropdown } from "./BusinessInsightsDropdown";

export const NavLinks = () => {
  return (
    <div className="flex items-center gap-6">
      <BusinessInsightsDropdown />
      <Link
        to="/tools"
        className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105"
      >
        <Wrench className="w-4 h-4" />
        <span>Tools</span>
      </Link>
      <Link
        to="/blog"
        className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105"
      >
        <BookOpen className="w-4 h-4" />
        <span>Blog</span>
      </Link>
      <Link
        to="/community"
        className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105"
      >
        <Users2 className="w-4 h-4" />
        <span>Community</span>
      </Link>
      <Link
        to="/feedback"
        className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Feedback</span>
      </Link>
      <Link
        to="/team"
        className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105"
      >
        <Users className="w-4 h-4" />
        <span>Team</span>
      </Link>
    </div>
  );
};