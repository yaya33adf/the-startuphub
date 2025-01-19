import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export const LegalSection = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-primary mb-4">Legal Information</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy - Data Protection
          </Link>
        </li>
        <li>
          <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
            Terms of Service - Usage Guidelines
          </Link>
        </li>
      </ul>
    </Card>
  );
};