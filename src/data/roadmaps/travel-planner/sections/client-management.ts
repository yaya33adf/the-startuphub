import { RoadmapSection } from "@/types/roadmap";

export const clientManagementSection: RoadmapSection = {
  title: "Client Management",
  steps: [
    {
      id: "client-consultation",
      title: "Client Consultation",
      description: "Develop skills in understanding client needs, preferences, and budget constraints.",
      status: "required",
      skills: ["Needs Assessment", "Budget Planning", "Communication"],
      resources: [
        {
          name: "Client Communication Skills",
          url: "https://www.travelmarketreport.com"
        }
      ]
    },
    {
      id: "personalization",
      title: "Travel Experience Personalization",
      description: "Learn to customize travel experiences based on client preferences and special requirements.",
      status: "recommended",
      skills: ["Customization", "Special Requirements", "Experience Design"],
      resources: [
        {
          name: "Luxury Travel Advisor",
          url: "https://www.luxurytraveladvisor.com"
        }
      ]
    }
  ]
};