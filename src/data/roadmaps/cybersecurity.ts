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
          description: "Learn fundamental security concepts",
          status: "required",
          skills: ["Network Security", "Cryptography", "Security Protocols", "Risk Assessment"],
          resources: [
            { name: "CompTIA Security+", url: "https://www.comptia.org/certifications/security" },
            { name: "Cybrary", url: "https://www.cybrary.it" }
          ]
        }
      ]
    },
    {
      title: "2. Security Tools & Practices",
      steps: [
        {
          id: "security-tools",
          title: "Security Tools",
          description: "Master security tools and best practices",
          status: "required",
          skills: ["Wireshark", "Metasploit", "Nmap", "Burp Suite"],
          resources: [
            { name: "Kali Linux", url: "https://www.kali.org/learn" },
            { name: "OWASP", url: "https://owasp.org/www-project-top-ten" }
          ]
        }
      ]
    }
  ]
};