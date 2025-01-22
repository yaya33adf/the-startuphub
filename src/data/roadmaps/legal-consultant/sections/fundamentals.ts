import type { RoadmapSection } from "@/types/roadmap";

export const fundamentalsSection: RoadmapSection = {
  title: "Legal Fundamentals",
  steps: [
    {
      id: "legal-education",
      title: "Legal Education & Certification",
      description: "Obtain necessary legal education and professional certifications",
      status: "required",
      skills: ["Legal Research", "Legal Writing", "Critical Thinking"],
      resources: [
        {
          name: "Bar Association Resources",
          url: "https://www.americanbar.org/resources_for_lawyers/"
        },
        {
          name: "Legal Research Platforms",
          url: "https://www.law.cornell.edu/"
        }
      ]
    },
    {
      id: "legal-tech",
      title: "Legal Technology",
      description: "Master essential legal software and research tools",
      status: "required",
      skills: ["Legal Software", "Document Management", "E-Discovery"],
      resources: [
        {
          name: "Legal Tech Essentials",
          url: "https://www.lawsitesblog.com/tech"
        }
      ]
    },
    {
      id: "ethics-compliance",
      title: "Ethics & Professional Responsibility",
      description: "Understand legal ethics and professional conduct requirements",
      status: "required",
      skills: ["Professional Ethics", "Client Confidentiality", "Conflict Management"],
      resources: [
        {
          name: "Professional Ethics Guidelines",
          url: "https://www.americanbar.org/groups/professional_responsibility/"
        }
      ]
    }
  ]
};