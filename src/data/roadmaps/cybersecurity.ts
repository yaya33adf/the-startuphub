import { JobRoadmap } from "@/types/roadmap";

export const cybersecurityRoadmap: JobRoadmap = {
  title: "Cybersecurity Specialist Roadmap",
  description: "A comprehensive guide to becoming a Cybersecurity Specialist",
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
            "Cryptography",
            "Security Protocols",
            "Risk Assessment",
            "Security Tools"
          ],
          resources: [
            {
              name: "IBM Cybersecurity Analyst Professional Certificate",
              url: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst"
            },
            {
              name: "Complete Ethical Hacking Bootcamp",
              url: "https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/"
            },
            {
              name: "CompTIA Security+ Certification",
              url: "https://www.coursera.org/professional-certificates/comptia-security-plus"
            },
            {
              name: "Practical Web Application Security & Testing",
              url: "https://www.udemy.com/course/web-security-testing/"
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
