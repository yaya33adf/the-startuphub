import { Tool } from "@/components/tools/types/ToolTypes";
import { useMemo } from "react";
import {
  filterFinancialTools,
  filterBusinessTools,
  filterMarketingTools,
  filterProductTools,
  filterLegalTools,
  filterSalesTools,
  filterFundingTools,
  filterHRTools,
  filterCustomerExperienceTools,
  filterOperationsTools
} from "@/utils/toolFilters";

export const useToolsFilter = (tools: Tool[]) => {
  const activeTools = useMemo(() => 
    tools.filter(tool => tool.active && tool.path), 
    [tools]
  );

  const operationsTools = useMemo(() => 
    filterOperationsTools(activeTools),
    [activeTools]
  );

  const financialTools = useMemo(() => 
    filterFinancialTools(activeTools),
    [activeTools]
  );

  const businessPlanningTools = useMemo(() => 
    filterBusinessTools(activeTools),
    [activeTools]
  );

  const marketingTools = useMemo(() => 
    filterMarketingTools(activeTools),
    [activeTools]
  );

  const productTools = useMemo(() => 
    filterProductTools(activeTools),
    [activeTools]
  );

  const legalTools = useMemo(() => 
    filterLegalTools(activeTools),
    [activeTools]
  );

  const salesTools = useMemo(() => 
    filterSalesTools(activeTools),
    [activeTools]
  );

  const fundingTools = useMemo(() => 
    filterFundingTools(activeTools),
    [activeTools]
  );

  const hrTools = useMemo(() => 
    filterHRTools(activeTools),
    [activeTools]
  );

  const customerExperienceTools = useMemo(() => 
    filterCustomerExperienceTools(activeTools),
    [activeTools]
  );

  // All remaining tools go to free tools
  const freeTools = useMemo(() => 
    activeTools.filter(tool => 
      !financialTools.includes(tool) &&
      !businessPlanningTools.includes(tool) &&
      !marketingTools.includes(tool) &&
      !productTools.includes(tool) &&
      !legalTools.includes(tool) &&
      !salesTools.includes(tool) &&
      !fundingTools.includes(tool) &&
      !hrTools.includes(tool) &&
      !customerExperienceTools.includes(tool) &&
      !operationsTools.includes(tool)
    ),
    [activeTools, financialTools, businessPlanningTools, marketingTools, productTools, legalTools, salesTools, fundingTools, hrTools, customerExperienceTools, operationsTools]
  );

  return {
    financialTools,
    businessPlanningTools,
    marketingTools,
    productTools,
    legalTools,
    salesTools,
    fundingTools,
    hrTools,
    customerExperienceTools,
    operationsTools,
    freeTools
  };
};
