import { JobRoadmap } from "@/types/roadmap";

export const softwareEngineerRoadmap: JobRoadmap = {
  title: "Software Engineer Roadmap",
  description: "A comprehensive guide to becoming a Software Engineer",
  sections: [
    {
      title: "1. Programming Fundamentals",
      steps: [
        {
          id: "core-concepts",
          title: "Core Programming Concepts",
          description: "Master fundamental programming concepts",
          status: "required",
          skills: [
            "Data Structures",
            "Algorithms",
            "OOP Principles",
            "Design Patterns",
            "Problem Solving"
          ],
          resources: [
            {
              name: "Introduction to Algorithms",
              url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
            }
          ]
        },
        {
          id: "version-control",
          title: "Version Control",
          description: "Learn Git and collaboration workflows",
          status: "required",
          skills: [
            "Git",
            "GitHub",
            "Branching Strategies",
            "Code Review",
            "CI/CD"
          ],
          resources: [
            {
              name: "Git Documentation",
              url: "https://git-scm.com/doc"
            }
          ]
        }
      ]
    },
    {
      title: "2. Software Development",
      steps: [
        {
          id: "languages",
          title: "Programming Languages",
          description: "Learn multiple programming languages",
          status: "required",
          skills: [
            "JavaScript",
            "Python",
            "Java",
            "C++",
            "TypeScript"
          ],
          resources: [
            {
              name: "JavaScript.info",
              url: "https://javascript.info"
            }
          ]
        },
        {
          id: "architecture",
          title: "Software Architecture",
          description: "Understand software architecture patterns",
          status: "recommended",
          skills: [
            "Design Patterns",
            "Microservices",
            "API Design",
            "System Design",
            "Scalability"
          ],
          resources: [
            {
              name: "System Design Primer",
              url: "https://github.com/donnemartin/system-design-primer"
            }
          ]
        }
      ]
    }
  ]
};