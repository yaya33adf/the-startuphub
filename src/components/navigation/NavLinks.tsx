import { Book } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BusinessInsightsDropdown } from "./BusinessInsightsDropdown";
import { StartupsDropdown } from "./StartupsDropdown";
import { ToolsDropdown } from "./ToolsDropdown";
import { LearnDropdown } from "./dropdowns/LearnDropdown";
import { CommunityDropdown } from "./dropdowns/CommunityDropdown";
import { TemplatesDropdown } from "./dropdowns/TemplatesDropdown";

interface NavLinksProps {
  onClick?: () => void;
}

export const NavLinks = ({ onClick = () => {} }: NavLinksProps) => {
  return (
    <>
      <BusinessInsightsDropdown onClick={onClick} />
      <StartupsDropdown onClick={onClick} />
      <ToolsDropdown onClick={onClick} />
      <LearnDropdown onClick={onClick} />
      <CommunityDropdown onClick={onClick} />
      <TemplatesDropdown onClick={onClick} />
      <Button variant="ghost" className="h-10 px-3 py-2" asChild>
        <Link to="/blog" className="flex items-center gap-2" onClick={onClick}>
          <Book className="h-4 w-4" />
          <span>Blog</span>
        </Link>
      </Button>
    </>
  );
};