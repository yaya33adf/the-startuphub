import { RoadmapSection } from "@/types/roadmap";

export const tenantRelationsSection: RoadmapSection = {
  title: "Tenant Relations and Leasing",
  steps: [
    {
      id: "tenant-screening",
      title: "Tenant Screening and Selection",
      description: "Learn effective tenant screening and selection processes",
      status: "required",
      skills: ["Background Checks", "Credit Checks", "Reference Verification", "Application Processing"],
      resources: [
        {
          name: "Tenant Screening Best Practices",
          url: "https://www.narpm.org/screening"
        }
      ]
    },
    {
      id: "lease-management",
      title: "Lease Management",
      description: "Master lease administration and enforcement",
      status: "required",
      skills: ["Lease Agreements", "Renewals", "Terminations", "Policy Enforcement"],
      resources: [
        {
          name: "Lease Management Guide",
          url: "https://www.irem.org/leasing"
        }
      ]
    },
    {
      id: "communication",
      title: "Communication and Conflict Resolution",
      description: "Develop strong communication and conflict resolution skills",
      status: "recommended",
      skills: ["Customer Service", "Conflict Resolution", "Professional Communication"],
      resources: [
        {
          name: "Property Management Communication",
          url: "https://www.boma.org/communication"
        }
      ]
    }
  ]
};