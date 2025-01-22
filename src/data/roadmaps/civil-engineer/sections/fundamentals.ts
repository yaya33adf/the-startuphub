import { RoadmapSection } from '@/types/roadmap';

export const fundamentals: RoadmapSection = {
  title: "Engineering Fundamentals",
  steps: [
    {
      id: "math-physics",
      title: "Mathematics and Physics",
      description: "Master fundamental mathematical and physical concepts essential for civil engineering",
      status: "required",
      skills: ["Calculus", "Physics", "Linear Algebra", "Statistics"],
      resources: [
        {
          name: "Engineering Mathematics",
          url: "https://www.khanacademy.org/math/engineering"
        }
      ]
    },
    {
      id: "engineering-mechanics",
      title: "Engineering Mechanics",
      description: "Understanding forces, stresses, and structural behavior",
      status: "required",
      skills: ["Statics", "Dynamics", "Mechanics of Materials", "Structural Analysis"],
      resources: [
        {
          name: "Engineering Mechanics",
          url: "https://ocw.mit.edu/courses/civil-and-environmental-engineering/"
        }
      ]
    },
    {
      id: "drawing-design",
      title: "Engineering Drawing and Design",
      description: "Learn technical drawing and design principles",
      status: "required",
      skills: ["AutoCAD", "Technical Drawing", "Design Standards", "Blueprint Reading"],
      resources: [
        {
          name: "AutoCAD Essentials",
          url: "https://www.autodesk.com/certification/learn/autocad"
        }
      ]
    }
  ]
};