import { RoadmapSection } from "@/types/roadmap";

export const business: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "business-setup",
      title: "Business Fundamentals",
      description: "Establish and manage your photography business",
      skills: ["Business planning", "Pricing strategy", "Legal requirements", "Insurance"],
      status: "required",
      resources: [
        {
          name: "Photography Business Guide",
          url: "https://www.format.com/magazine/resources/photography/how-to-start-photography-business"
        }
      ]
    },
    {
      id: "marketing",
      title: "Marketing and Branding",
      description: "Develop your brand and market your services",
      skills: ["Portfolio creation", "Social media marketing", "Networking", "Client communication"],
      status: "required",
      resources: [
        {
          name: "Photography Marketing Guide",
          url: "https://www.photobizx.com/photography-marketing/"
        }
      ]
    },
    {
      id: "client-management",
      title: "Client Management",
      description: "Handle client relationships and projects professionally",
      skills: ["Contract writing", "Project management", "Client communication", "Delivery systems"],
      status: "required",
      resources: [
        {
          name: "Client Management Tips",
          url: "https://www.slrlounge.com/client-management-photographers/"
        }
      ]
    }
  ]
};