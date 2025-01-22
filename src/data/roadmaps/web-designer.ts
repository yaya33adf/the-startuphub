import { JobRoadmap } from "@/types/roadmap";

export const webDesignerRoadmap: JobRoadmap = {
  title: "Web Designer Roadmap",
  description: "A comprehensive guide to becoming a Web Designer",
  sections: [
    {
      title: "1. Design Fundamentals",
      steps: [
        {
          id: "design-principles",
          title: "Design Principles",
          description: "Master core design principles and visual hierarchy",
          status: "required",
          skills: [
            "Color Theory",
            "Typography",
            "Layout Design",
            "Visual Hierarchy",
            "Responsive Design"
          ],
          resources: [
            {
              name: "Design Principles - Material Design",
              url: "https://material.io/design"
            },
            {
              name: "Web Design Fundamentals",
              url: "https://www.coursera.org/learn/web-design"
            }
          ]
        },
        {
          id: "design-tools",
          title: "Design Tools",
          description: "Learn industry-standard design tools",
          status: "required",
          skills: [
            "Figma",
            "Adobe XD",
            "Sketch",
            "Photoshop",
            "Illustrator"
          ],
          resources: [
            {
              name: "Figma Tutorial",
              url: "https://www.figma.com/resources/learn-design"
            }
          ]
        }
      ]
    },
    {
      title: "2. Technical Skills",
      steps: [
        {
          id: "html-css",
          title: "HTML & CSS",
          description: "Master web technologies and coding basics",
          status: "required",
          skills: [
            "HTML5",
            "CSS3",
            "Flexbox",
            "CSS Grid",
            "Animations",
            "Sass/SCSS"
          ],
          resources: [
            {
              name: "MDN Web Docs",
              url: "https://developer.mozilla.org/en-US/docs/Learn"
            }
          ]
        },
        {
          id: "frameworks",
          title: "Design Frameworks",
          description: "Learn popular design frameworks",
          status: "recommended",
          skills: [
            "Bootstrap",
            "Tailwind CSS",
            "Material UI",
            "Foundation"
          ],
          resources: [
            {
              name: "Tailwind CSS Documentation",
              url: "https://tailwindcss.com/docs"
            }
          ]
        }
      ]
    }
  ]
};