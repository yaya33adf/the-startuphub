import { Link } from "react-router-dom";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { BusinessToolsSubmenu } from "./BusinessToolsSubmenu";
import { CustomerExperienceToolsSubmenu } from "./CustomerExperienceToolsSubmenu";
import { FinancialToolsSubmenu } from "./FinancialToolsSubmenu";
import { FreeToolsSubmenu } from "./FreeToolsSubmenu";
import { FundingToolsSubmenu } from "./FundingToolsSubmenu";
import { HRToolsSubmenu } from "./HRToolsSubmenu";
import { LegalToolsSubmenu } from "./LegalToolsSubmenu";
import { MarketingToolsSubmenu } from "./MarketingToolsSubmenu";
import { OperationsToolsSubmenu } from "./OperationsToolsSubmenu";
import { ProductToolsSubmenu } from "./ProductToolsSubmenu";
import { SalesToolsSubmenu } from "./SalesToolsSubmenu";
import { Briefcase } from "lucide-react";

interface ToolsDropdownContentProps {
  tools: any[];
  onClick?: () => void;
}

export const ToolsDropdownContent = ({ tools, onClick = () => {} }: ToolsDropdownContentProps) => {
  return (
    <DropdownMenuContent className="w-56">
      <div className="p-2">
        <Link
          to="/job-board"
          className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-secondary"
          onClick={onClick}
        >
          <Briefcase className="w-4 h-4" />
          <span>Job Board</span>
        </Link>
        <BusinessToolsSubmenu onClick={onClick} />
        <CustomerExperienceToolsSubmenu onClick={onClick} />
        <FinancialToolsSubmenu onClick={onClick} />
        <FreeToolsSubmenu onClick={onClick} />
        <FundingToolsSubmenu onClick={onClick} />
        <HRToolsSubmenu onClick={onClick} />
        <LegalToolsSubmenu onClick={onClick} />
        <MarketingToolsSubmenu onClick={onClick} />
        <OperationsToolsSubmenu onClick={onClick} />
        <ProductToolsSubmenu onClick={onClick} />
        <SalesToolsSubmenu onClick={onClick} />
      </div>
    </DropdownMenuContent>
  );
};