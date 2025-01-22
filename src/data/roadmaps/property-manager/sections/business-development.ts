import { RoadmapSection } from "@/types/roadmap";

export const businessDevelopmentSection: RoadmapSection = {
  title: "Business Development and Technology",
  steps: [
    {
      id: "technology",
      title: "Property Management Software",
      description: "Master essential property management software and tools",
      status: "required",
      skills: ["Property Management Software", "Accounting Software", "Maintenance Systems"],
      resources: [
        {
          name: "Property Management Technology Guide",
          url: "https://www.propertymanager.com/technology"
        }
      ]
    },
    {
      id: "marketing",
      title: "Marketing and Advertising",
      description: "Learn property marketing and advertising strategies",
      status: "recommended",
      skills: ["Property Listings", "Digital Marketing", "Photography", "Virtual Tours"],
      resources: [
        {
          name: "Property Marketing Strategies",
          url: "https://www.nar.realtor/marketing"
        }
      ]
    },
    {
      id: "business-growth",
      title: "Business Growth and Networking",
      description: "Develop business growth and networking strategies",
      status: "recommended",
      skills: ["Portfolio Growth", "Professional Networking", "Industry Associations"],
      resources: [
        {
          name: "Property Management Business Growth",
          url: "https://www.irem.org/career-development"
        }
      ]
    }
  ]
};