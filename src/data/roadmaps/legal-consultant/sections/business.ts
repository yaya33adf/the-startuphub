import type { RoadmapSection } from "@/types/roadmap";

export const businessSection: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "client-management",
      title: "Client Management",
      description: "Build and maintain strong client relationships",
      status: "required",
      skills: ["Communication", "Relationship Building", "Client Service"],
      resources: [
        {
          name: "Client Relations Guide",
          url: "https://www.lawpracticetoday.org/article/client-relations/"
        }
      ]
    },
    {
      id: "business-operations",
      title: "Practice Management",
      description: "Establish and manage a successful legal consulting practice",
      status: "recommended",
      skills: ["Practice Management", "Financial Planning", "Marketing"],
      resources: [
        {
          name: "Law Practice Management",
          url: "https://www.americanbar.org/groups/law_practice/"
        }
      ]
    },
    {
      id: "networking",
      title: "Professional Networking",
      description: "Build professional networks and industry connections",
      status: "recommended",
      skills: ["Networking", "Personal Branding", "Business Development"],
      resources: [
        {
          name: "Legal Networking Guide",
          url: "https://www.lawpracticetoday.org/article/networking-lawyers/"
        }
      ]
    }
  ]
};