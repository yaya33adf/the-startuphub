import { RoadmapSection } from "@/types/roadmap";

export const performanceSection: RoadmapSection = {
  title: "Performance Skills",
  steps: [
    {
      id: "voice-styles",
      title: "Voice Styles & Characters",
      description: "Develop various voice styles and character performances",
      skills: ["Character voices", "Accents", "Tone variation", "Emotional range"],
      status: "required"
    },
    {
      id: "commercial-vo",
      title: "Commercial Voice Over",
      description: "Master commercial voice over techniques",
      skills: ["Hard sell", "Soft sell", "Timing", "Brand voice"],
      status: "recommended",
      resources: [
        {
          name: "Commercial VO Guide",
          url: "https://www.voices.com/blog/commercial-voice-over/"
        }
      ]
    },
    {
      id: "narration",
      title: "Narration Techniques",
      description: "Learn various narration styles and techniques",
      skills: ["Audiobook narration", "Documentary style", "E-learning", "Corporate narration"],
      status: "recommended"
    }
  ]
};