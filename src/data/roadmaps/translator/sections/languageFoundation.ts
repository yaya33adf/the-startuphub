import { RoadmapSection } from "@/types/roadmap";

export const languageFoundationSection: RoadmapSection = {
  title: "Language Foundation",
  steps: [
    {
      id: "lang-1",
      title: "Master Multiple Languages",
      description: "Achieve advanced proficiency (C1-C2 level) in at least two languages besides your native tongue. Focus on grammar, vocabulary, idioms, and cultural nuances for each language pair.",
      status: "required",
      skills: ["Language Proficiency", "Grammar", "Vocabulary", "Cultural Knowledge"],
      resources: [
        {
          name: "Common European Framework of Reference for Languages (CEFR)",
          url: "https://www.coe.int/en/web/common-european-framework-reference-languages"
        },
        {
          name: "Language Testing International",
          url: "https://www.languagetesting.com"
        }
      ]
    },
    {
      id: "lang-2",
      title: "Cultural Immersion",
      description: "Immerse yourself in the cultures of your working languages through media, literature, and if possible, living abroad or participating in language exchange programs for each language.",
      status: "recommended",
      skills: ["Cultural Awareness", "Cross-cultural Communication", "Regional Knowledge"],
      resources: [
        {
          name: "Language Exchange - Tandem",
          url: "https://www.tandem.net"
        },
        {
          name: "Cultural Studies Resources",
          url: "https://www.culturalstudies.net"
        }
      ]
    }
  ]
};