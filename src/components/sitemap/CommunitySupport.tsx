import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export const CommunitySupport = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-primary mb-4">Community & Support</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">
            Community - Connect & Collaborate
          </Link>
        </li>
        <li>
          <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">
            Events - Community Gatherings & Meetups
          </Link>
        </li>
        <li>
          <Link to="/feedback" className="text-muted-foreground hover:text-primary transition-colors">
            Feedback - Share Your Ideas
          </Link>
        </li>
        <li>
          <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
            FAQ - Common Questions
          </Link>
        </li>
        <li>
          <Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">
            Team Building - Grow Your Business
          </Link>
        </li>
      </ul>
    </Card>
  );
};