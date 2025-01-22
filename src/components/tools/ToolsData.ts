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
  Coins,
  Timer,
  Scale,
  PieChart,
  Goal,
  Heart,
  MessageSquare,
  Headset,
  Truck,
  Package,
  Warehouse
} from "lucide-react";
import { Tool } from "./types/ToolTypes";

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
    active: false
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

// Customer Experience Tools
const customerExperienceTools: Tool[] = [
  {
    title: "Customer Feedback System",
    description: "Collect and analyze customer feedback",
    icon: MessageSquare,
    path: "/tools/customer-feedback",
    active: true
  },
  {
    title: "Support Ticket Manager",
    description: "Manage customer support tickets efficiently",
    icon: Headset,
    path: "/tools/support-tickets",
    active: true
  },
  {
    title: "Customer Satisfaction Survey",
    description: "Create and manage customer satisfaction surveys",
    icon: Heart,
    path: "/tools/satisfaction-survey",
    active: true
  }
];

// Operations & Logistics Tools
const operationsTools: Tool[] = [
  {
    title: "Inventory Management",
    description: "Track and manage your inventory levels",
    icon: Package,
    path: "/tools/inventory-management",
    active: true
  },
  {
    title: "Warehouse Management",
    description: "Optimize warehouse operations and storage",
    icon: Warehouse,
    path: "/tools/warehouse-management",
    active: true
  },
  {
    title: "Shipping Calculator",
    description: "Calculate shipping costs and delivery times",
    icon: Truck,
    path: "/tools/shipping-calculator",
    active: true
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
  ...financialPlanningTools,
  ...customerExperienceTools,
  ...operationsTools
];