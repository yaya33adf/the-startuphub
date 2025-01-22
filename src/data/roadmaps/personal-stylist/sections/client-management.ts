import { RoadmapSection } from "@/types/roadmap";

export const clientManagement: RoadmapSection = {
  title: "Client Management",
  steps: [
    {
      id: "client-consultation",
      title: "Client Consultation Skills",
      description: "Develop effective consultation techniques and client communication skills.",
      status: "required",
      skills: ["Interview Techniques", "Need Assessment", "Communication Skills"],
      resources: [
        {
          name: "Consultation Best Practices",
          url: "https://www.stylistconsultation.com"
        }
      ]
    },
    {
      id: "client-psychology",
      title: "Style Psychology",
      description: "Understanding psychological aspects of personal style and client relationships.",
      status: "recommended",
      skills: ["Style Psychology", "Confidence Building", "Body Image Sensitivity"],
      resources: [
        {
          name: "Fashion Psychology",
          url: "https://www.fashionpsychology.org"
        }
      ]
    }
  ]
};