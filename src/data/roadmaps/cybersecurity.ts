import { JobRoadmap } from "@/types/roadmap";

export const cybersecurityRoadmap: JobRoadmap = {
  title: "Cybersecurity Analyst Roadmap",
  description: "A comprehensive guide to becoming a Cybersecurity Analyst",
  sections: [
    {
      title: "1. Security Fundamentals",
      steps: [
        {
          id: "networking-basics",
          title: "Networking Fundamentals",
          description: "Master networking concepts and protocols",
          status: "required",
          skills: [
            "TCP/IP",
            "Network Protocols",
            "OSI Model",
            "Network Security",
            "Firewalls"
          ],
          resources: [
            {
              name: "CompTIA Network+",
              url: "https://www.comptia.org/certifications/network"
            },
            {
              name: "Cisco Networking Academy",
              url: "https://www.netacad.com"
            }
          ]
        },
        {
          id: "security-concepts",
          title: "Security Concepts",
          description: "Learn core security principles and practices",
          status: "required",
          skills: [
            "CIA Triad",
            "Access Control",
            "Cryptography",
            "Security Policies",
            "Risk Management"
          ],
          resources: [
            {
              name: "CompTIA Security+",
              url: "https://www.comptia.org/certifications/security"
            }
          ]
        }
      ]
    },
    {
      title: "2. Security Operations",
      steps: [
        {
          id: "security-tools",
          title: "Security Tools & Technologies",
          description: "Master essential security tools and technologies",
          status: "required",
          skills: [
            "SIEM Tools",
            "IDS/IPS",
            "Vulnerability Scanners",
            "Penetration Testing",
            "Forensics Tools"
          ],
          resources: [
            {
              name: "Kali Linux Tools",
              url: "https://www.kali.org/tools"
            },
            {
              name: "OWASP Top Ten",
              url: "https://owasp.org/www-project-top-ten"
            }
          ]
        },
        {
          id: "incident-response",
          title: "Incident Response",
          description: "Learn incident response and threat hunting",
          status: "required",
          skills: [
            "Incident Handling",
            "Malware Analysis",
            "Threat Intelligence",
            "Digital Forensics",
            "Documentation"
          ],
          resources: [
            {
              name: "SANS Incident Response",
              url: "https://www.sans.org/incident-response"
            }
          ]
        }
      ]
    }
  ]
};