import { RoadmapSection } from "@/types/roadmap";

export const writingFundamentalsSection: RoadmapSection = {
  title: "1. Writing Fundamentals",
  steps: [
    {
      id: "writing-basics",
      title: "Writing Basics",
      description: "Master the essential elements of effective writing",
      status: "required",
      skills: [
        "Grammar & Punctuation",
        "Sentence Structure",
        "Paragraph Flow",
        "Writing Style",
        "Proofreading"
      ],
      resources: [
        {
          name: "Grammarly Writing Handbook",
          url: "https://www.grammarly.com/handbook"
        },
        {
          name: "Hemingway Editor",
          url: "https://hemingwayapp.com/"
        }
      ]
    },
    {
      id: "copywriting-principles",
      title: "Copywriting Principles",
      description: "Learn the fundamental principles of persuasive copywriting",
      status: "required",
      skills: [
        "Headlines & Hooks",
        "Persuasive Writing",
        "Call to Action",
        "Emotional Triggers",
        "Brand Voice"
      ],
      resources: [
        {
          name: "Copyblogger Academy",
          url: "https://copyblogger.com/blog/"
        }
      ]
    }
  ]
};