import { RoadmapSection } from "@/types/roadmap";

export const propertyOperationsSection: RoadmapSection = {
  title: "Property Operations Management",
  steps: [
    {
      id: "maintenance",
      title: "Maintenance and Repairs",
      description: "Learn to manage property maintenance and repair processes",
      status: "required",
      skills: ["Preventive Maintenance", "Vendor Management", "Emergency Response", "Work Orders"],
      resources: [
        {
          name: "Property Maintenance Guide",
          url: "https://www.boma.org/education"
        }
      ]
    },
    {
      id: "financial",
      title: "Financial Management",
      description: "Master property financial management and budgeting",
      status: "required",
      skills: ["Budgeting", "Financial Reporting", "Rent Collection", "Operating Expenses"],
      resources: [
        {
          name: "Property Financial Management",
          url: "https://www.irem.org/financial-management"
        }
      ]
    },
    {
      id: "inspections",
      title: "Property Inspections",
      description: "Learn proper inspection procedures and documentation",
      status: "required",
      skills: ["Move-in/Move-out Inspections", "Regular Inspections", "Documentation"],
      resources: [
        {
          name: "Property Inspection Guidelines",
          url: "https://www.narpm.org/education"
        }
      ]
    }
  ]
};