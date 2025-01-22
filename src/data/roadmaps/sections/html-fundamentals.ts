import { RoadmapSection } from "@/types/roadmap";

export const htmlFundamentalsSection: RoadmapSection = {
  title: "1. HTML Fundamentals",
  steps: [
    {
      id: "html-basics",
      title: "HTML Basics",
      description: "Learn the fundamentals of HTML markup and document structure",
      status: "required",
      skills: [
        "HTML5 Elements",
        "Semantic HTML",
        "Forms & Validation",
        "Accessibility",
        "Meta Tags",
        "Document Structure"
      ],
      resources: [
        {
          name: "MDN HTML Guide",
          url: "https://developer.mozilla.org/en-US/docs/Learn/HTML"
        },
        {
          name: "W3Schools HTML Tutorial",
          url: "https://www.w3schools.com/html/"
        }
      ]
    },
    {
      id: "html-advanced",
      title: "Advanced HTML Concepts",
      description: "Master advanced HTML features and best practices",
      status: "required",
      skills: [
        "HTML5 APIs",
        "Web Storage",
        "Custom Data Attributes",
        "SVG & Canvas",
        "Multimedia Elements"
      ],
      resources: [
        {
          name: "HTML5 Features",
          url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
        }
      ]
    }
  ]
};