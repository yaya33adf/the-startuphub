import { Tool } from "../types/ToolTypes";
import { 
  FileText, 
  BookOpen, 
  LayoutTemplate, 
  Book,
  Edit,
  CheckSquare,
  XSquare,
  LayoutGrid,
  LayoutDashboard,
  LayoutList,
  Brain
} from "lucide-react";
import { LeanCanvasGenerator } from "../LeanCanvasGenerator";
import { SWOTAnalysis } from "../SWOTAnalysis";

export const businessTools: Tool[] = [
  {
    title: "Lean Canvas Generator",
    description: "Create a comprehensive business plan using the Lean Canvas methodology",
    icon: LayoutTemplate,
    component: LeanCanvasGenerator,
    active: true,
    path: "/tools/lean-canvas-generator",
    fullWidth: true
  },
  {
    title: "SWOT Analysis",
    description: "Analyze your business's Strengths, Weaknesses, Opportunities, and Threats",
    icon: Brain,
    component: SWOTAnalysis,
    active: true,
    path: "/tools/swot-analysis",
    fullWidth: true
  },
  {
    title: "Business Plan Template",
    description: "A template to help you create a detailed business plan",
    icon: FileText,
    active: true,
    path: "/tools/business-plan-template",
  },
  {
    title: "Market Research Tool",
    description: "Conduct market research to validate your business idea",
    icon: BookOpen,
    active: true,
    path: "/tools/market-research-tool",
  },
  {
    title: "Financial Projection Tool",
    description: "Create financial projections for your business",
    icon: Book,
    active: true,
    path: "/tools/financial-projection-tool",
  },
  {
    title: "Pitch Deck Creator",
    description: "Create a professional pitch deck for investors",
    icon: Edit,
    active: true,
    path: "/tools/pitch-deck-creator",
  },
  {
    title: "Task Management Tool",
    description: "Manage your tasks and projects effectively",
    icon: CheckSquare,
    active: true,
    path: "/tools/task-management-tool",
  },
  {
    title: "Team Collaboration Tool",
    description: "Collaborate with your team in real-time",
    icon: XSquare,
    active: true,
    path: "/tools/team-collaboration-tool",
  },
  {
    title: "Dashboard Analytics Tool",
    description: "Analyze your business performance with dashboards",
    icon: LayoutDashboard,
    active: true,
    path: "/tools/dashboard-analytics-tool",
  },
  {
    title: "Content Calendar Tool",
    description: "Plan and schedule your content marketing",
    icon: LayoutList,
    active: true,
    path: "/tools/content-calendar-tool",
  },
];