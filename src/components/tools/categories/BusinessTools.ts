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
  Brain,
  Building2,
  LineChart
} from "lucide-react";
import { LeanCanvasGenerator } from "../LeanCanvasGenerator";
import { SWOTAnalysis } from "../SWOTAnalysis";
import { BusinessModelGenerator } from "../BusinessModelGenerator";
import { CompetitorBenchmarking } from "../CompetitorBenchmarking";

export const businessTools: Tool[] = [
  {
    title: "Business Model Generator",
    description: "Create a comprehensive business model canvas",
    icon: Building2,
    component: BusinessModelGenerator,
    active: true,
    path: "/tools/business-model-generator",
    fullWidth: true
  },
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
    title: "Competitor Benchmarking",
    description: "Analyze and compare your competitors",
    icon: LineChart,
    component: CompetitorBenchmarking,
    active: true,
    path: "/tools/competitor-benchmarking",
    fullWidth: true
  },
];
