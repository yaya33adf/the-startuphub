import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface TeamMembersCountProps {
  count: number;
}

export const TeamMembersCount = ({ count }: TeamMembersCountProps) => {
  if (count === 0) return null;

  return (
    <Button variant="ghost" size="icon" asChild className="relative">
      <Link to="/team">
        <Users className="h-4 w-4" />
        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
          {count}
        </span>
      </Link>
    </Button>
  );
};