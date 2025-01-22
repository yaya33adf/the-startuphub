import { RoadmapSection } from "@/types/roadmap";

export const marketExpertiseSection: RoadmapSection = {
  title: "Market Expertise",
  steps: [
    {
      id: "market-analysis",
      title: "Market Analysis Skills",
      description: "Develop expertise in analyzing real estate markets and property values.",
      skills: ["Comparative Market Analysis", "Trend Analysis", "Property Valuation"],
      status: "required",
      resources: [
        {
          name: "Zillow Research",
          url: "https://www.zillow.com/research/"
        }
      ]
    },
    {
      id: "local-knowledge",
      title: "Local Market Knowledge",
      description: "Build comprehensive knowledge of your local real estate market.",
      skills: ["Neighborhood Analysis", "School Districts", "Local Amenities"],
      status: "required",
      resources: [
        {
          name: "Local MLS System",
          url: "https://www.nar.realtor/mls"
        }
      ]
    }
  ]
};