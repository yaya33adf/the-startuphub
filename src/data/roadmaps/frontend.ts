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
            },
            {
              name: "Complete Web Development Bootcamp - Udemy",
              url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
            },
            {
              name: "CSS for JavaScript Developers",
              url: "https://css-for-js.dev/"
            },
            {
              name: "freeCodeCamp Responsive Web Design",
              url: "https://www.freecodecamp.org/learn/responsive-web-design/"
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
            },
            {
              name: "JavaScript30 by Wes Bos",
              url: "https://javascript30.com/"
            },
            {
              name: "Deep JavaScript Foundations - Frontend Masters",
              url: "https://frontendmasters.com/courses/deep-javascript-v3/"
            },
            {
              name: "Modern JavaScript Tutorial",
              url: "https://javascript.info/"
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
              name: "Epic React by Kent C. Dodds",
              url: "https://epicreact.dev/"
            },
            {
              name: "React - The Complete Guide - Udemy",
              url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
            },
            {
              name: "React Query Essentials",
              url: "https://ui.dev/react-query"
            },
            {
              name: "Testing React Applications",
              url: "https://frontendmasters.com/courses/testing-react/"
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
            },
            {
              name: "Testing JavaScript with Kent C. Dodds",
              url: "https://testingjavascript.com/"
            },
            {
              name: "Chrome DevTools Documentation",
              url: "https://developers.google.com/web/tools/chrome-devtools"
            },
            {
              name: "Web Performance Fundamentals",
              url: "https://frontendmasters.com/courses/web-performance/"
            }
          ]
        }
      ]
    }
  ]
};