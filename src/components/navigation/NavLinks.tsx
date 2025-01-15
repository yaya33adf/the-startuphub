import { Link } from "react-router-dom";
import { BusinessInsightsDropdown } from "./BusinessInsightsDropdown";

export const NavLinks = () => {
  return (
    <div className="flex items-center gap-6">
      <BusinessInsightsDropdown />
      <Link
        to="/tools"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Tools
      </Link>
      <Link
        to="/blog"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Blog
      </Link>
      <Link
        to="/community"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Community
      </Link>
      <Link
        to="/team"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Team
      </Link>
    </div>
  );
};