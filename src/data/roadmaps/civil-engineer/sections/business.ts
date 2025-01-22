import { RoadmapSection } from '@/types/roadmap';

export const business: RoadmapSection = {
  title: "Business and Professional Development",
  steps: [
    {
      id: "project-management",
      title: "Project Management",
      description: "Learn to manage civil engineering projects effectively",
      status: "recommended",
      skills: ["Project Planning", "Cost Estimation", "Schedule Management", "Risk Management"],
      resources: [
        {
          name: "Project Management for Engineers",
          url: "https://www.pmi.org/learning/training-development"
        }
      ]
    },
    {
      id: "regulations",
      title: "Regulations and Standards",
      description: "Understanding building codes and regulations",
      status: "required",
      skills: ["Building Codes", "Environmental Regulations", "Safety Standards", "Contract Management"],
      resources: [
        {
          name: "Building Codes and Standards",
          url: "https://www.iccsafe.org/"
        }
      ]
    },
    {
      id: "professional-development",
      title: "Professional Development",
      description: "Continuous learning and certification",
      status: "recommended",
      skills: ["PE Licensure", "Professional Certifications", "Technical Writing", "Leadership Skills"],
      resources: [
        {
          name: "ASCE Professional Development",
          url: "https://www.asce.org/professional_development/"
        }
      ]
    }
  ]
};