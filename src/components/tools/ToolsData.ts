import { Tool } from "./types/ToolTypes";
import {
  Calculator,
  Wallet,
  PiggyBank,
  TrendingUp,
  BarChart,
  Wrench,
  BookOpen,
  Building2,
  Calendar,
  Target,
  FileText,
  QrCode,
  Paintbrush,
  Users,
  Mail,
  Receipt,
  StickyNote,
  DollarSign,
  LineChart,
  Coins
} from "lucide-react";

// Financial Planning Tools
const financialPlanningTools: Tool[] = [
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
  }
];

import { businessTools } from "./categories/BusinessTools";
import { productivityTools } from "./categories/ProductivityTools";
import { creativeTools } from "./categories/CreativeTools";
import { utilityTools } from "./categories/UtilityTools";

export const tools = [
  ...businessTools,
  ...productivityTools,
  ...creativeTools,
  ...utilityTools,
  ...financialPlanningTools
];
