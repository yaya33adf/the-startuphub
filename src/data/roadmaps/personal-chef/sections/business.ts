import { RoadmapSection } from "@/types/roadmap";

export const business: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "business-setup",
      title: "Business Setup",
      description: "Establish your personal chef business structure and operations.",
      status: "required",
      skills: ["Business Planning", "Legal Requirements", "Insurance", "Licensing"],
      resources: [
        {
          name: "Personal Chef Business Guide",
          url: "https://www.uspca.com/business-guide"
        }
      ]
    },
    {
      id: "marketing-branding",
      title: "Marketing & Branding",
      description: "Develop your brand and marketing strategy.",
      status: "required",
      skills: ["Brand Development", "Social Media", "Portfolio Creation", "Networking"],
      resources: [
        {
          name: "Chef Marketing Essentials",
          url: "https://www.chefmarketing.com/"
        }
      ]
    },
    {
      id: "financial-management",
      title: "Financial Management",
      description: "Master pricing, budgeting, and financial planning.",
      status: "required",
      skills: ["Pricing Strategy", "Cost Control", "Budgeting", "Accounting"],
      resources: [
        {
          name: "Financial Management for Chefs",
          url: "https://www.culinaryfinance.com/"
        }
      ]
    }
  ]
};