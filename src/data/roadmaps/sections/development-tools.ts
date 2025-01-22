import { RoadmapSection } from "@/types/roadmap";

export const developmentToolsSection: RoadmapSection = {
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
};