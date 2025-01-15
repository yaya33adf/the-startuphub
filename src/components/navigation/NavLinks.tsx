import { Link } from "react-router-dom";

export const NavLinks = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link 
        to="/trends" 
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Trends
      </Link>
      <Link 
        to="/markets" 
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Markets
      </Link>
      <Link 
        to="/side-hustles" 
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Side Hustles
      </Link>
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
        to="/crowdfunding" 
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Crowdfunding
      </Link>
      <Link 
        to="/team" 
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Team
      </Link>
    </nav>
  );
};