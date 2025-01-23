import { Tool } from "../types/ToolTypes";
import { 
  BookOpen, 
  Target, 
  LineChart, 
  Building2, 
  FileSpreadsheet,
  Calculator,
  PenTool,
  Users,
  FileText,
  BarChart3
} from "lucide-react";
import { BusinessModelGenerator } from "../BusinessModelGenerator";
import { GoalTracker } from "../GoalTracker";
import { CompetitorBenchmarking } from "../CompetitorBenchmarking";
import { StartupValuation } from "../StartupValuation";
import { ExpenseTracker } from "../ExpenseTracker";
import { BreakEvenAnalysis } from "../BreakEvenAnalysis";
import { BrandIdentityTool } from "../BrandIdentityTool";
import { TeamRecommendationForm } from "../team-recommendation/RecommendationForm";
import { LeanCanvasGenerator } from "../LeanCanvasGenerator";
import { SalesAnalytics } from "../SalesAnalytics";

export const businessTools: Tool[] = [
  {
    title: "Business Model Generator",
    description: "Create and validate your business model",
    icon: BookOpen,
    component: BusinessModelGenerator,
    active: true,
    path: "/tools/business-model"
  },
  {
    title: "Goal Tracker",
    description: "Set and track your business goals",
    icon: Target,
    component: GoalTracker,
    active: true,
    path: "/tools/goal-tracker"
  },
  {
    title: "Competitor Analysis",
    description: "Analyze your competitors",
    icon: LineChart,
    component: CompetitorBenchmarking,
    active: true,
    path: "/tools/competitor-analysis"
  },
  {
    title: "Startup Valuation",
    description: "Calculate your startup's value",
    icon: Building2,
    component: StartupValuation,
    active: true,
    path: "/tools/startup-valuation"
  },
  {
    title: "Expense Tracker",
    description: "Track your business expenses",
    icon: FileSpreadsheet,
    component: ExpenseTracker,
    active: true,
    path: "/tools/expense-tracker"
  },
  {
    title: "Break-Even Analysis",
    description: "Calculate your break-even point",
    icon: Calculator,
    component: BreakEvenAnalysis,
    active: true,
    path: "/tools/break-even"
  },
  {
    title: "Brand Identity Generator",
    description: "Create your brand identity",
    icon: PenTool,
    component: BrandIdentityTool,
    active: true,
    path: "/tools/brand-identity"
  },
  {
    title: "Team Recommendation",
    description: "Get team building recommendations",
    icon: Users,
    component: TeamRecommendationForm,
    active: true,
    path: "/tools/team-recommendation"
  },
  {
    title: "Lean Canvas Generator",
    description: "Create your lean canvas",
    icon: FileText,
    component: LeanCanvasGenerator,
    active: true,
    path: "/tools/lean-canvas"
  },
  {
    title: "Sales Analytics",
    description: "Track and analyze your sales",
    icon: BarChart3,
    component: SalesAnalytics,
    active: true,
    path: "/tools/sales-analytics"
  }
];