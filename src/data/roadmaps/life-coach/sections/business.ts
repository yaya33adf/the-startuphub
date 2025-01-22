import { RoadmapSection } from "@/types/roadmap";

export const business: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "business-setup",
      title: "Coaching Business Setup",
      description: "Establish your coaching practice as a professional business",
      skills: ["Business Planning", "Legal Requirements", "Insurance", "Professional Registration"],
      status: "required"
    },
    {
      id: "marketing",
      title: "Marketing & Branding",
      description: "Develop your coaching brand and marketing strategy",
      skills: ["Personal Branding", "Digital Marketing", "Content Creation", "Social Media"],
      status: "required"
    },
    {
      id: "online-presence",
      title: "Online Coaching Presence",
      description: "Build and maintain a professional online presence",
      skills: ["Website Development", "Virtual Coaching", "Online Tools", "Digital Resources"],
      status: "recommended"
    },
    {
      id: "business-growth",
      title: "Practice Growth & Scaling",
      description: "Strategies for growing and scaling your coaching practice",
      skills: ["Business Development", "Program Creation", "Workshop Facilitation", "Group Coaching"],
      status: "recommended"
    }
  ]
};