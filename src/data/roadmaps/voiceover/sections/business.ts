import { RoadmapSection } from "@/types/roadmap";

export const businessSection: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "vo-business",
      title: "Business Fundamentals",
      description: "Establish your voice over business",
      skills: ["Business planning", "Pricing strategy", "Marketing", "Brand development"],
      status: "required",
      resources: [
        {
          name: "Voice Over Business Guide",
          url: "https://www.voices.com/blog/voice-over-business/"
        }
      ]
    },
    {
      id: "portfolio",
      title: "Demo Reel & Portfolio",
      description: "Create and maintain a professional demo reel",
      skills: ["Demo production", "Portfolio curation", "Website creation", "Social media presence"],
      status: "required"
    },
    {
      id: "networking",
      title: "Industry Networking",
      description: "Build professional relationships in the industry",
      skills: ["Online platforms", "Industry events", "Agent relationships", "Collaboration"],
      status: "recommended"
    }
  ]
};