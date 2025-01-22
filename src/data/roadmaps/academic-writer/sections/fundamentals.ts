import { RoadmapSection } from '@/types/roadmap';

export const fundamentals: RoadmapSection = {
  title: "Academic Writing Fundamentals",
  steps: [
    {
      id: "academic-basics",
      title: "Academic Writing Basics",
      description: "Master the foundational elements of academic writing",
      skills: [
        "Academic writing style",
        "Formal language usage",
        "Academic tone and voice",
        "Paragraph structure",
        "Citation styles (APA, MLA, Chicago)",
      ],
      status: "required",
      resources: [
        {
          name: "Purdue OWL Writing Resources",
          url: "https://owl.purdue.edu/owl/purdue_owl.html"
        },
        {
          name: "Academic Phrasebank",
          url: "https://www.phrasebank.manchester.ac.uk/"
        }
      ]
    },
    {
      id: "grammar-mechanics",
      title: "Grammar and Mechanics",
      description: "Develop strong grammar and mechanical writing skills",
      skills: [
        "Advanced grammar",
        "Punctuation",
        "Sentence structure",
        "Academic vocabulary",
        "Editing and proofreading"
      ],
      status: "required",
      resources: [
        {
          name: "Grammarly Academic Writing Resources",
          url: "https://www.grammarly.com/blog/category/handbook/"
        }
      ]
    }
  ]
};