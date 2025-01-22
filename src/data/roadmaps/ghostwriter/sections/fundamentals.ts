import { RoadmapSection } from "@/types/roadmap";

export const fundamentalsSection: RoadmapSection = {
  title: "1. Writing Fundamentals",
  steps: [
    {
      id: "writing-basics",
      title: "Writing Basics",
      description: "Master essential writing skills and techniques",
      status: "required",
      skills: [
        "Grammar & Punctuation",
        "Style & Voice",
        "Narrative Structure",
        "Research Skills",
        "Editing & Proofreading"
      ],
      resources: [
        {
          name: "Grammarly Writing Handbook",
          url: "https://www.grammarly.com/handbook"
        },
        {
          name: "Purdue Online Writing Lab",
          url: "https://owl.purdue.edu/owl/purdue_owl.html"
        }
      ]
    },
    {
      id: "storytelling",
      title: "Storytelling Techniques",
      description: "Learn to craft compelling narratives in different voices",
      status: "required",
      skills: [
        "Character Development",
        "Plot Structure",
        "Voice Adaptation",
        "Scene Setting",
        "Dialogue Writing"
      ],
      resources: [
        {
          name: "MasterClass Writing",
          url: "https://www.masterclass.com/categories/writing"
        }
      ]
    }
  ]
};