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
    customerExperienceTools: Tool[];
    operationsTools: Tool[];
  };
  onClick?: () => void;
}

export const ToolsDropdownContent = ({ tools, onClick = () => {} }: ToolsDropdownContentProps) => {
  return (
    <DropdownMenuContent className="w-56">
      <div className="p-2">
        <BusinessToolsSubmenu tools={tools.businessPlanningTools} onClick={onClick} />
        <CustomerExperienceToolsSubmenu tools={tools.customerExperienceTools} onClick={onClick} />
        <FinancialToolsSubmenu tools={tools.financialTools} onClick={onClick} />
        <FreeToolsSubmenu tools={tools.freeTools} onClick={onClick} />
        <FundingToolsSubmenu tools={tools.fundingTools} onClick={onClick} />
        <HRToolsSubmenu tools={tools.hrTools} onClick={onClick} />
        <LegalToolsSubmenu tools={tools.legalTools} onClick={onClick} />
        <MarketingToolsSubmenu tools={tools.marketingTools} onClick={onClick} />
        <OperationsToolsSubmenu tools={tools.operationsTools} onClick={onClick} />
        <ProductToolsSubmenu tools={tools.productTools} onClick={onClick} />
        <SalesToolsSubmenu tools={tools.salesTools} onClick={onClick} />
      </div>
    </DropdownMenuContent>
  );
};