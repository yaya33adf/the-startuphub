import { Tool } from "@/components/tools/types/ToolTypes";
import { useMemo } from "react";
import {
  filterFinancialTools,
  filterBusinessTools,
  filterMarketingTools,
  filterProductTools,
  filterLegalTools,
  filterSalesTools,
  filterFundingTools
} from "@/utils/toolFilters";

export const useToolsFilter = (tools: Tool[]) => {
  // Filter only active tools and ensure unique paths
  const activeTools = useMemo(() => 
    tools.filter(tool => tool.active && tool.path), 
    [tools]
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

  // All remaining tools go to free tools
  const freeTools = useMemo(() => 
    activeTools.filter(tool => 
      !financialTools.includes(tool) &&
      !businessPlanningTools.includes(tool) &&
      !marketingTools.includes(tool) &&
      !productTools.includes(tool) &&
      !legalTools.includes(tool) &&
      !salesTools.includes(tool) &&
      !fundingTools.includes(tool)
    ),
    [activeTools, financialTools, businessPlanningTools, marketingTools, productTools, legalTools, salesTools, fundingTools]
  );

  return {
    financialTools,
    businessPlanningTools,
    marketingTools,
    productTools,
    legalTools,
    salesTools,
    fundingTools,
    freeTools
  };
};