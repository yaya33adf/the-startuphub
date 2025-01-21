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
            },
            {
              name: "DevOps Engineering Course - Linux Academy",
              url: "https://acloudguru.com/course/devops-essentials"
            },
            {
              name: "Linux Administration Bootcamp",
              url: "https://www.udemy.com/course/linux-administration-bootcamp/"
            },
            {
              name: "Shell Scripting Masterclass",
              url: "https://www.udemy.com/course/linux-shell-scripting-projects/"
            },
            {
              name: "Git Complete Masterclass",
              url: "https://www.udemy.com/course/git-complete/"
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
            },
            {
              name: "AWS Certified DevOps Engineer",
              url: "https://aws.amazon.com/certification/certified-devops-engineer-professional/"
            },
            {
              name: "Azure DevOps Engineer Expert",
              url: "https://learn.microsoft.com/en-us/certifications/devops-engineer/"
            },
            {
              name: "Google Cloud DevOps Engineer",
              url: "https://cloud.google.com/certification/cloud-devops-engineer"
            },
            {
              name: "Cloud Architecture Patterns",
              url: "https://www.coursera.org/learn/cloud-architecture-patterns"
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
            },
            {
              name: "Docker Mastery",
              url: "https://www.udemy.com/course/docker-mastery/"
            },
            {
              name: "Certified Kubernetes Administrator",
              url: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/"
            },
            {
              name: "Microservices Architecture",
              url: "https://www.coursera.org/learn/microservices-architecture"
            },
            {
              name: "Service Mesh with Istio",
              url: "https://www.udemy.com/course/istio-hands-on-for-kubernetes/"
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
            },
            {
              name: "Monitoring with Prometheus & Grafana",
              url: "https://www.udemy.com/course/monitoring-with-prometheus/"
            },
            {
              name: "ELK Stack for Beginners",
              url: "https://www.elastic.co/training/free"
            },
            {
              name: "Site Reliability Engineering",
              url: "https://sre.google/sre-book/table-of-contents/"
            },
            {
              name: "Advanced Observability Practices",
              url: "https://www.coursera.org/learn/observability-engineering"
            }
          ]
        }
      ]
    }
  ]
};