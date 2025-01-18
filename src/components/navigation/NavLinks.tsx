import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { BusinessInsightsDropdown } from "./BusinessInsightsDropdown";
import { StartupsDropdown } from "./StartupsDropdown";
import { ToolsDropdown } from "./ToolsDropdown";

export const NavLinks = () => {
  return (
    <>
      <BusinessInsightsDropdown />
      <StartupsDropdown />
      <ToolsDropdown />
      <Button variant="ghost" asChild className="h-10 px-3 py-2">
        <Link to="/community" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span>Community</span>
        </Link>
      </Button>
    </>
  );
};