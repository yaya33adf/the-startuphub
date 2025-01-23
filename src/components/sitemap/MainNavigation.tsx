import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export const MainNavigation = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-primary mb-4">Main Pages</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home - Business Opportunities & Market Trends
          </Link>
        </li>
        <li>
          <Link to="/job-board" className="text-muted-foreground hover:text-primary transition-colors">
            Job Board - Find & Post Jobs
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
            About Us - Our Mission & Vision
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
            Blog - Business Insights & Analysis
          </Link>
        </li>
        <li>
          <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">
            Events - Business Meetups & Networking
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact - Get in Touch
          </Link>
        </li>
      </ul>
    </Card>
  );
};