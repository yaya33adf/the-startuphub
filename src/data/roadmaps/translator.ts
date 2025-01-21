import { JobRoadmap } from "@/types/roadmap";

export const translatorRoadmap: JobRoadmap = {
  title: "Multilingual Translator Roadmap",
  description: "A comprehensive guide to becoming a professional translator specializing in multiple languages, covering language mastery, translation techniques, specialization, and business development.",
  sections: [
    {
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
    },
    {
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
    },
    {
      title: "Language-Specific Specialization",
      steps: [
        {
          id: "spec-1",
          title: "Choose Language Pairs and Domains",
          description: "Specialize in specific language pairs and domains (legal, medical, technical, literary). Develop expertise in terminology for each language combination and field.",
          status: "recommended",
          skills: ["Domain Expertise", "Specialized Terminology", "Research Skills", "Language-Specific Knowledge"],
          resources: [
            {
              name: "TranslatorsCafe Specializations",
              url: "https://www.translatorscafe.com"
            },
            {
              name: "IAPTI - International Association of Professional Translators",
              url: "https://www.iapti.org"
            }
          ]
        },
        {
          id: "spec-2",
          title: "Certification for Multiple Languages",
          description: "Obtain relevant certifications for each language pair from recognized translation organizations to validate your expertise and increase credibility.",
          status: "recommended",
          skills: ["Professional Certification", "Industry Standards", "Language-Specific Qualifications"],
          resources: [
            {
              name: "American Translators Association",
              url: "https://www.atanet.org"
            },
            {
              name: "International Federation of Translators",
              url: "https://fit-ift.org"
            }
          ]
        }
      ]
    },
    {
      title: "Multilingual Business Development",
      steps: [
        {
          id: "biz-1",
          title: "Build a Multilingual Portfolio",
          description: "Create a strong portfolio showcasing your translation work across different language pairs and content types. Include samples for each language combination you work with.",
          status: "required",
          skills: ["Portfolio Management", "Sample Translations", "Language Pair Demonstration"],
          resources: [
            {
              name: "LinkedIn for Multilingual Professionals",
              url: "https://www.linkedin.com"
            },
            {
              name: "Translation Portfolio Guidelines",
              url: "https://www.translationdirectory.com/articles/portfolio_development.php"
            }
          ]
        },
        {
          id: "biz-2",
          title: "International Marketing",
          description: "Establish your online presence in multiple languages, join international professional associations, and network with translators and clients across different regions.",
          status: "recommended",
          skills: ["International Marketing", "Networking", "Social Media", "Cross-Cultural Business"],
          resources: [
            {
              name: "International Federation of Translators",
              url: "https://fit-ift.org"
            },
            {
              name: "Global Translation Communities",
              url: "https://www.proz.com"
            }
          ]
        },
        {
          id: "biz-3",
          title: "Multilingual Business Operations",
          description: "Set up your translation business to handle multiple language pairs, including pricing strategies, project management, and client communication protocols for different cultures.",
          status: "optional",
          skills: ["Project Management", "Client Relations", "Business Planning", "International Operations"],
          resources: [
            {
              name: "Multilingual Business Guide",
              url: "https://www.translationdirectory.com"
            },
            {
              name: "International Payment Solutions",
              url: "https://wise.com/business"
            }
          ]
        }
      ]
    }
  ]
};