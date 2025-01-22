import { RoadmapSection } from "@/types/roadmap";

export const fundamentals: RoadmapSection = {
  title: "Health & Wellness Fundamentals",
  steps: [
    {
      id: "nutrition-basics",
      title: "Nutrition Fundamentals",
      description: "Learn the basics of nutrition science, including macronutrients, micronutrients, and dietary guidelines.",
      status: "required",
      skills: ["Nutritional Science", "Meal Planning", "Dietary Guidelines"],
      resources: [
        {
          name: "Introduction to Human Nutrition",
          url: "https://www.coursera.org/learn/nutrition-health"
        },
        {
          name: "Dietary Guidelines",
          url: "https://www.dietaryguidelines.gov/"
        }
      ]
    },
    {
      id: "anatomy-physiology",
      title: "Anatomy & Physiology",
      description: "Understand human body systems and their functions to better guide clients.",
      status: "required",
      skills: ["Human Anatomy", "Body Systems", "Physical Health"],
      resources: [
        {
          name: "Human Anatomy & Physiology",
          url: "https://www.edx.org/learn/anatomy"
        }
      ]
    },
    {
      id: "wellness-principles",
      title: "Wellness Principles",
      description: "Master the fundamentals of holistic health and wellness approaches.",
      status: "required",
      skills: ["Holistic Health", "Wellness Theory", "Lifestyle Medicine"],
      resources: [
        {
          name: "Foundations of Wellness",
          url: "https://www.wellcoaches.com/resources"
        }
      ]
    }
  ]
};