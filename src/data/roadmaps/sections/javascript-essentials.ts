import { RoadmapSection } from "@/types/roadmap";

export const javascriptEssentialsSection: RoadmapSection = {
  title: "3. JavaScript Essentials",
  steps: [
    {
      id: "js-basics",
      title: "JavaScript Fundamentals",
      description: "Learn core JavaScript concepts and syntax",
      status: "required",
      skills: [
        "Variables & Data Types",
        "Functions & Scope",
        "Control Flow",
        "Arrays & Objects",
        "DOM Manipulation",
        "Events"
      ],
      resources: [
        {
          name: "JavaScript.info",
          url: "https://javascript.info"
        },
        {
          name: "Eloquent JavaScript",
          url: "https://eloquentjavascript.net"
        }
      ]
    },
    {
      id: "js-advanced",
      title: "Advanced JavaScript",
      description: "Master advanced JavaScript concepts",
      status: "required",
      skills: [
        "ES6+ Features",
        "Async Programming",
        "Promises & Async/Await",
        "Error Handling",
        "Local Storage",
        "API Integration"
      ],
      resources: [
        {
          name: "MDN JavaScript Guide",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
        },
        {
          name: "JavaScript30",
          url: "https://javascript30.com/"
        }
      ]
    }
  ]
};