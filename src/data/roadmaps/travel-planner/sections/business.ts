import { RoadmapSection } from "@/types/roadmap";

export const businessSection: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "business-setup",
      title: "Business Operations",
      description: "Set up and manage your travel planning business effectively.",
      status: "required",
      skills: ["Business Planning", "Financial Management", "Legal Compliance"],
      resources: [
        {
          name: "Travel Business Startup Guide",
          url: "https://www.entrepreneur.com/starting-a-business/travel-agency"
        }
      ]
    },
    {
      id: "marketing",
      title: "Marketing and Networking",
      description: "Develop marketing strategies and build industry relationships.",
      status: "recommended",
      skills: ["Digital Marketing", "Social Media", "Networking"],
      resources: [
        {
          name: "Travel Marketing Strategies",
          url: "https://www.travelpulse.com/marketing"
        }
      ]
    },
    {
      id: "partnerships",
      title: "Industry Partnerships",
      description: "Build relationships with suppliers, vendors, and industry partners.",
      status: "recommended",
      skills: ["Negotiation", "Partnership Management", "Vendor Relations"],
      resources: [
        {
          name: "Travel Industry Network",
          url: "https://www.travelweekly.com/Travel-Business"
        }
      ]
    }
  ]
};