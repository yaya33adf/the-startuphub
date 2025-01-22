import { RoadmapSection } from "@/types/roadmap";

export const clientManagement: RoadmapSection = {
  title: "Client Management",
  steps: [
    {
      id: "client-onboarding",
      title: "Client Onboarding Process",
      description: "Develop an effective system for bringing on new clients",
      skills: ["Initial Assessment", "Expectation Setting", "Agreement Creation", "Program Structure"],
      status: "required"
    },
    {
      id: "session-management",
      title: "Coaching Session Management",
      description: "Learn to structure and conduct effective coaching sessions",
      skills: ["Session Planning", "Time Management", "Progress Tracking", "Documentation"],
      status: "required"
    },
    {
      id: "relationship-building",
      title: "Client Relationship Building",
      description: "Build and maintain strong professional relationships with clients",
      skills: ["Trust Building", "Professional Boundaries", "Long-term Engagement", "Client Support"],
      status: "required"
    }
  ]
};