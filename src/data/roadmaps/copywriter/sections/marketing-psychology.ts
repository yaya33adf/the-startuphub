import { RoadmapSection } from "@/types/roadmap";

export const marketingPsychologySection: RoadmapSection = {
  title: "2. Marketing & Psychology",
  steps: [
    {
      id: "marketing-basics",
      title: "Marketing Fundamentals",
      description: "Understand key marketing concepts and consumer behavior",
      status: "required",
      skills: [
        "Target Audience Analysis",
        "Marketing Psychology",
        "Consumer Behavior",
        "Market Research",
        "Value Proposition"
      ],
      resources: [
        {
          name: "HubSpot Marketing Course",
          url: "https://academy.hubspot.com/courses/digital-marketing"
        }
      ]
    },
    {
      id: "content-strategy",
      title: "Content Strategy",
      description: "Learn to develop effective content strategies",
      status: "recommended",
      skills: [
        "Content Planning",
        "Sales Funnel",
        "Customer Journey",
        "Content Types",
        "Distribution Channels"
      ],
      resources: [
        {
          name: "Content Marketing Institute",
          url: "https://contentmarketinginstitute.com/"
        }
      ]
    }
  ]
};