import { RoadmapSection } from "@/types/roadmap";

export const businessSection: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "marketing",
      title: "Marketing & Leasing",
      description: "Develop effective marketing strategies and leasing processes.",
      skills: ["Property Marketing", "Digital Advertising", "Leasing Strategy"],
      status: "required",
      resources: [
        {
          name: "Property Marketing Guide",
          url: "https://www.appfolio.com/property-manager-marketing-guide"
        }
      ]
    },
    {
      id: "growth",
      title: "Portfolio Growth",
      description: "Learn strategies for growing your property management portfolio.",
      skills: ["Business Development", "Networking", "Client Relations"],
      status: "recommended",
      resources: [
        {
          name: "Growing Your Property Management Business",
          url: "https://www.propertyware.com/blog/growing-property-management-company/"
        }
      ]
    }
  ]
};