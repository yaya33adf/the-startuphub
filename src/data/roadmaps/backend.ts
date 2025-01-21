import { JobRoadmap } from "@/types/roadmap";

export const backendRoadmap: JobRoadmap = {
  title: "Backend Developer Roadmap",
  description: "A comprehensive guide to becoming a Backend Developer",
  sections: [
    {
      title: "1. Programming Fundamentals",
      steps: [
        {
          id: "programming-basics",
          title: "Programming Basics",
          description: "Master core programming concepts and a backend language",
          status: "required",
          skills: [
            "Data Structures",
            "Algorithms",
            "OOP Principles",
            "Design Patterns",
            "Clean Code"
          ],
          resources: [
            {
              name: "Node.js Documentation",
              url: "https://nodejs.org/docs"
            },
            {
              name: "Python Documentation",
              url: "https://docs.python.org"
            }
          ]
        },
        {
          id: "version-control",
          title: "Version Control",
          description: "Learn Git and collaboration workflows",
          status: "required",
          skills: [
            "Git Basics",
            "Branching Strategies",
            "Collaboration",
            "CI/CD Concepts"
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
      title: "2. Backend Development",
      steps: [
        {
          id: "databases",
          title: "Databases",
          description: "Learn database design and management",
          status: "required",
          skills: [
            "SQL",
            "Database Design",
            "Query Optimization",
            "ORMs",
            "NoSQL Databases"
          ],
          resources: [
            {
              name: "PostgreSQL Tutorial",
              url: "https://www.postgresqltutorial.com"
            },
            {
              name: "MongoDB University",
              url: "https://university.mongodb.com"
            }
          ]
        },
        {
          id: "api-design",
          title: "API Design",
          description: "Master RESTful API design and implementation",
          status: "required",
          skills: [
            "REST Principles",
            "API Security",
            "Authentication",
            "Documentation",
            "Testing"
          ],
          resources: [
            {
              name: "REST API Tutorial",
              url: "https://restfulapi.net"
            }
          ]
        }
      ]
    }
  ]
};