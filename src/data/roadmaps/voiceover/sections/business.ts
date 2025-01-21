import { RoadmapSection } from "@/types/roadmap";

export const businessSection: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "demo-reel",
      title: "Demo Reel Creation",
      description: "Create professional demo reels for different voice-over genres.",
      status: "required",
      skills: ["Demo Production", "Genre Selection", "Personal Branding"],
      resources: [
        {
          name: "Demo Reel Production Guide",
          url: "https://www.voices.com/demo-guide"
        }
      ]
    },
    {
      id: "business-skills",
      title: "Business Skills",
      description: "Learn marketing, networking, and managing your voice-over business.",
      status: "required",
      skills: ["Marketing", "Client Relations", "Rate Setting", "Contract Negotiation"],
      resources: [
        {
          name: "Voice-Over Business Guide",
          url: "https://www.voicecoach.com/business"
        }
      ]
    }
  ]
};