import { RoadmapSection } from "@/types/roadmap";

export const fundamentals: RoadmapSection = {
  title: "Fashion Fundamentals",
  steps: [
    {
      id: "color-theory",
      title: "Color Theory & Analysis",
      description: "Master color theory, seasonal color analysis, and how to determine client color palettes.",
      status: "required",
      skills: ["Color Analysis", "Color Coordination", "Seasonal Color Theory"],
      resources: [
        {
          name: "Color Theory Fundamentals",
          url: "https://www.pantone.com/color-intelligence/color-education/color-theory"
        },
        {
          name: "Seasonal Color Analysis Guide",
          url: "https://www.coloranalysis.com"
        }
      ]
    },
    {
      id: "body-types",
      title: "Body Types & Proportions",
      description: "Learn to identify different body types and understand how to create balanced, flattering looks.",
      status: "required",
      skills: ["Body Shape Analysis", "Proportion Theory", "Visual Balance"],
      resources: [
        {
          name: "Understanding Body Types",
          url: "https://www.fashion-styling.com/body-types"
        }
      ]
    },
    {
      id: "fashion-history",
      title: "Fashion History & Trends",
      description: "Study fashion history, current trends, and trend forecasting methods.",
      status: "recommended",
      skills: ["Trend Analysis", "Fashion History", "Style Evolution"],
      resources: [
        {
          name: "Fashion History Timeline",
          url: "https://fashionhistory.org"
        }
      ]
    }
  ]
};