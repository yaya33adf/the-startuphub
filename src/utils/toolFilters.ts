import { Tool } from "@/components/tools/types/ToolTypes";

export const filterFinancialTools = (tools: Tool[]) => 
  tools.filter(tool => 
    tool.path?.startsWith('/tools/') && 
    !tool.path.includes('currency-converter') && 
    (tool.path.includes('budget') || 
     tool.path.includes('investment') || 
     tool.path.includes('cash-flow') || 
     tool.path.includes('financial') ||
     tool.path.includes('profit') ||
     tool.path.includes('startup-valuation'))
  );

export const filterBusinessTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('lean-canvas-generator') ||
    tool.path?.includes('business-plan-template') ||
    tool.path?.includes('market-research-tool') ||
    tool.path?.includes('pitch-deck-creator')
  );

export const filterMarketingTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('email-campaign') ||
    tool.path?.includes('brand-identity') ||
    tool.path?.includes('qr-code') ||
    tool.path?.includes('sales-analytics')
  );

export const filterProductTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('product-roadmap') ||
    tool.path?.includes('feature-planning') ||
    tool.path?.includes('sprint-planning') ||
    tool.path?.includes('product-backlog')
  );

export const filterOperationsTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('inventory-management') ||
    tool.path?.includes('warehouse-management') ||
    tool.path?.includes('shipping-calculator')
  );

export const filterLegalTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('legal') ||
    tool.path?.includes('compliance') ||
    tool.path?.includes('terms') ||
    tool.path?.includes('privacy') ||
    tool.path?.includes('contract')
  );

export const filterSalesTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('sales') ||
    tool.path?.includes('revenue') ||
    tool.path?.includes('invoice') ||
    tool.path?.includes('pricing')
  );

export const filterFundingTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('funding') ||
    tool.path?.includes('investment') ||
    tool.path?.includes('investor') ||
    tool.path?.includes('startup-valuation') ||
    tool.path?.includes('crowdfunding')
  );

export const filterHRTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('team-management') ||
    tool.path?.includes('hr') ||
    tool.path?.includes('recruitment') ||
    tool.path?.includes('employee') ||
    tool.path?.includes('performance')
  );

export const filterCustomerExperienceTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('customer-feedback') ||
    tool.path?.includes('support-tickets') ||
    tool.path?.includes('satisfaction-survey') ||
    tool.path?.includes('chat-support') ||
    tool.path?.includes('help-desk')
  );

