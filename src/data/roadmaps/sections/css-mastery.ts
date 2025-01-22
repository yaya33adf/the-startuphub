import { RoadmapSection } from "@/types/roadmap";

export const cssMasterySection: RoadmapSection = {
  title: "2. CSS Mastery",
  steps: [
    {
      id: "css-fundamentals",
      title: "CSS Fundamentals",
      description: "Master core CSS concepts and styling techniques",
      status: "required",
      skills: [
        "Selectors & Specificity",
        "Box Model",
        "Layout & Positioning",
        "Flexbox",
        "CSS Grid",
        "Responsive Design"
      ],
      resources: [
        {
          name: "CSS Fundamentals",
          url: "https://developer.mozilla.org/en-US/docs/Learn/CSS"
        },
        {
          name: "Flexbox Froggy",
          url: "https://flexboxfroggy.com/"
        }
      ]
    },
    {
      id: "css-advanced",
      title: "Advanced CSS",
      description: "Learn advanced CSS techniques and modern features",
      status: "required",
      skills: [
        "CSS Variables",
        "Animations & Transitions",
        "Transforms",
        "Media Queries",
        "CSS Preprocessors",
        "CSS Architecture"
      ],
      resources: [
        {
          name: "CSS Tricks",
          url: "https://css-tricks.com"
        },
        {
          name: "Advanced CSS Course",
          url: "https://www.udemy.com/course/advanced-css-and-sass/"
        }
      ]
    }
  ]
};