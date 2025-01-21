import { JobRoadmap } from "@/types/roadmap";
import { Layers, Palette, Users, LayoutGrid, Circle } from "lucide-react";

export const uiuxRoadmap: JobRoadmap = {
  title: "UX/UI Designer Roadmap",
  description: "A comprehensive guide to becoming a UX/UI Designer",
  sections: [
    {
      title: "1. Design Fundamentals",
      steps: [
        {
          id: "design-basics",
          title: "Design Basics",
          description: "Master fundamental design principles and concepts that form the foundation of UI/UX design",
          status: "required",
          skills: [
            "Color Theory",
            "Typography",
            "Layout Principles",
            "Visual Hierarchy",
            "Gestalt Principles",
            "Design Systems"
          ],
          resources: [
            {
              name: "Design Principles - Learn UI Design Fundamentals",
              url: "https://www.designprinciples.com"
            },
            {
              name: "Figma Design Course",
              url: "https://www.figma.com/resources/learn-design"
            }
          ]
        },
        {
          id: "user-research",
          title: "User Research",
          description: "Learn how to conduct effective user research and gather valuable insights",
          status: "required",
          skills: [
            "User Interviews",
            "Surveys",
            "Usability Testing",
            "Data Analysis",
            "Personas",
            "User Journey Mapping"
          ],
          resources: [
            {
              name: "Nielsen Norman Group - User Research Methods",
              url: "https://www.nngroup.com/articles/user-research-methods"
            },
            {
              name: "UX Research Guide",
              url: "https://www.uxresearch.guide"
            }
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
          description: "Master industry-standard design tools used by professional UI/UX designers",
          status: "required",
          skills: [
            "Figma",
            "Adobe XD",
            "Sketch",
            "InVision",
            "Principle",
            "Protopie"
          ],
          resources: [
            {
              name: "Figma Tutorials",
              url: "https://www.figma.com/resources/learn-design"
            },
            {
              name: "Adobe XD Tutorials",
              url: "https://www.adobe.com/products/xd/learn"
            }
          ]
        }
      ]
    },
    {
      title: "3. Advanced UI/UX Skills",
      steps: [
        {
          id: "interaction-design",
          title: "Interaction Design",
          description: "Learn how to create intuitive and engaging user interactions",
          status: "required",
          skills: [
            "Microinteractions",
            "Animation Principles",
            "Responsive Design",
            "Mobile-First Design",
            "Accessibility",
            "Design Patterns"
          ],
          resources: [
            {
              name: "Interaction Design Foundation",
              url: "https://www.interaction-design.org"
            },
            {
              name: "UI Patterns",
              url: "https://ui-patterns.com"
            }
          ]
        },
        {
          id: "prototyping",
          title: "Prototyping",
          description: "Master the art of creating interactive prototypes",
          status: "recommended",
          skills: [
            "Low-Fidelity Prototyping",
            "High-Fidelity Prototyping",
            "Interactive Prototypes",
            "User Flow Design",
            "Wireframing"
          ],
          resources: [
            {
              name: "Prototyping Best Practices",
              url: "https://www.prototyping.guide"
            }
          ]
        }
      ]
    }
  ]
};