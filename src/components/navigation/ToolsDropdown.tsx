import { Wrench, Coins, Gift, Calculator, TrendingUp, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { tools } from "@/components/tools/ToolsData";

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

  // All remaining tools go to free tools
  const freeTools = activeTools.filter(tool => 
    !financialTools.includes(tool) &&
    !businessPlanningTools.includes(tool) &&
    !marketingTools.includes(tool) &&
    !productTools.includes(tool)
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
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              <span>Free Tools</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="bg-background">
              {freeTools.length > 0 ? (
                freeTools.map((tool) => (
                  <DropdownMenuItem
                    key={tool.path}
                    asChild
                    onClick={onClick}
                    className="transition-colors duration-200 hover:bg-accent/50"
                  >
                    <Link to={tool.path} className="flex items-center gap-2 w-full p-2">
                      <tool.icon className="w-4 h-4" />
                      <span>{tool.title}</span>
                    </Link>
                  </DropdownMenuItem>
                ))
              ) : (
                <DropdownMenuLabel className="text-sm text-muted-foreground px-2 py-1">
                  No free tools available
                </DropdownMenuLabel>
              )}
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex items-center gap-2">
              <Coins className="w-4 h-4" />
              <span>Financial Planning Tools</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="bg-background">
              {financialTools.length > 0 ? (
                financialTools.map((tool) => (
                  <DropdownMenuItem
                    key={tool.path}
                    asChild
                    onClick={onClick}
                    className="transition-colors duration-200 hover:bg-accent/50"
                  >
                    <Link to={tool.path} className="flex items-center gap-2 w-full p-2">
                      <tool.icon className="w-4 h-4" />
                      <span>{tool.title}</span>
                    </Link>
                  </DropdownMenuItem>
                ))
              ) : (
                <DropdownMenuLabel className="text-sm text-muted-foreground px-2 py-1">
                  Coming soon...
                </DropdownMenuLabel>
              )}
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              <span>Business Planning Tools</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="bg-background">
              {businessPlanningTools.length > 0 ? (
                businessPlanningTools.map((tool) => (
                  <DropdownMenuItem
                    key={tool.path}
                    asChild
                    onClick={onClick}
                    className="transition-colors duration-200 hover:bg-accent/50"
                  >
                    <Link to={tool.path} className="flex items-center gap-2 w-full p-2">
                      <tool.icon className="w-4 h-4" />
                      <span>{tool.title}</span>
                    </Link>
                  </DropdownMenuItem>
                ))
              ) : (
                <DropdownMenuLabel className="text-sm text-muted-foreground px-2 py-1">
                  Coming soon...
                </DropdownMenuLabel>
              )}
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Marketing & Growth Tools</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="bg-background">
              {marketingTools.length > 0 ? (
                marketingTools.map((tool) => (
                  <DropdownMenuItem
                    key={tool.path}
                    asChild
                    onClick={onClick}
                    className="transition-colors duration-200 hover:bg-accent/50"
                  >
                    <Link to={tool.path} className="flex items-center gap-2 w-full p-2">
                      <tool.icon className="w-4 h-4" />
                      <span>{tool.title}</span>
                    </Link>
                  </DropdownMenuItem>
                ))
              ) : (
                <DropdownMenuLabel className="text-sm text-muted-foreground px-2 py-1">
                  Coming soon...
                </DropdownMenuLabel>
              )}
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span>Product Development Tools</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="bg-background">
              {productTools.length > 0 ? (
                productTools.map((tool) => (
                  <DropdownMenuItem
                    key={tool.path}
                    asChild
                    onClick={onClick}
                    className="transition-colors duration-200 hover:bg-accent/50"
                  >
                    <Link to={tool.path} className="flex items-center gap-2 w-full p-2">
                      <tool.icon className="w-4 h-4" />
                      <span>{tool.title}</span>
                    </Link>
                  </DropdownMenuItem>
                ))
              ) : (
                <DropdownMenuLabel className="text-sm text-muted-foreground px-2 py-1">
                  Coming soon...
                </DropdownMenuLabel>
              )}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};