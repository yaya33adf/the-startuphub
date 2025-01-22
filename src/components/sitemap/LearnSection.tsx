import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export const LearnSection = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-primary mb-4">Learning Resources</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/roadmap" className="text-muted-foreground hover:text-primary transition-colors">
            Career Roadmap - Professional Development Guide
          </Link>
        </li>
        <li>
          <Link to="/problems" className="text-muted-foreground hover:text-primary transition-colors">
            Problems - Real-world Business Challenges
          </Link>
        </li>
      </ul>
    </Card>
  );
};