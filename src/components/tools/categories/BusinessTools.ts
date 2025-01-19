import { Tool } from "../types/ToolTypes";
import { Lightbulb } from "lucide-react";
import { StartupIdeaGenerator } from "../StartupIdeaGenerator";

export const businessTools: Tool[] = [
  {
    title: "Startup Ideas Generator",
    description: "Generate innovative startup ideas by combining industries, technologies, and target markets",
    icon: Lightbulb,
    component: StartupIdeaGenerator,
    active: true,
    fullWidth: true, // This will make it take up the full row
    path: "/startup-ideas"
  },
  {
    title: "Business Tools",
    description: "Essential Management Resources",
    icon: Lightbulb,
    active: true,
    path: "/tools"
  },
  {
    title: "Market Analysis",
    description: "Trends & Opportunities",
    icon: Lightbulb,
    active: true,
    path: "/markets"
  },
  {
    title: "Trend Analysis",
    description: "Real-time Market Insights",
    icon: Lightbulb,
    active: true,
    path: "/trends"
  },
  {
    title: "Side Hustles",
    description: "Extra Income Opportunities",
    icon: Lightbulb,
    active: true,
    path: "/side-hustles"
  },
  {
    title: "Startup Directory",
    description: "Innovative Companies",
    icon: Lightbulb,
    active: true,
    path: "/startups"
  },
  {
    title: "Crowdfunding",
    description: "Investment Opportunities",
    icon: Lightbulb,
    active: true,
    path: "/crowdfunding"
  },
  {
    title: "Business Cards",
    description: "Professional Design Templates",
    icon: Lightbulb,
    active: true,
    path: "/business-cards"
  }
];
