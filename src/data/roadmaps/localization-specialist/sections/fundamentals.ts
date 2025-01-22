import { RoadmapSection } from "@/types/roadmap";

export const fundamentals: RoadmapSection = {
  title: "Language and Cultural Fundamentals",
  steps: [
    {
      id: "ls-1",
      title: "Language Mastery",
      description: "Achieve advanced proficiency in at least two languages, with deep understanding of grammar, syntax, and idiomatic expressions.",
      status: "required",
      skills: ["Bilingual/Multilingual Proficiency", "Grammar", "Syntax", "Idiomatic Expressions"],
      resources: [
        {
          name: "Language Proficiency Tests",
          url: "https://www.languagetesting.com"
        },
        {
          name: "Advanced Language Learning Resources",
          url: "https://www.duolingo.com"
        }
      ]
    },
    {
      id: "ls-2",
      title: "Cultural Competence",
      description: "Develop deep understanding of cultural nuances, customs, and communication styles for target markets.",
      status: "required",
      skills: ["Cultural Awareness", "Cross-cultural Communication", "Local Customs", "Regional Variations"],
      resources: [
        {
          name: "Cross-Cultural Communication Guide",
          url: "https://www.commisceo-global.com/resources"
        }
      ]
    }
  ]
};