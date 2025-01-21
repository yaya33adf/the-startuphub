import { JobRoadmap } from "@/types/roadmap";

export const uiuxRoadmap: JobRoadmap = {
  title: "UI/UX Designer Roadmap",
  description: "A comprehensive guide to becoming a UI/UX Designer",
  sections: [
    {
      title: "1. Design Fundamentals",
      steps: [
        {
          id: "design-basics",
          title: "Design Basics",
          description: "Learn fundamental design principles and concepts",
          status: "required",
          skills: ["Color Theory", "Typography", "Layout", "Visual Hierarchy", "Design Systems"],
          resources: [
            { name: "Design Principles", url: "https://www.designprinciples.com" },
            { name: "Figma Design Course", url: "https://www.figma.com/resources/learn-design" }
          ]
        },
        {
          id: "user-research",
          title: "User Research",
          description: "Master user research methodologies and techniques",
          status: "required",
          skills: ["User Interviews", "Surveys", "Usability Testing", "Data Analysis"],
          resources: [
            { name: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/user-research-methods" }
          ]
        }
      ]
    },
    {
      title: "2. Design Tools",
      steps: [
        {
          id: "design-software",
          title: "Design Software",
          description: "Learn industry-standard design tools",
          status: "required",
          skills: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
          resources: [
            { name: "Figma Tutorials", url: "https://www.figma.com/resources/learn-design" },
            { name: "Adobe XD Tutorials", url: "https://www.adobe.com/products/xd/learn" }
          ]
        }
      ]
    }
  ]
};