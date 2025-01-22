import { RoadmapSection } from "@/types/roadmap";

export const financialSection: RoadmapSection = {
  title: "Financial Management",
  steps: [
    {
      id: "budgeting",
      title: "Budgeting & Financial Planning",
      description: "Master property budgeting, financial reporting, and analysis.",
      skills: ["Budget Management", "Financial Analysis", "Report Generation"],
      status: "required",
      resources: [
        {
          name: "Property Management Accounting",
          url: "https://www.accountingtools.com/articles/property-management-accounting"
        }
      ]
    },
    {
      id: "revenue",
      title: "Revenue Optimization",
      description: "Learn strategies for maximizing property revenue and occupancy rates.",
      skills: ["Rental Rate Analysis", "Occupancy Optimization", "Revenue Management"],
      status: "recommended",
      resources: [
        {
          name: "Revenue Management Strategies",
          url: "https://www.propertymanagementinsider.com/revenue-management"
        }
      ]
    }
  ]
};