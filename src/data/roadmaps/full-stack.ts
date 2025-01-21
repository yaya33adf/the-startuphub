import { JobRoadmap } from "@/types/roadmap";

export const fullStackRoadmap: JobRoadmap = {
  title: "Full Stack Developer Roadmap",
  description: "A comprehensive guide to becoming a Full Stack Developer",
  sections: [
    {
      title: "1. Frontend Development",
      steps: [
        {
          id: "html-css-js",
          title: "HTML, CSS & JavaScript",
          description: "Master the core web technologies",
          status: "required",
          skills: [
            "HTML5",
            "CSS3",
            "JavaScript ES6+",
            "DOM Manipulation",
            "Responsive Design"
          ],
          resources: [
            {
              name: "MDN Web Docs",
              url: "https://developer.mozilla.org"
            }
          ]
        },
        {
          id: "frontend-framework",
          title: "Frontend Framework",
          description: "Learn a modern frontend framework",
          status: "required",
          skills: [
            "React",
            "State Management",
            "Component Architecture",
            "Routing",
            "API Integration"
          ],
          resources: [
            {
              name: "React Documentation",
              url: "https://react.dev"
            }
          ]
        }
      ]
    },
    {
      title: "2. Backend Development",
      steps: [
        {
          id: "server-side",
          title: "Server-Side Programming",
          description: "Learn backend programming and databases",
          status: "required",
          skills: [
            "Node.js",
            "Express.js",
            "SQL",
            "NoSQL",
            "RESTful APIs",
            "Authentication"
          ],
          resources: [
            {
              name: "Node.js Documentation",
              url: "https://nodejs.org/docs"
            }
          ]
        },
        {
          id: "deployment",
          title: "Deployment & DevOps",
          description: "Master deployment and DevOps basics",
          status: "required",
          skills: [
            "Git",
            "CI/CD",
            "Cloud Platforms",
            "Docker",
            "Server Management"
          ],
          resources: [
            {
              name: "AWS Documentation",
              url: "https://docs.aws.amazon.com"
            }
          ]
        }
      ]
    }
  ]
};