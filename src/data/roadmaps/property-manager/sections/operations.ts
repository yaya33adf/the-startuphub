import { RoadmapSection } from "@/types/roadmap";

export const operationsSection: RoadmapSection = {
  title: "Operations Management",
  steps: [
    {
      id: "tenant-management",
      title: "Tenant Management",
      description: "Learn effective tenant screening, communication, and relationship management.",
      skills: ["Tenant Screening", "Lease Management", "Conflict Resolution"],
      status: "required",
      resources: [
        {
          name: "Tenant Screening Best Practices",
          url: "https://www.nolo.com/legal-encyclopedia/tenant-screening-background-checks-29445.html"
        }
      ]
    },
    {
      id: "maintenance",
      title: "Maintenance & Repairs",
      description: "Develop systems for property maintenance and vendor management.",
      skills: ["Preventive Maintenance", "Vendor Management", "Emergency Response"],
      status: "required",
      resources: [
        {
          name: "Property Maintenance Guide",
          url: "https://www.buildium.com/property-maintenance-guide/"
        }
      ]
    }
  ]
};