import { RoadmapSection } from "@/types/roadmap";

export const businessSkillsSection: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "marketing",
      title: "Marketing and Promotion",
      description: "Learn effective marketing strategies for properties and your services.",
      skills: ["Digital Marketing", "Social Media", "Property Photography"],
      status: "required",
      resources: [
        {
          name: "Real Estate Marketing Institute",
          url: "https://www.remi.today/"
        }
      ]
    },
    {
      id: "client-management",
      title: "Client Relationship Management",
      description: "Develop strong client relationship and communication skills.",
      skills: ["Communication", "Negotiation", "Client Service"],
      status: "required",
      resources: [
        {
          name: "NAR - Client Relations Guide",
          url: "https://www.nar.realtor/client-relationship-guide"
        }
      ]
    },
    {
      id: "business-operations",
      title: "Business Operations",
      description: "Master the operational aspects of running a real estate business.",
      skills: ["Time Management", "Financial Planning", "Lead Generation"],
      status: "recommended",
      resources: [
        {
          name: "Real Estate Business Planning",
          url: "https://www.thebalancesmb.com/real-estate-business-plan-2866432"
        }
      ]
    }
  ]
};