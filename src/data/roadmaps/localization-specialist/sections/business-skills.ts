import { RoadmapSection } from "@/types/roadmap";

export const businessSkills: RoadmapSection = {
  title: "Business and Project Management",
  steps: [
    {
      id: "ls-7",
      title: "Project Management",
      description: "Master project management skills specific to localization workflows and team coordination.",
      status: "required",
      skills: ["Project Planning", "Team Coordination", "Quality Assurance", "Timeline Management"],
      resources: [
        {
          name: "Localization Project Management",
          url: "https://www.pmi.org"
        }
      ]
    },
    {
      id: "ls-8",
      title: "Client Relations",
      description: "Develop skills in client communication, requirement gathering, and stakeholder management.",
      status: "recommended",
      skills: ["Client Communication", "Requirements Analysis", "Stakeholder Management", "Budget Planning"],
      resources: [
        {
          name: "Client Management Guide",
          url: "https://www.projectmanagement.com"
        }
      ]
    }
  ]
};