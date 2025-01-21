import { JobRoadmap } from "@/types/roadmap";

export const translatorRoadmap: JobRoadmap = {
  title: "Translator Roadmap",
  description: "A comprehensive guide to becoming a professional translator, covering language mastery, translation tools, specialization, and business skills.",
  sections: [
    {
      title: "Language Foundation",
      steps: [
        {
          id: "lang-1",
          title: "Master Source and Target Languages",
          description: "Achieve advanced proficiency (C1-C2 level) in both your source and target languages. Focus on grammar, vocabulary, idioms, and cultural nuances.",
          status: "required",
          skills: ["Language Proficiency", "Grammar", "Vocabulary", "Cultural Knowledge"],
          resources: [
            {
              name: "Common European Framework of Reference for Languages (CEFR)",
              url: "https://www.coe.int/en/web/common-european-framework-reference-languages"
            },
            {
              name: "Duolingo",
              url: "https://www.duolingo.com"
            }
          ]
        },
        {
          id: "lang-2",
          title: "Cultural Immersion",
          description: "Immerse yourself in the cultures of both languages through media, literature, and if possible, living abroad or language exchange programs.",
          status: "recommended",
          skills: ["Cultural Awareness", "Cross-cultural Communication"],
          resources: [
            {
              name: "Language Exchange - Tandem",
              url: "https://www.tandem.net"
            }
          ]
        }
      ]
    },
    {
      title: "Translation Skills",
      steps: [
        {
          id: "trans-1",
          title: "Translation Theory and Practice",
          description: "Learn fundamental translation theories, techniques, and best practices. Understand different translation approaches and when to use them.",
          status: "required",
          skills: ["Translation Theory", "Translation Techniques", "Proofreading"],
          resources: [
            {
              name: "ProZ.com Translation Training",
              url: "https://www.proz.com/translator-training"
            }
          ]
        },
        {
          id: "trans-2",
          title: "CAT Tools Mastery",
          description: "Learn to use Computer-Assisted Translation (CAT) tools like SDL Trados, MemoQ, or OmegaT to improve efficiency and consistency.",
          status: "required",
          skills: ["SDL Trados", "MemoQ", "OmegaT", "Translation Memory"],
          resources: [
            {
              name: "SDL Trados Tutorials",
              url: "https://www.trados.com/learning"
            }
          ]
        }
      ]
    },
    {
      title: "Specialization",
      steps: [
        {
          id: "spec-1",
          title: "Choose Your Niche",
          description: "Specialize in specific fields like legal, medical, technical, or literary translation. Develop expertise in your chosen domain's terminology.",
          status: "recommended",
          skills: ["Domain Expertise", "Specialized Terminology", "Research Skills"],
          resources: [
            {
              name: "TranslatorsCafe Specializations Guide",
              url: "https://www.translatorscafe.com"
            }
          ]
        },
        {
          id: "spec-2",
          title: "Certification and Accreditation",
          description: "Obtain relevant certifications from recognized translation organizations to validate your expertise and increase credibility.",
          status: "recommended",
          skills: ["Professional Certification", "Industry Standards"],
          resources: [
            {
              name: "American Translators Association",
              url: "https://www.atanet.org"
            }
          ]
        }
      ]
    },
    {
      title: "Business Development",
      steps: [
        {
          id: "biz-1",
          title: "Build Your Portfolio",
          description: "Create a strong portfolio showcasing your translation work across different types of content and specializations.",
          status: "required",
          skills: ["Portfolio Management", "Sample Translations"],
          resources: [
            {
              name: "LinkedIn for Translators",
              url: "https://www.linkedin.com"
            }
          ]
        },
        {
          id: "biz-2",
          title: "Marketing and Networking",
          description: "Establish your online presence, join professional associations, and network with other translators and potential clients.",
          status: "recommended",
          skills: ["Marketing", "Networking", "Social Media"],
          resources: [
            {
              name: "International Federation of Translators",
              url: "https://fit-ift.org"
            }
          ]
        },
        {
          id: "biz-3",
          title: "Business Operations",
          description: "Set up your translation business, including pricing strategies, project management, and client communication protocols.",
          status: "optional",
          skills: ["Project Management", "Client Relations", "Business Planning"],
          resources: [
            {
              name: "Freelance Translators Guide",
              url: "https://www.translationdirectory.com"
            }
          ]
        }
      ]
    }
  ]
};