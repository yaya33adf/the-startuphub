import { RoadmapSection } from "@/types/roadmap";

export const technicalSection: RoadmapSection = {
  title: "Technical Skills",
  steps: [
    {
      id: "recording-equipment",
      title: "Recording Equipment",
      description: "Learn about microphones, audio interfaces, and setting up a home studio.",
      status: "required",
      skills: ["Microphone Technique", "Audio Interface Setup", "Studio Acoustics"],
      resources: [
        {
          name: "Home Studio Setup Guide",
          url: "https://www.soundonsound.com/studio"
        }
      ]
    },
    {
      id: "audio-software",
      title: "Audio Software",
      description: "Master DAWs and audio editing software for professional recordings.",
      status: "required",
      skills: ["DAW Proficiency", "Audio Editing", "Noise Reduction"],
      resources: [
        {
          name: "Audio Production Basics",
          url: "https://www.audioskills.com/production"
        }
      ]
    }
  ]
};