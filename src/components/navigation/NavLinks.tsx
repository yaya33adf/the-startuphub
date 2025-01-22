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
    </>
  );
};