import { RoadmapSection } from "@/types/roadmap";

export const fundamentalsSection: RoadmapSection = {
  title: "Property Management Fundamentals",
  steps: [
    {
      id: "basics",
      title: "Property Management Basics",
      description: "Learn the fundamental concepts of property management, including legal requirements and industry standards.",
      skills: ["Property Law", "Tenant Relations", "Building Maintenance"],
      status: "required",
      resources: [
        {
          name: "National Property Management Association",
          url: "https://www.irem.org/"
        },
        {
          name: "Property Management 101",
          url: "https://www.propertymanager.com/property-management-101/"
        }
      ]
    },
    {
      id: "licensing",
      title: "Licensing & Certification",
      description: "Obtain necessary licenses and certifications for property management in your region.",
      skills: ["Real Estate License", "Property Manager Certification"],
      status: "required",
      resources: [
        {
          name: "State Real Estate Commission",
          url: "https://www.arello.org/regulatory-agencies/"
        }
      ]
    },
    {
      id: "software",
      title: "Property Management Software",
      description: "Master essential property management software and tools.",
      skills: ["Property Management Software", "Accounting Software", "Maintenance Tracking"],
      status: "required",
      resources: [
        {
          name: "Property Management Software Guide",
          url: "https://www.softwareadvice.com/property/"
        }
      ]
    }
  ]
};