import { JobRoadmap } from "@/types/roadmap";

export const devopsRoadmap: JobRoadmap = {
  title: "DevOps Engineer Roadmap",
  description: "A comprehensive guide to becoming a DevOps Engineer",
  sections: [
    {
      title: "1. Infrastructure & System Administration",
      steps: [
        {
          id: "operating-systems",
          title: "Operating Systems",
          description: "Master Linux/Unix system administration",
          status: "required",
          skills: [
            "Linux Administration",
            "Shell Scripting",
            "System Services",
            "Performance Tuning",
            "Security"
          ],
          resources: [
            {
              name: "Linux Journey",
              url: "https://linuxjourney.com"
            },
            {
              name: "Shell Scripting Tutorial",
              url: "https://www.shellscript.sh"
            }
          ]
        },
        {
          id: "networking",
          title: "Networking",
          description: "Understand networking concepts and protocols",
          status: "required",
          skills: [
            "TCP/IP",
            "DNS",
            "Load Balancing",
            "Firewalls",
            "VPN"
          ],
          resources: [
            {
              name: "Networking Fundamentals",
              url: "https://www.netacad.com"
            }
          ]
        }
      ]
    },
    {
      title: "2. Cloud & Automation",
      steps: [
        {
          id: "cloud-platforms",
          title: "Cloud Platforms",
          description: "Learn major cloud platforms and services",
          status: "required",
          skills: [
            "AWS",
            "Azure",
            "Google Cloud",
            "Cloud Architecture",
            "Cost Optimization"
          ],
          resources: [
            {
              name: "AWS Training",
              url: "https://aws.amazon.com/training"
            }
          ]
        },
        {
          id: "containerization",
          title: "Containerization & Orchestration",
          description: "Master container technologies",
          status: "required",
          skills: [
            "Docker",
            "Kubernetes",
            "Container Security",
            "Service Mesh",
            "Helm"
          ],
          resources: [
            {
              name: "Docker Documentation",
              url: "https://docs.docker.com"
            },
            {
              name: "Kubernetes Documentation",
              url: "https://kubernetes.io/docs"
            }
          ]
        }
      ]
    }
  ]
};