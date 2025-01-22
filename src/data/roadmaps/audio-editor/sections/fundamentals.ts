import { RoadmapSection } from "@/types/roadmap";

export const fundamentalsSection: RoadmapSection = {
  title: "Audio Editing Fundamentals",
  steps: [
    {
      id: "audio-basics",
      title: "Audio Basics",
      description: "Learn the fundamental concepts of digital audio and sound engineering",
      status: "required",
      skills: [
        "Digital Audio Fundamentals",
        "Sound Waves",
        "Frequency Spectrum",
        "Sample Rate",
        "Bit Depth"
      ],
      resources: [
        {
          name: "Digital Audio Fundamentals Course",
          url: "https://www.coursera.org/learn/audio-engineering"
        },
        {
          name: "Understanding Sound Waves",
          url: "https://www.soundonsound.com/techniques/science-sound"
        }
      ]
    },
    {
      id: "daw-basics",
      title: "Digital Audio Workstation (DAW)",
      description: "Master the basics of professional audio editing software",
      status: "required",
      skills: [
        "Pro Tools",
        "Logic Pro",
        "Audacity",
        "Adobe Audition",
        "Reaper"
      ],
      resources: [
        {
          name: "Pro Tools Essential Training",
          url: "https://www.linkedin.com/learning/pro-tools-essential-training"
        },
        {
          name: "Audacity Basics Guide",
          url: "https://manual.audacityteam.org/quick_help.html"
        }
      ]
    }
  ]
};