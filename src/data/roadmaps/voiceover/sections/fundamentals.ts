import { RoadmapSection } from "@/types/roadmap";

export const fundamentalsSection: RoadmapSection = {
  title: "Voice Over Fundamentals",
  steps: [
    {
      id: "vo-basics",
      title: "Voice Acting Basics",
      description: "Learn the fundamentals of voice acting and vocal performance",
      skills: ["Vocal warm-ups", "Breathing techniques", "Voice projection", "Articulation"],
      status: "required",
      resources: [
        {
          name: "Introduction to Voice Acting",
          url: "https://www.masterclass.com/articles/voice-acting-guide"
        }
      ]
    },
    {
      id: "vocal-health",
      title: "Vocal Health & Maintenance",
      description: "Understand how to maintain and protect your voice",
      skills: ["Vocal hygiene", "Voice rest", "Hydration", "Diet management"],
      status: "required",
      resources: [
        {
          name: "Vocal Health Guide",
          url: "https://www.voicecouncil.com/category/vocal-health"
        }
      ]
    },
    {
      id: "script-reading",
      title: "Script Analysis & Interpretation",
      description: "Learn how to analyze and interpret various types of scripts",
      skills: ["Script marking", "Character analysis", "Emotional interpretation", "Timing"],
      status: "required"
    }
  ]
};