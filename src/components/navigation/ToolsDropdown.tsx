import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { tools } from "@/components/tools/ToolsData";
import { FreeToolsSubmenu } from "./tool-submenus/FreeToolsSubmenu";
import { FinancialToolsSubmenu } from "./tool-submenus/FinancialToolsSubmenu";
import { BusinessToolsSubmenu } from "./tool-submenus/BusinessToolsSubmenu";
import { MarketingToolsSubmenu } from "./tool-submenus/MarketingToolsSubmenu";
import { ProductToolsSubmenu } from "./tool-submenus/ProductToolsSubmenu";
import { LegalToolsSubmenu } from "./tool-submenus/LegalToolsSubmenu";
import { SalesToolsSubmenu } from "./tool-submenus/SalesToolsSubmenu";

interface ToolsDropdownProps {
  onClick?: () => void;
}

export const ToolsDropdown = ({ onClick = () => {} }: ToolsDropdownProps) => {
  // Filter only active tools and ensure unique paths
  const activeTools = tools.filter(tool => tool.active && tool.path);
  
  const financialTools = activeTools.filter(tool => 
    tool.path?.startsWith('/tools/') && 
    !tool.path.includes('currency-converter') && 
    (tool.path.includes('budget') || 
     tool.path.includes('investment') || 
     tool.path.includes('cash-flow') || 
     tool.path.includes('financial') ||
     tool.path.includes('profit'))
  );

  const businessPlanningTools = activeTools.filter(tool =>
    tool.path?.includes('runway-calculator') ||
    tool.path?.includes('break-even-analysis') ||
    tool.path?.includes('investor-return') ||
    tool.path?.includes('crowdfunding-goal')
  );

  const marketingTools = activeTools.filter(tool =>
    tool.path?.includes('email-campaign') ||
    tool.path?.includes('brand-identity') ||
    tool.path?.includes('qr-code') ||
    tool.path?.includes('sales-analytics')
  );

  const productTools = activeTools.filter(tool =>
    tool.path?.includes('product-roadmap') ||
    tool.path?.includes('feature-planning') ||
    tool.path?.includes('sprint-planning') ||
    tool.path?.includes('product-backlog')
  );

  const legalTools = activeTools.filter(tool =>
    tool.path?.includes('legal') ||
    tool.path?.includes('compliance') ||
    tool.path?.includes('terms') ||
    tool.path?.includes('privacy') ||
    tool.path?.includes('contract')
  );

  const salesTools = activeTools.filter(tool =>
    tool.path?.includes('sales') ||
    tool.path?.includes('revenue') ||
    tool.path?.includes('invoice') ||
    tool.path?.includes('pricing')
  );

  // All remaining tools go to free tools
  const freeTools = activeTools.filter(tool => 
    !financialTools.includes(tool) &&
    !businessPlanningTools.includes(tool) &&
    !marketingTools.includes(tool) &&
    !productTools.includes(tool) &&
    !legalTools.includes(tool) &&
    !salesTools.includes(tool)
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="h-10 px-3 py-2 transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:scale-105"
        >
          <Wrench className="w-4 h-4 mr-2" />
          <span>Tools</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start"
        className="w-56 animate-in fade-in-0 zoom-in-95 bg-background"
      >
        <DropdownMenuGroup>
          <FreeToolsSubmenu tools={freeTools} onClick={onClick} />
          <FinancialToolsSubmenu tools={financialTools} onClick={onClick} />
          <BusinessToolsSubmenu tools={businessPlanningTools} onClick={onClick} />
          <MarketingToolsSubmenu tools={marketingTools} onClick={onClick} />
          <ProductToolsSubmenu tools={productTools} onClick={onClick} />
          <SalesToolsSubmenu tools={salesTools} onClick={onClick} />
          <LegalToolsSubmenu tools={legalTools} onClick={onClick} />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};