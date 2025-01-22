import { RoadmapSection } from "@/types/roadmap";

export const fundamentalsSection: RoadmapSection = {
  title: "Property Management Fundamentals",
  steps: [
    {
      id: "pm-basics",
      title: "Property Management Basics",
      description: "Learn the core concepts and responsibilities of property management",
      status: "required",
      skills: ["Property Types", "Industry Overview", "Legal Framework"],
      resources: [
        {
          name: "Property Management 101",
          url: "https://www.irem.org/learning/courses"
        }
      ]
    },
    {
      id: "legal-compliance",
      title: "Legal and Regulatory Compliance",
      description: "Understand real estate laws, regulations, and compliance requirements",
      status: "required",
      skills: ["Fair Housing Laws", "Landlord-Tenant Laws", "Building Codes", "Safety Regulations"],
      resources: [
        {
          name: "Fair Housing Laws Guide",
          url: "https://www.hud.gov/fairhousing"
        }
      ]
    },
    {
      id: "real-estate-basics",
      title: "Real Estate Fundamentals",
      description: "Master basic real estate concepts and market dynamics",
      status: "required",
      skills: ["Real Estate Terms", "Market Analysis", "Property Valuation"],
      resources: [
        {
          name: "Real Estate Principles",
          url: "https://www.nar.realtor/education"
        }
      ]
    }
  ]
};