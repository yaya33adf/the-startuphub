import { Lightbulb, BookOpen, Shield, Shuffle } from "lucide-react";
import { Tool } from "../types/ToolTypes";
import { BusinessNameGenerator } from "../BusinessNameGenerator";
import { BookNameGenerator } from "../BookNameGenerator";
import { BrandIdentityTool } from "../BrandIdentityTool";
import { StartupIdeaGenerator } from "../StartupIdeaGenerator";

export const creativeTools: Tool[] = [
  {
    title: "Startup Idea Generator",
    description: "Generate creative startup ideas by combining industries, technologies, and target markets",
    icon: Shuffle,
    component: StartupIdeaGenerator,
    active: true,
  },
  {
    title: "Business Name Generator",
    description: "Generate creative and unique business names based on your industry and keywords",
    icon: Lightbulb,
    component: BusinessNameGenerator,
    active: true,
  },
  {
    title: "Book Name Generator",
    description: "Generate creative book titles based on genres and keywords",
    icon: BookOpen,
    component: BookNameGenerator,
    active: true,
  },
  {
    title: "Brand Identity Tool",
    description: "Create and manage your brand's visual identity",
    icon: Shield,
    component: BrandIdentityTool,
    active: true,
  },
];