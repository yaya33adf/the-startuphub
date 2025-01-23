import { Tool } from "@/components/tools/types/ToolTypes";

export const filterBusinessTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('lean-canvas-generator') ||
    tool.path?.includes('swot-analysis') ||
    tool.path?.includes('business-plan-template') ||
    tool.path?.includes('market-research-tool') ||
    tool.path?.includes('pitch-deck-creator')
  );

export const filterProductivityTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('task-management-tool') ||
    tool.path?.includes('team-collaboration-tool') ||
    tool.path?.includes('dashboard-analytics-tool') ||
    tool.path?.includes('content-calendar-tool')
  );

export const filterCreativeTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('design-tool') ||
    tool.path?.includes('video-editing-tool') ||
    tool.path?.includes('photo-editing-tool')
  );

export const filterUtilityTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('file-converter') ||
    tool.path?.includes('password-manager') ||
    tool.path?.includes('qr-code-generator')
  );

export const filterFinancialTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('invoice-generator') ||
    tool.path?.includes('expense-tracker') ||
    tool.path?.includes('financial-projection-tool')
  );

export const filterMarketingTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('email-campaign') ||
    tool.path?.includes('social-media-tool') ||
    tool.path?.includes('seo-tool')
  );

export const filterProductTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('product-roadmap') ||
    tool.path?.includes('feature-planning') ||
    tool.path?.includes('product-analytics')
  );

export const filterLegalTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('legal-document') ||
    tool.path?.includes('compliance-tool') ||
    tool.path?.includes('contract-generator')
  );

export const filterSalesTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('sales-pipeline') ||
    tool.path?.includes('crm-tool') ||
    tool.path?.includes('sales-analytics')
  );

export const filterFundingTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('investor-return') ||
    tool.path?.includes('funding-calculator') ||
    tool.path?.includes('valuation-tool')
  );

export const filterHRTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('team-management') ||
    tool.path?.includes('recruitment-tool') ||
    tool.path?.includes('hr-analytics')
  );

export const filterCustomerExperienceTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('customer-feedback-tool') ||
    tool.path?.includes('survey-tool') ||
    tool.path?.includes('live-chat-tool')
  );

export const filterOperationsTools = (tools: Tool[]) =>
  tools.filter(tool =>
    tool.path?.includes('inventory-management-tool') ||
    tool.path?.includes('order-tracking-tool') ||
    tool.path?.includes('supply-chain-tool')
  );

export const filterFreeTools = (tools: Tool[]) =>
  tools.filter(tool => tool.isFree === true);