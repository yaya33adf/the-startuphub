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
          description: "Learn core programming concepts and a backend language",
          status: "required",
          skills: ["Variables", "Data Types", "Functions", "OOP", "Algorithms"],
          resources: [
            { name: "Python.org", url: "https://www.python.org/about/gettingstarted/" },
            { name: "Node.js Docs", url: "https://nodejs.org/docs/latest/api/" }
          ]
        }
      ]
    },
    {
      title: "2. Databases",
      steps: [
        {
          id: "databases",
          title: "Database Management",
          description: "Learn SQL and database design principles",
          status: "required",
          skills: ["SQL", "Database Design", "Normalization", "Indexing"],
          resources: [
            { name: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" },
            { name: "MongoDB University", url: "https://university.mongodb.com/" }
          ]
        }
      ]
    }
  ]
};