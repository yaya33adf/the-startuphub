import { Tool } from "../types/ToolTypes";
import { 
  Lightbulb, 
  DollarSign, 
  Target,
  BarChart,
  Users,
  Mail,
  Receipt,
  Building
} from "lucide-react";

export const businessTools: Tool[] = [
  {
    title: "Business Name Generator",
    description: "Generate creative and unique business names for your startup or company.",
    icon: Building,
    active: true,
    path: "/tools/business-name-generator"
  },
  {
    title: "Currency Converter",
    description: "Convert currencies with real-time exchange rates.",
    icon: DollarSign,
    active: true,
    path: "/tools/currency-converter"
  },
  {
    title: "Startup Idea Generator",
    description: "Generate innovative startup ideas based on industry trends and technologies.",
    icon: Lightbulb,
    active: true,
    path: "/tools/startup-idea-generator",
    fullWidth: true
  },
  {
    title: "Sales Analytics",
    description: "Track and analyze your sales performance with detailed metrics and charts.",
    icon: BarChart,
    active: true,
    path: "/tools/sales-analytics"
  },
  {
    title: "Team Management",
    description: "Manage your team members, assignments, and track progress.",
    icon: Users,
    active: true,
    path: "/tools/team-management"
  },
  {
    title: "Email Campaign Manager",
    description: "Create and manage email marketing campaigns.",
    icon: Mail,
    active: true,
    path: "/tools/email-campaign-manager"
  },
  {
    title: "Invoice Generator",
    description: "Create professional invoices for your business.",
    icon: Receipt,
    active: true,
    path: "/tools/invoice-generator"
  },
  {
    title: "Goal Tracker",
    description: "Set and track your business goals and objectives.",
    icon: Target,
    active: true,
    path: "/tools/goal-tracker"
  }
];