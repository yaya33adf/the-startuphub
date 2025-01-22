import type { RoadmapSection } from "@/types/roadmap";

export const specializationSection: RoadmapSection = {
  title: "Legal Specialization",
  steps: [
    {
      id: "practice-areas",
      title: "Choose Practice Areas",
      description: "Select and develop expertise in specific legal domains",
      status: "required",
      skills: ["Corporate Law", "Intellectual Property", "Contract Law"],
      resources: [
        {
          name: "Legal Practice Areas Guide",
          url: "https://www.lawcrossing.com/article/900042904/List-of-Legal-Practice-Areas/"
        }
      ]
    },
    {
      id: "industry-knowledge",
      title: "Industry Knowledge",
      description: "Develop understanding of specific industries and their legal needs",
      status: "recommended",
      skills: ["Industry Analysis", "Regulatory Compliance", "Risk Assessment"],
      resources: [
        {
          name: "Industry Legal Updates",
          url: "https://www.law360.com/industries"
        }
      ]
    },
    {
      id: "consulting-skills",
      title: "Consulting Skills",
      description: "Develop advisory and consulting capabilities",
      status: "required",
      skills: ["Problem Solving", "Strategic Thinking", "Business Acumen"],
      resources: [
        {
          name: "Legal Consulting Best Practices",
          url: "https://www.consultancy.org/consulting-industry/legal"
        }
      ]
    }
  ]
};