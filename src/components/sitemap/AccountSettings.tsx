import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export const AccountSettings = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-primary mb-4">Account & Settings</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/auth/signin" className="text-muted-foreground hover:text-primary transition-colors">
            Sign In - Access Your Account
          </Link>
        </li>
        <li>
          <Link to="/auth/signup" className="text-muted-foreground hover:text-primary transition-colors">
            Sign Up - Join Our Platform
          </Link>
        </li>
      </ul>
    </Card>
  );
}