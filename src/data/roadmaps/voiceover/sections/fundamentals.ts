import { RoadmapSection } from "@/types/roadmap";

export const fundamentalsSection: RoadmapSection = {
  title: "Voice Fundamentals",
  steps: [
    {
      id: "voice-anatomy",
      title: "Voice Anatomy & Health",
      description: "Learn about vocal anatomy, breathing techniques, and maintaining vocal health.",
      status: "required",
      skills: ["Breathing Control", "Vocal Hygiene", "Voice Anatomy"],
      resources: [
        {
          name: "Voice Anatomy for Voice Actors",
          url: "https://www.voiceacting.com/anatomy"
        },
        {
          name: "Vocal Health Guidelines",
          url: "https://www.voicecouncil.com/health"
        }
      ]
    },
    {
      id: "voice-techniques",
      title: "Voice Techniques",
      description: "Master essential voice techniques including pitch, tone, and modulation.",
      status: "required",
      skills: ["Pitch Control", "Tone Modulation", "Articulation", "Pronunciation"],
      resources: [
        {
          name: "Voice-Over Technique Masterclass",
          url: "https://www.masterclass.com/voiceover"
        }
      ]
    }
  ]
};