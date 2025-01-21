import { JobRoadmap } from "@/types/roadmap";

export const frontendRoadmap: JobRoadmap = {
  title: "Frontend Developer Roadmap",
  description: "A comprehensive guide to becoming a Frontend Developer",
  sections: [
    {
      title: "1. Web Fundamentals",
      steps: [
        {
          id: "html-css",
          title: "HTML & CSS",
          description: "Master the building blocks of web development",
          status: "required",
          skills: [
            "HTML5 Semantics",
            "CSS3 Properties",
            "Flexbox",
            "CSS Grid",
            "Responsive Design",
            "CSS Preprocessors"
          ],
          resources: [
            {
              name: "MDN Web Docs - HTML",
              url: "https://developer.mozilla.org/en-US/docs/Learn/HTML"
            },
            {
              name: "CSS Tricks",
              url: "https://css-tricks.com"
            }
          ]
        },
        {
          id: "javascript",
          title: "JavaScript",
          description: "Learn modern JavaScript and its ecosystem",
          status: "required",
          skills: [
            "ES6+ Features",
            "DOM Manipulation",
            "Async Programming",
            "Error Handling",
            "Modern JS Concepts"
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
        }
      ]
    },
    {
      title: "2. Frontend Frameworks",
      steps: [
        {
          id: "react",
          title: "React",
          description: "Master React and its ecosystem",
          status: "required",
          skills: [
            "Components",
            "Props & State",
            "Hooks",
            "Context API",
            "React Router",
            "State Management"
          ],
          resources: [
            {
              name: "React Documentation",
              url: "https://react.dev"
            },
            {
              name: "React Router Documentation",
              url: "https://reactrouter.com"
            }
          ]
        },
        {
          id: "tooling",
          title: "Development Tools",
          description: "Learn essential frontend development tools",
          status: "recommended",
          skills: [
            "Git",
            "Package Managers",
            "Bundlers",
            "Testing Libraries",
            "Chrome DevTools"
          ],
          resources: [
            {
              name: "Git Documentation",
              url: "https://git-scm.com/doc"
            },
            {
              name: "Vite Documentation",
              url: "https://vitejs.dev"
            }
          ]
        }
      ]
    }
  ]
};