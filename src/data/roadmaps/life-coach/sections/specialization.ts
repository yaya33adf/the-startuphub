import { RoadmapSection } from "@/types/roadmap";

export const specialization: RoadmapSection = {
  title: "Coaching Specializations",
  steps: [
    {
      id: "personal-development",
      title: "Personal Development Coaching",
      description: "Specialize in helping clients achieve personal growth and self-improvement",
      skills: ["Self-awareness", "Personal Growth", "Life Balance", "Habit Formation"],
      status: "recommended"
    },
    {
      id: "career-coaching",
      title: "Career Coaching",
      description: "Help clients navigate career transitions and professional development",
      skills: ["Career Planning", "Professional Development", "Job Search Strategy", "Interview Preparation"],
      status: "optional"
    },
    {
      id: "relationship-coaching",
      title: "Relationship Coaching",
      description: "Focus on helping clients improve their relationships and communication",
      skills: ["Relationship Dynamics", "Conflict Resolution", "Boundary Setting", "Communication Patterns"],
      status: "optional"
    },
    {
      id: "wellness-coaching",
      title: "Wellness Coaching",
      description: "Guide clients in achieving their health and wellness goals",
      skills: ["Holistic Wellness", "Stress Management", "Work-Life Balance", "Healthy Habits"],
      status: "optional"
    }
  ]
};