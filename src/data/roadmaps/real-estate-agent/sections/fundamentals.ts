import { RoadmapSection } from "@/types/roadmap";

export const fundamentalsSection: RoadmapSection = {
  title: "Real Estate Fundamentals",
  steps: [
    {
      id: "re-basics",
      title: "Real Estate Basics",
      description: "Learn the fundamental concepts of real estate, including property types, market dynamics, and basic terminology.",
      skills: ["Property Types", "Market Analysis", "Real Estate Terms"],
      status: "required",
      resources: [
        {
          name: "National Association of Realtors - Getting Started",
          url: "https://www.nar.realtor/education"
        },
        {
          name: "Real Estate Express - Fundamentals",
          url: "https://www.realestateexpress.com/"
        }
      ]
    },
    {
      id: "licensing",
      title: "Licensing Requirements",
      description: "Understand and complete the necessary licensing requirements for your state/region.",
      skills: ["Pre-licensing Course", "State Laws", "License Exam Prep"],
      status: "required",
      resources: [
        {
          name: "State Real Estate Commission",
          url: "https://www.arello.org/regulatory-agencies/"
        }
      ]
    },
    {
      id: "legal",
      title: "Legal Knowledge",
      description: "Learn essential real estate laws, contracts, and regulations.",
      skills: ["Contract Law", "Property Law", "Fair Housing Laws"],
      status: "required",
      resources: [
        {
          name: "HUD Fair Housing Laws",
          url: "https://www.hud.gov/program_offices/fair_housing_equal_opp"
        }
      ]
    }
  ]
};