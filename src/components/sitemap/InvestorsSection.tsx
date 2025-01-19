import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export const InvestorsSection = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-primary mb-4">For Investors</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/investors" className="text-muted-foreground hover:text-primary transition-colors">
            Investors Hub - Investment Opportunities
          </Link>
        </li>
        <li>
          <Link to="/schedule-call" className="text-muted-foreground hover:text-primary transition-colors">
            Schedule Call - Connect with Our Team
          </Link>
        </li>
      </ul>
    </Card>
  );
};