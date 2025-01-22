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
      id: "blogging-principles",
      title: "Blogging Principles",
      description: "Learn the fundamental principles of blog writing",
      status: "required",
      skills: [
        "Headlines & Hooks",
        "Blog Post Structure",
        "Voice & Tone",
        "Storytelling",
        "Audience Engagement"
      ],
      resources: [
        {
          name: "ProBlogger",
          url: "https://problogger.com/blog/"
        }
      ]
    }
  ]
};