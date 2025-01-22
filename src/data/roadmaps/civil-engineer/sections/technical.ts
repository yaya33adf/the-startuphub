import { RoadmapSection } from '@/types/roadmap';

export const technical: RoadmapSection = {
  title: "Technical Skills",
  steps: [
    {
      id: "software-tools",
      title: "Engineering Software",
      description: "Master essential civil engineering software tools",
      status: "required",
      skills: ["AutoCAD Civil 3D", "STAAD Pro", "GIS Software", "Project Management Software"],
      resources: [
        {
          name: "Civil Engineering Software Tutorials",
          url: "https://www.civilax.com/software-tutorials/"
        }
      ]
    },
    {
      id: "materials",
      title: "Construction Materials",
      description: "Understanding properties and applications of construction materials",
      status: "required",
      skills: ["Concrete Technology", "Steel Structures", "Soil Mechanics", "Material Testing"],
      resources: [
        {
          name: "Construction Materials Guide",
          url: "https://www.engineeringcivil.com/construction-materials"
        }
      ]
    },
    {
      id: "site-management",
      title: "Site Management",
      description: "Learn construction site management and supervision",
      status: "recommended",
      skills: ["Site Planning", "Safety Management", "Quality Control", "Resource Management"],
      resources: [
        {
          name: "Construction Management",
          url: "https://www.constructionmanagermagazine.com/"
        }
      ]
    }
  ]
};