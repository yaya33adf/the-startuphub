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
import { useToolsFilter } from "@/hooks/useToolsFilter";

interface ToolsDropdownProps {
  onClick?: () => void;
}

export const ToolsDropdown = ({ onClick = () => {} }: ToolsDropdownProps) => {
  const {
    financialTools,
    businessPlanningTools,
    marketingTools,
    productTools,
    legalTools,
    salesTools,
    freeTools
  } = useToolsFilter(tools);

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