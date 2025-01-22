import { JobRoadmap } from "@/types/roadmap";

export const frontendHtmlCssJsRoadmap: JobRoadmap = {
  title: "Frontend Developer (HTML, CSS, JavaScript) Roadmap",
  description: "A focused guide to becoming a frontend developer specializing in core web technologies",
  sections: [
    {
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
    },
    {
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
    },
    {
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
    },
    {
      title: "4. Development Tools",
      steps: [
        {
          id: "dev-tools",
          title: "Essential Development Tools",
          description: "Learn to use essential frontend development tools",
          status: "required",
          skills: [
            "Git Version Control",
            "Browser DevTools",
            "Package Managers",
            "Code Editors",
            "Terminal Basics",
            "Web Performance"
          ],
          resources: [
            {
              name: "Git Documentation",
              url: "https://git-scm.com/doc"
            },
            {
              name: "Chrome DevTools",
              url: "https://developers.google.com/web/tools/chrome-devtools"
            }
          ]
        },
        {
          id: "build-tools",
          title: "Build Tools & Deployment",
          description: "Learn about build tools and deployment processes",
          status: "recommended",
          skills: [
            "Webpack",
            "Babel",
            "npm Scripts",
            "Code Minification",
            "Deployment Basics",
            "CI/CD Concepts"
          ],
          resources: [
            {
              name: "Webpack Documentation",
              url: "https://webpack.js.org/"
            },
            {
              name: "Netlify Deployment",
              url: "https://docs.netlify.com/"
            }
          ]
        }
      ]
    }
  ]
};