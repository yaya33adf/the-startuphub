import { RoadmapSection } from "@/types/roadmap";

export const business: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "business-setup",
      title: "Business Establishment",
      description: "Learn how to set up and manage a personal styling business.",
      status: "required",
      skills: ["Business Planning", "Service Pricing", "Legal Requirements"],
      resources: [
        {
          name: "Styling Business Guide",
          url: "https://www.stylistbusiness.com"
        }
      ]
    },
    {
      id: "marketing",
      title: "Marketing & Branding",
      description: "Develop your personal brand and marketing strategy.",
      status: "required",
      skills: ["Social Media Marketing", "Personal Branding", "Portfolio Development"],
      resources: [
        {
          name: "Stylist Marketing Guide",
          url: "https://www.stylistmarketing.com"
        }
      ]
    },
    {
      id: "networking",
      title: "Industry Networking",
      description: "Build professional relationships within the fashion and styling industry.",
      status: "recommended",
      skills: ["Networking", "Industry Relations", "Event Participation"],
      resources: [
        {
          name: "Fashion Industry Network",
          url: "https://www.fashionnetwork.com"
        }
      ]
    }
  ]
};