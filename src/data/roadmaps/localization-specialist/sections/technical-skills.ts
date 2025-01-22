import { RoadmapSection } from "@/types/roadmap";

export const technicalSkills: RoadmapSection = {
  title: "Technical Skills",
  steps: [
    {
      id: "ls-3",
      title: "Localization Tools",
      description: "Master industry-standard localization and translation management tools.",
      status: "required",
      skills: ["CAT Tools", "SDL Trados", "MemoQ", "Translation Memory Systems"],
      resources: [
        {
          name: "SDL Trados Tutorial",
          url: "https://www.sdltrados.com/learning"
        },
        {
          name: "MemoQ Certification",
          url: "https://www.memoq.com/training"
        }
      ]
    },
    {
      id: "ls-4",
      title: "Content Management Systems",
      description: "Learn to work with various CMS platforms and understand basic HTML/CSS for content localization.",
      status: "recommended",
      skills: ["CMS Platforms", "Basic HTML", "CSS", "File Management"],
      resources: [
        {
          name: "Web Content Management Basics",
          url: "https://www.w3schools.com"
        }
      ]
    }
  ]
};