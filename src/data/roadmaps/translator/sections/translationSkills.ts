import { RoadmapSection } from "@/types/roadmap";

export const translationSkillsSection: RoadmapSection = {
  title: "Translation Skills",
  steps: [
    {
      id: "trans-1",
      title: "Translation Theory and Practice",
      description: "Learn fundamental translation theories, techniques, and best practices for multiple language combinations. Understand different translation approaches and when to use them.",
      status: "required",
      skills: ["Translation Theory", "Translation Techniques", "Proofreading", "Language Pairing"],
      resources: [
        {
          name: "ProZ.com Translation Training",
          url: "https://www.proz.com/translator-training"
        },
        {
          name: "Multilingual Translation Resources",
          url: "https://www.multilingual.com"
        }
      ]
    },
    {
      id: "trans-2",
      title: "CAT Tools and Technology",
      description: "Master Computer-Assisted Translation (CAT) tools that support multiple languages, such as SDL Trados, MemoQ, or OmegaT. Learn to manage translation memories for different language pairs.",
      status: "required",
      skills: ["SDL Trados", "MemoQ", "OmegaT", "Translation Memory Management"],
      resources: [
        {
          name: "SDL Trados Tutorials",
          url: "https://www.trados.com/learning"
        },
        {
          name: "MemoQ Certification",
          url: "https://www.memoq.com/certification"
        }
      ]
    }
  ]
};