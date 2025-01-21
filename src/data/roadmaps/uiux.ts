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
          description: "Learn core design principles and theory",
          status: "required",
          skills: [
            "Color Theory",
            "Typography",
            "Layout Principles",
            "Visual Hierarchy",
            "Design Systems"
          ],
          resources: [
            {
              name: "Design Principles",
              url: "https://www.interaction-design.org"
            }
          ]
        },
        {
          id: "design-tools",
          title: "Design Tools",
          description: "Master essential design tools",
          status: "required",
          skills: [
            "Figma",
            "Adobe XD",
            "Sketch",
            "Prototyping Tools",
            "Design Libraries"
          ],
          resources: [
            {
              name: "Figma Tutorials",
              url: "https://www.figma.com/resources/learn-design/"
            }
          ]
        }
      ]
    },
    {
      title: "2. UX Process",
      steps: [
        {
          id: "user-research",
          title: "User Research",
          description: "Learn user research methods and practices",
          status: "required",
          skills: [
            "User Interviews",
            "Usability Testing",
            "Personas",
            "Journey Mapping",
            "Information Architecture"
          ],
          resources: [
            {
              name: "UX Research Guide",
              url: "https://www.nngroup.com/articles/ux-research-cheat-sheet/"
            }
          ]
        },
        {
          id: "interaction-design",
          title: "Interaction Design",
          description: "Master interaction design principles",
          status: "recommended",
          skills: [
            "Wireframing",
            "Prototyping",
            "Micro-interactions",
            "Accessibility",
            "Mobile Design Patterns"
          ],
          resources: [
            {
              name: "Interaction Design Foundation",
              url: "https://www.interaction-design.org"
            }
          ]
        }
      ]
    }
  ]
};