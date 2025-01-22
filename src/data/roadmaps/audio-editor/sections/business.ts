import { RoadmapSection } from "@/types/roadmap";

export const businessSection: RoadmapSection = {
  title: "Business Skills",
  steps: [
    {
      id: "client-management",
      title: "Client Management",
      description: "Learn to work with clients and manage audio editing projects",
      status: "recommended",
      skills: [
        "Project Management",
        "Client Communication",
        "Time Management",
        "Pricing Strategies",
        "Delivery Standards"
      ],
      resources: [
        {
          name: "Freelance Audio Editor Guide",
          url: "https://www.voices.com/blog/audio-editing-career/"
        }
      ]
    },
    {
      id: "industry-standards",
      title: "Industry Standards",
      description: "Understand professional standards and best practices",
      status: "recommended",
      skills: [
        "File Management",
        "Quality Control",
        "Industry Formats",
        "Delivery Specifications",
        "Copyright Laws"
      ],
      resources: [
        {
          name: "Audio Industry Standards",
          url: "https://www.audiomediainternational.com/recording"
        }
      ]
    }
  ]
};