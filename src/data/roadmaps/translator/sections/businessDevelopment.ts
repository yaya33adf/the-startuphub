import { RoadmapSection } from "@/types/roadmap";

export const businessDevelopmentSection: RoadmapSection = {
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
};