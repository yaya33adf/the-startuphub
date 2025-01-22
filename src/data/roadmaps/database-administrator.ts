import { JobRoadmap } from "@/types/roadmap";

export const databaseAdministratorRoadmap: JobRoadmap = {
  title: "Database Administrator Roadmap",
  description: "A comprehensive guide to becoming a Database Administrator",
  sections: [
    {
      title: "1. Database Fundamentals",
      steps: [
        {
          id: "db-basics",
          title: "Database Basics",
          description: "Learn core database concepts and design",
          status: "required",
          skills: [
            "SQL",
            "Database Design",
            "Normalization",
            "ERD",
            "ACID Properties"
          ],
          resources: [
            {
              name: "Database Design",
              url: "https://www.postgresql.org/docs/current/tutorial.html"
            }
          ]
        },
        {
          id: "db-systems",
          title: "Database Systems",
          description: "Master different database systems",
          status: "required",
          skills: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Oracle",
            "SQL Server"
          ],
          resources: [
            {
              name: "PostgreSQL Documentation",
              url: "https://www.postgresql.org/docs/"
            }
          ]
        }
      ]
    },
    {
      title: "2. Administration",
      steps: [
        {
          id: "maintenance",
          title: "Database Maintenance",
          description: "Learn database maintenance and optimization",
          status: "required",
          skills: [
            "Backup & Recovery",
            "Performance Tuning",
            "Security",
            "Monitoring",
            "High Availability"
          ],
          resources: [
            {
              name: "Database Administration Basics",
              url: "https://www.oracle.com/database/technologies/"
            }
          ]
        }
      ]
    }
  ]
};