import { RoadmapSection } from "@/types/roadmap";

export const contentStrategySection: RoadmapSection = {
  title: "2. Content Strategy",
  steps: [
    {
      id: "content-planning",
      title: "Content Planning",
      description: "Develop effective content planning strategies",
      status: "required",
      skills: [
        "Editorial Calendar",
        "Content Research",
        "Keyword Research",
        "Topic Clustering",
        "Content Mapping"
      ],
      resources: [
        {
          name: "HubSpot Content Strategy Course",
          url: "https://academy.hubspot.com/courses/content-strategy"
        }
      ]
    },
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      description: "Master SEO techniques for blog content",
      status: "required",
      skills: [
        "Keyword Optimization",
        "Meta Descriptions",
        "Internal Linking",
        "Image Optimization",
        "URL Structure"
      ],
      resources: [
        {
          name: "Moz SEO Learning Center",
          url: "https://moz.com/learn/seo"
        }
      ]
    }
  ]
};