import { RoadmapSection } from "@/types/roadmap";

export const fundamentals: RoadmapSection = {
  title: "Coaching Fundamentals",
  steps: [
    {
      id: "coaching-principles",
      title: "Core Coaching Principles",
      description: "Learn the fundamental principles and ethics of professional coaching",
      skills: ["Active Listening", "Empathy", "Ethics", "Confidentiality"],
      status: "required",
      resources: [
        {
          name: "International Coach Federation (ICF) Core Competencies",
          url: "https://coachingfederation.org/core-competencies"
        }
      ]
    },
    {
      id: "psychology-basics",
      title: "Psychology Fundamentals",
      description: "Understand basic psychological concepts and human behavior",
      skills: ["Behavioral Psychology", "Motivation Theory", "Emotional Intelligence"],
      status: "required"
    },
    {
      id: "communication-skills",
      title: "Communication Skills",
      description: "Develop advanced communication and questioning techniques",
      skills: ["Powerful Questioning", "Clear Communication", "Non-verbal Communication", "Feedback Techniques"],
      status: "required"
    },
    {
      id: "goal-setting",
      title: "Goal Setting & Action Planning",
      description: "Master the art of helping clients set and achieve meaningful goals",
      skills: ["SMART Goals", "Action Planning", "Progress Tracking", "Accountability"],
      status: "required"
    }
  ]
};