import { RoadmapSection } from "@/types/roadmap";

export const clientManagement: RoadmapSection = {
  title: "Client Management",
  steps: [
    {
      id: "client-communication",
      title: "Client Communication",
      description: "Develop effective communication and consultation skills.",
      status: "required",
      skills: ["Consultation Skills", "Needs Assessment", "Feedback Management", "Service Planning"],
      resources: [
        {
          name: "Client Relations Guide",
          url: "https://www.personalchef.com/client-relations"
        }
      ]
    },
    {
      id: "service-customization",
      title: "Service Customization",
      description: "Learn to tailor services to individual client needs and preferences.",
      status: "required",
      skills: ["Custom Menu Creation", "Dietary Accommodation", "Schedule Management", "Event Planning"],
      resources: [
        {
          name: "Service Customization Best Practices",
          url: "https://www.uspca.com/best-practices"
        }
      ]
    }
  ]
};