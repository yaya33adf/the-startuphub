import { RoadmapSection } from "@/types/roadmap";

export const business: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "practice-setup",
      title: "Practice Setup",
      description: "Learn how to establish and manage your health coaching practice.",
      status: "required",
      skills: ["Business Planning", "Legal Requirements", "Insurance"],
      resources: [
        {
          name: "Starting a Health Coaching Business",
          url: "https://www.healthcoachalliance.com/resources"
        }
      ]
    },
    {
      id: "marketing",
      title: "Marketing & Client Acquisition",
      description: "Develop strategies for attracting and retaining clients.",
      status: "recommended",
      skills: ["Digital Marketing", "Social Media", "Content Creation"],
      resources: [
        {
          name: "Marketing for Health Coaches",
          url: "https://www.healthcoachacademy.com/marketing"
        }
      ]
    },
    {
      id: "program-development",
      title: "Program Development",
      description: "Create effective coaching programs and packages.",
      status: "recommended",
      skills: ["Program Design", "Pricing Strategy", "Client Assessment"],
      resources: [
        {
          name: "Coaching Program Design",
          url: "https://www.wellcoaches.com/programs"
        }
      ]
    }
  ]
};