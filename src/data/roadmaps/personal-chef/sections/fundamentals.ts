import { RoadmapSection } from "@/types/roadmap";

export const fundamentals: RoadmapSection = {
  title: "Culinary Fundamentals",
  steps: [
    {
      id: "culinary-basics",
      title: "Culinary Basics",
      description: "Master essential cooking techniques, knife skills, and kitchen safety.",
      status: "required",
      skills: ["Knife Skills", "Kitchen Safety", "Food Handling", "Basic Cooking Techniques"],
      resources: [
        {
          name: "Culinary Institute Fundamentals",
          url: "https://www.ciachef.edu/culinary-fundamentals/"
        },
        {
          name: "ServSafe Food Handler Certification",
          url: "https://www.servsafe.com/ServSafe-Food-Handler"
        }
      ]
    },
    {
      id: "nutrition-knowledge",
      title: "Nutrition Knowledge",
      description: "Understand nutritional principles, dietary requirements, and meal planning.",
      status: "required",
      skills: ["Nutrition Basics", "Dietary Planning", "Food Science", "Allergen Management"],
      resources: [
        {
          name: "Academy of Nutrition and Dietetics",
          url: "https://www.eatright.org/"
        }
      ]
    },
    {
      id: "menu-planning",
      title: "Menu Planning",
      description: "Learn to create balanced, seasonal menus and accommodate dietary restrictions.",
      status: "required",
      skills: ["Menu Development", "Recipe Creation", "Seasonal Planning", "Cost Management"],
      resources: [
        {
          name: "Professional Menu Planning Guide",
          url: "https://www.craftsy.com/post/menu-planning-guide/"
        }
      ]
    }
  ]
};