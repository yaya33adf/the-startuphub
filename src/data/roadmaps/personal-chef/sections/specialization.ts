import { RoadmapSection } from "@/types/roadmap";

export const specialization: RoadmapSection = {
  title: "Culinary Specializations",
  steps: [
    {
      id: "cuisine-specialization",
      title: "Cuisine Specialization",
      description: "Develop expertise in specific cuisines and cooking styles.",
      status: "recommended",
      skills: ["International Cuisines", "Regional Cooking", "Fusion Cuisine", "Traditional Methods"],
      resources: [
        {
          name: "World Culinary Arts",
          url: "https://www.worldculinaryarts.org/"
        }
      ]
    },
    {
      id: "dietary-specialization",
      title: "Dietary Specialization",
      description: "Master cooking for specific dietary needs and restrictions.",
      status: "recommended",
      skills: ["Vegan/Vegetarian", "Gluten-Free", "Keto", "Paleo", "Food Allergies"],
      resources: [
        {
          name: "Special Diets Resource Center",
          url: "https://www.foodallergy.org/resources"
        }
      ]
    },
    {
      id: "advanced-techniques",
      title: "Advanced Culinary Techniques",
      description: "Learn advanced cooking methods and presentation skills.",
      status: "optional",
      skills: ["Molecular Gastronomy", "Food Styling", "Plating", "Wine Pairing"],
      resources: [
        {
          name: "Advanced Culinary Techniques",
          url: "https://www.masterclass.com/culinary-arts"
        }
      ]
    }
  ]
};