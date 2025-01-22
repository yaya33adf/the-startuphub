import { RoadmapSection } from "@/types/roadmap";

export const coaching: RoadmapSection = {
  title: "Coaching Skills & Methodologies",
  steps: [
    {
      id: "coaching-fundamentals",
      title: "Coaching Fundamentals",
      description: "Learn essential coaching skills and methodologies for effective client relationships.",
      status: "required",
      skills: ["Active Listening", "Motivational Interviewing", "Goal Setting"],
      resources: [
        {
          name: "Health Coach Certification",
          url: "https://www.nationalboardofhealthandwellness.org/"
        }
      ]
    },
    {
      id: "behavior-change",
      title: "Behavior Change Techniques",
      description: "Master strategies for helping clients create lasting lifestyle changes.",
      status: "required",
      skills: ["Behavior Modification", "Habit Formation", "Change Psychology"],
      resources: [
        {
          name: "Behavior Change Strategies",
          url: "https://www.psychologytoday.com/health"
        }
      ]
    },
    {
      id: "communication",
      title: "Communication Skills",
      description: "Develop advanced communication skills for effective coaching sessions.",
      status: "required",
      skills: ["Empathetic Communication", "Conflict Resolution", "Client Relations"],
      resources: [
        {
          name: "Effective Health Communication",
          url: "https://www.cdc.gov/healthliteracy/"
        }
      ]
    }
  ]
};