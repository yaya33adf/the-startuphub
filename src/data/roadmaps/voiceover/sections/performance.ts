import { RoadmapSection } from "@/types/roadmap";

export const performanceSection: RoadmapSection = {
  title: "Performance Skills",
  steps: [
    {
      id: "script-analysis",
      title: "Script Analysis & Interpretation",
      description: "Develop skills in analyzing scripts and delivering appropriate performances.",
      status: "required",
      skills: ["Script Analysis", "Character Development", "Emotional Range"],
      resources: [
        {
          name: "Script Analysis for Voice Actors",
          url: "https://www.voiceactingmastery.com/scripts"
        }
      ]
    },
    {
      id: "voice-styles",
      title: "Voice Styles & Characters",
      description: "Learn to create and maintain different voice styles and characters.",
      status: "required",
      skills: ["Character Voices", "Accent Work", "Style Adaptation"],
      resources: [
        {
          name: "Character Voice Development",
          url: "https://www.voiceacting.com/characters"
        }
      ]
    }
  ]
};