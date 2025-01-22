import { RoadmapSection } from "@/types/roadmap";

export const specialization: RoadmapSection = {
  title: "Style Specialization",
  steps: [
    {
      id: "wardrobe-building",
      title: "Wardrobe Building & Capsule Creation",
      description: "Learn to create versatile wardrobes and capsule collections for clients.",
      status: "required",
      skills: ["Wardrobe Planning", "Capsule Creation", "Outfit Coordination"],
      resources: [
        {
          name: "Capsule Wardrobe Guide",
          url: "https://www.capsulewardrobe.com"
        }
      ]
    },
    {
      id: "personal-shopping",
      title: "Personal Shopping Techniques",
      description: "Master the art of personal shopping, including budget management and retailer relationships.",
      status: "required",
      skills: ["Budget Management", "Retail Navigation", "Brand Knowledge"],
      resources: [
        {
          name: "Personal Shopping Masterclass",
          url: "https://www.personalshopping.edu"
        }
      ]
    },
    {
      id: "styling-occasions",
      title: "Occasion-Specific Styling",
      description: "Develop expertise in styling for different occasions and lifestyles.",
      status: "recommended",
      skills: ["Event Styling", "Lifestyle Analysis", "Dress Codes"],
      resources: [
        {
          name: "Event Styling Guide",
          url: "https://www.eventstyling.com"
        }
      ]
    }
  ]
};