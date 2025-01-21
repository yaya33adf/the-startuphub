import { JobRoadmap } from "@/types/roadmap";

export const cybersecurityRoadmap: JobRoadmap = {
  title: "Cybersecurity Analyst Roadmap",
  description: "A comprehensive guide to becoming a Cybersecurity Analyst",
  sections: [
    {
      title: "1. Security Fundamentals",
      steps: [
        {
          id: "security-basics",
          title: "Security Basics",
          description: "Learn core security concepts and principles",
          status: "required",
          skills: [
            "Network Security",
            "Operating Systems",
            "Security Protocols",
            "Cryptography",
            "Risk Management"
          ],
          resources: [
            {
              name: "CompTIA Security+",
              url: "https://www.comptia.org/certifications/security"
            }
          ]
        },
        {
          id: "threat-analysis",
          title: "Threat Analysis",
          description: "Master threat detection and analysis",
          status: "required",
          skills: [
            "Threat Intelligence",
            "Malware Analysis",
            "Incident Response",
            "Digital Forensics",
            "Vulnerability Assessment"
          ],
          resources: [
            {
              name: "SANS Institute",
              url: "https://www.sans.org"
            }
          ]
        }
      ]
    },
    {
      title: "2. Advanced Security",
      steps: [
        {
          id: "security-operations",
          title: "Security Operations",
          description: "Learn security operations and tools",
          status: "required",
          skills: [
            "SIEM Tools",
            "Security Automation",
            "Penetration Testing",
            "Cloud Security",
            "Compliance"
          ],
          resources: [
            {
              name: "Certified Ethical Hacker",
              url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/"
            }
          ]
        },
        {
          id: "advanced-defense",
          title: "Advanced Defense",
          description: "Master advanced security defense techniques",
          status: "recommended",
          skills: [
            "Zero Trust Architecture",
            "DevSecOps",
            "Threat Hunting",
            "Security Architecture",
            "Red Team Operations"
          ],
          resources: [
            {
              name: "CISSP Certification",
              url: "https://www.isc2.org/Certifications/CISSP"
            }
          ]
        }
      ]
    }
  ]
};