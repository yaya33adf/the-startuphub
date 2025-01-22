import {
  DropdownMenuContent,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { FreeToolsSubmenu } from "./FreeToolsSubmenu";
import { FinancialToolsSubmenu } from "./FinancialToolsSubmenu";
import { BusinessToolsSubmenu } from "./BusinessToolsSubmenu";
import { MarketingToolsSubmenu } from "./MarketingToolsSubmenu";
import { ProductToolsSubmenu } from "./ProductToolsSubmenu";
import { LegalToolsSubmenu } from "./LegalToolsSubmenu";
import { SalesToolsSubmenu } from "./SalesToolsSubmenu";
import { FundingToolsSubmenu } from "./FundingToolsSubmenu";
import { HRToolsSubmenu } from "./HRToolsSubmenu";
import { Tool } from "@/components/tools/types/ToolTypes";

interface ToolsDropdownContentProps {
  tools: {
    freeTools: Tool[];
    financialTools: Tool[];
    businessPlanningTools: Tool[];
    marketingTools: Tool[];
    productTools: Tool[];
    legalTools: Tool[];
    salesTools: Tool[];
    fundingTools: Tool[];
    hrTools: Tool[];
  };
  onClick?: () => void;
}

export const ToolsDropdownContent = ({ tools, onClick }: ToolsDropdownContentProps) => {
  return (
    <DropdownMenuContent 
      align="start"
      className="w-56 animate-in fade-in-0 zoom-in-95 bg-background"
    >
      <DropdownMenuGroup>
        <FreeToolsSubmenu tools={tools.freeTools} onClick={onClick} />
        <FinancialToolsSubmenu tools={tools.financialTools} onClick={onClick} />
        <BusinessToolsSubmenu tools={tools.businessPlanningTools} onClick={onClick} />
        <MarketingToolsSubmenu tools={tools.marketingTools} onClick={onClick} />
        <ProductToolsSubmenu tools={tools.productTools} onClick={onClick} />
        <SalesToolsSubmenu tools={tools.salesTools} onClick={onClick} />
        <FundingToolsSubmenu tools={tools.fundingTools} onClick={onClick} />
        <HRToolsSubmenu tools={tools.hrTools} onClick={onClick} />
        <LegalToolsSubmenu tools={tools.legalTools} onClick={onClick} />
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );
};