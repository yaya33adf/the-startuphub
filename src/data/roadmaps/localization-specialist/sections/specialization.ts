import { RoadmapSection } from "@/types/roadmap";

export const specialization: RoadmapSection = {
  title: "Specialization Areas",
  steps: [
    {
      id: "ls-5",
      title: "Industry-Specific Localization",
      description: "Develop expertise in specific industries such as software, gaming, medical, or legal localization.",
      status: "recommended",
      skills: ["Software Localization", "Game Localization", "Medical Translation", "Legal Translation"],
      resources: [
        {
          name: "Software Localization Guide",
          url: "https://www.gala-global.org/resources"
        }
      ]
    },
    {
      id: "ls-6",
      title: "Multimedia Localization",
      description: "Learn to handle localization for various media types including video, audio, and graphics.",
      status: "optional",
      skills: ["Subtitle Creation", "Voice-over Direction", "Graphics Localization", "Video Editing"],
      resources: [
        {
          name: "Multimedia Localization Best Practices",
          url: "https://www.localizationinstitute.com"
        }
      ]
    }
  ]
};