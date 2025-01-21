import { JobRoadmap } from "@/types/roadmap";

export const devopsRoadmap: JobRoadmap = {
  title: "DevOps Engineer Roadmap",
  description: "A comprehensive guide to becoming a DevOps Engineer",
  sections: [
    {
      title: "1. DevOps Fundamentals",
      steps: [
        {
          id: "devops-basics",
          title: "DevOps Basics",
          description: "Learn core DevOps principles and practices",
          status: "required",
          skills: [
            "Linux Administration",
            "Shell Scripting",
            "Version Control",
            "CI/CD Concepts",
            "Infrastructure as Code"
          ],
          resources: [
            {
              name: "DevOps Documentation",
              url: "https://docs.aws.amazon.com/devops"
            }
          ]
        },
        {
          id: "cloud-platforms",
          title: "Cloud Platforms",
          description: "Master cloud computing platforms",
          status: "required",
          skills: [
            "AWS",
            "Azure",
            "Google Cloud",
            "Cloud Architecture",
            "Cloud Security"
          ],
          resources: [
            {
              name: "AWS Documentation",
              url: "https://docs.aws.amazon.com"
            }
          ]
        }
      ]
    },
    {
      title: "2. Advanced DevOps",
      steps: [
        {
          id: "containerization",
          title: "Containerization & Orchestration",
          description: "Learn container technologies and orchestration",
          status: "required",
          skills: [
            "Docker",
            "Kubernetes",
            "Container Security",
            "Microservices",
            "Service Mesh"
          ],
          resources: [
            {
              name: "Kubernetes Documentation",
              url: "https://kubernetes.io/docs/"
            }
          ]
        },
        {
          id: "monitoring",
          title: "Monitoring & Observability",
          description: "Master monitoring and observability tools",
          status: "recommended",
          skills: [
            "Prometheus",
            "Grafana",
            "ELK Stack",
            "Log Management",
            "Performance Monitoring"
          ],
          resources: [
            {
              name: "Prometheus Documentation",
              url: "https://prometheus.io/docs/"
            }
          ]
        }
      ]
    }
  ]
};