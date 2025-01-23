import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { ToolsDropdownTrigger } from "./tool-submenus/ToolsDropdownTrigger";
import { ToolsDropdownContent } from "./tool-submenus/ToolsDropdownContent";
import { useToolsFilter } from "@/hooks/useToolsFilter";
import { tools } from "@/components/tools/ToolsData";
import { Tool } from "@/components/tools/types/ToolTypes";
import { filterBusinessTools, filterFinancialTools, filterMarketingTools, filterProductTools, filterLegalTools, filterSalesTools, filterFundingTools, filterHRTools, filterCustomerExperienceTools, filterOperationsTools, filterFreeTools } from "@/utils/toolFilters";

interface ToolsDropdownProps {
  onClick?: () => void;
}

export const ToolsDropdown = ({ onClick = () => {} }: ToolsDropdownProps) => {
  const allTools = useToolsFilter(tools);
  
  const filteredTools = {
    businessPlanningTools: filterBusinessTools(allTools),
    financialTools: filterFinancialTools(allTools),
    marketingTools: filterMarketingTools(allTools),
    productTools: filterProductTools(allTools),
    legalTools: filterLegalTools(allTools),
    salesTools: filterSalesTools(allTools),
    fundingTools: filterFundingTools(allTools),
    hrTools: filterHRTools(allTools),
    customerExperienceTools: filterCustomerExperienceTools(allTools),
    operationsTools: filterOperationsTools(allTools),
    freeTools: filterFreeTools(allTools),
  };

  return (
    <DropdownMenu>
      <ToolsDropdownTrigger />
      <ToolsDropdownContent tools={filteredTools} onClick={onClick} />
    </DropdownMenu>
  );
};