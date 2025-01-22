import { RoadmapSection } from "@/types/roadmap";

export const businessSection: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "ep-9",
      title: "Marketing & Branding",
      description: "Developing your event planning brand and marketing strategies.",
      status: "recommended",
      skills: ["Brand Development", "Social Media Marketing", "Networking"],
      resources: [
        {
          name: "Event Business Marketing",
          url: "https://www.eventmanagerblog.com/event-marketing"
        }
      ]
    },
    {
      id: "ep-10",
      title: "Legal & Insurance",
      description: "Understanding contracts, liability, and insurance requirements.",
      status: "required",
      skills: ["Contract Law", "Insurance Knowledge", "Legal Compliance"],
      resources: [
        {
          name: "Event Planning Legal Guide",
          url: "https://www.eventplannersassociation.com/legal-guide"
        }
      ]
    }
  ]
};