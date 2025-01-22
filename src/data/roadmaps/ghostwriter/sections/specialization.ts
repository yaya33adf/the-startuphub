import { RoadmapSection } from "@/types/roadmap";

export const specializationSection: RoadmapSection = {
  title: "3. Specialization",
  steps: [
    {
      id: "content-types",
      title: "Content Types",
      description: "Master different types of ghostwriting projects",
      status: "recommended",
      skills: [
        "Memoirs",
        "Business Books",
        "Self-Help Books",
        "Speeches",
        "Blog Posts"
      ],
      resources: [
        {
          name: "Types of Ghostwriting",
          url: "https://www.writersdigest.com/write-better-nonfiction/ghostwriting-basics"
        }
      ]
    },
    {
      id: "industry-knowledge",
      title: "Industry Knowledge",
      description: "Understand the ghostwriting industry and market",
      status: "recommended",
      skills: [
        "Market Research",
        "Industry Standards",
        "Pricing Strategies",
        "Legal Considerations",
        "Publishing Process"
      ],
      resources: [
        {
          name: "Ghostwriting Association",
          url: "https://www.ghostwriters.org/"
        }
      ]
    }
  ]
};