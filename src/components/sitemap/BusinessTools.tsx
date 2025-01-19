import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export const BusinessTools = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-primary mb-4">Business Tools & Resources</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/tools" className="text-muted-foreground hover:text-primary transition-colors">
            Business Tools - Essential Management Resources
          </Link>
        </li>
        <li>
          <Link to="/markets" className="text-muted-foreground hover:text-primary transition-colors">
            Market Analysis - Trends & Opportunities
          </Link>
        </li>
        <li>
          <Link to="/trends" className="text-muted-foreground hover:text-primary transition-colors">
            Trend Analysis - Real-time Market Insights
          </Link>
        </li>
        <li>
          <Link to="/side-hustles" className="text-muted-foreground hover:text-primary transition-colors">
            Side Hustles - Extra Income Opportunities
          </Link>
        </li>
        <li>
          <Link to="/startups" className="text-muted-foreground hover:text-primary transition-colors">
            Startup Directory - Innovative Companies
          </Link>
        </li>
        <li>
          <Link to="/crowdfunding" className="text-muted-foreground hover:text-primary transition-colors">
            Crowdfunding - Investment Opportunities
          </Link>
        </li>
      </ul>
    </Card>
  );
};