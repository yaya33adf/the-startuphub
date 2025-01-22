import { Tool } from "../types/ToolTypes";
import {
  Calculator,
  Wallet,
  LineChart,
  DollarSign,
  TrendingUp,
  Coins,
  Timer,
  Scale,
  PieChart,
  Goal
} from "lucide-react";

export const financialTools: Tool[] = [
  {
    title: "Budget Planner",
    description: "Create and manage your business budget",
    icon: Wallet,
    path: "/tools/budget-planner",
    active: false
  },
  {
    title: "Investment Calculator",
    description: "Calculate potential returns on investments",
    icon: LineChart,
    path: "/tools/investment-calculator",
    active: false
  },
  {
    title: "Cash Flow Tracker",
    description: "Monitor your business cash flow",
    icon: DollarSign,
    path: "/tools/cash-flow",
    active: false
  },
  {
    title: "Financial Forecasting",
    description: "Predict future financial scenarios",
    icon: TrendingUp,
    path: "/tools/financial-forecast",
    active: false
  },
  {
    title: "Profit Calculator",
    description: "Calculate profit margins and breakeven points",
    icon: Coins,
    path: "/tools/profit-calculator",
    active: false
  },
  {
    title: "Startup Valuation Calculator",
    description: "Estimate your startup's worth based on revenue, market size, and growth potential",
    icon: Calculator,
    path: "/tools/startup-valuation",
    active: true
  },
  {
    title: "Runway Calculator",
    description: "Determine how long your current funding will last based on burn rate",
    icon: Timer,
    path: "/tools/runway-calculator",
    active: true
  },
  {
    title: "Break-even Analysis Tool",
    description: "Identify the sales volume needed to cover costs and achieve profitability",
    icon: Scale,
    path: "/tools/break-even-analysis",
    active: false
  },
  {
    title: "Investor Return Calculator",
    description: "Show potential investors their expected ROI based on your financial projections",
    icon: PieChart,
    path: "/tools/investor-return",
    active: false
  },
  {
    title: "Crowdfunding Goal Calculator",
    description: "Calculate the funding target needed to cover production and marketing costs",
    icon: Goal,
    path: "/tools/crowdfunding-goal",
    active: false
  }
];