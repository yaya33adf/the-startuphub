import type { JobRoadmap } from "@/types/roadmap";

export const virtualAssistantRoadmap: JobRoadmap = {
  title: "Virtual Assistant Roadmap",
  description: "Master the essential skills and tools needed to become a successful Virtual Assistant. This roadmap covers administrative tasks, communication, project management, and specialized services.",
  sections: [
    {
      title: "Core Administrative Skills",
      steps: [
        {
          id: "va-basics",
          title: "Virtual Assistant Fundamentals",
          description: "Learn the basics of virtual assistance and essential administrative skills.",
          status: "required",
          skills: [
            "Email Management",
            "Calendar Management",
            "Document Organization",
            "Basic Bookkeeping",
            "Data Entry"
          ],
          resources: [
            {
              name: "LinkedIn Learning - Administrative Professional Tips",
              url: "https://www.linkedin.com/learning/topics/administrative-professional"
            },
            {
              name: "Google Workspace Training",
              url: "https://workspace.google.com/training/"
            }
          ]
        },
        {
          id: "communication",
          title: "Professional Communication",
          description: "Develop strong written and verbal communication skills for client interaction.",
          status: "required",
          skills: [
            "Business Writing",
            "Email Etiquette",
            "Client Communication",
            "Virtual Meeting Management"
          ],
          resources: [
            {
              name: "Grammarly Blog - Business Writing Tips",
              url: "https://www.grammarly.com/blog/category/business-writing/"
            },
            {
              name: "Zoom Meeting Best Practices",
              url: "https://explore.zoom.us/docs/en-us/meeting-best-practices.html"
            }
          ]
        }
      ]
    },
    {
      title: "Digital Tools & Technology",
      steps: [
        {
          id: "productivity-tools",
          title: "Productivity Software",
          description: "Master essential productivity and collaboration tools.",
          status: "required",
          skills: [
            "Microsoft Office Suite",
            "Google Workspace",
            "Project Management Tools",
            "Cloud Storage Solutions",
            "Password Managers"
          ],
          resources: [
            {
              name: "Microsoft 365 Training",
              url: "https://support.microsoft.com/en-us/training"
            },
            {
              name: "Asana Academy",
              url: "https://academy.asana.com/"
            }
          ]
        },
        {
          id: "automation",
          title: "Automation & Integration",
          description: "Learn to automate repetitive tasks and integrate different tools.",
          status: "recommended",
          skills: [
            "Zapier",
            "IFTTT",
            "Basic Scripting",
            "Workflow Automation",
            "Process Documentation"
          ],
          resources: [
            {
              name: "Zapier Learning Center",
              url: "https://zapier.com/learn"
            },
            {
              name: "Automation Tips for VAs",
              url: "https://www.process.st/virtual-assistant-automation/"
            }
          ]
        }
      ]
    },
    {
      title: "Specialized Services",
      steps: [
        {
          id: "social-media",
          title: "Social Media Management",
          description: "Learn to manage and grow social media presence for clients.",
          status: "recommended",
          skills: [
            "Content Planning",
            "Social Media Scheduling",
            "Community Management",
            "Analytics & Reporting",
            "Basic Graphic Design"
          ],
          resources: [
            {
              name: "Hootsuite Academy",
              url: "https://education.hootsuite.com/"
            },
            {
              name: "Buffer's Social Media Marketing Guide",
              url: "https://buffer.com/library/social-media-marketing/"
            }
          ]
        },
        {
          id: "customer-service",
          title: "Customer Service Excellence",
          description: "Develop strong customer service skills for client support.",
          status: "recommended",
          skills: [
            "Ticket Management",
            "Customer Support Tools",
            "Problem Resolution",
            "FAQ Creation",
            "Service Standards"
          ],
          resources: [
            {
              name: "HubSpot Customer Service Training",
              url: "https://academy.hubspot.com/courses/customer-service"
            },
            {
              name: "Zendesk Customer Service Guide",
              url: "https://www.zendesk.com/blog/customer-service-skills/"
            }
          ]
        }
      ]
    },
    {
      title: "Business Operations",
      steps: [
        {
          id: "business-setup",
          title: "Setting Up Your VA Business",
          description: "Learn how to establish and run your virtual assistant business.",
          status: "required",
          skills: [
            "Business Planning",
            "Service Packaging",
            "Pricing Strategies",
            "Client Contracts",
            "Time Management"
          ],
          resources: [
            {
              name: "Small Business Administration Guide",
              url: "https://www.sba.gov/business-guide"
            },
            {
              name: "Freelancers Union Resources",
              url: "https://www.freelancersunion.org/resources/"
            }
          ]
        },
        {
          id: "client-management",
          title: "Client Acquisition & Management",
          description: "Develop skills for finding and maintaining client relationships.",
          status: "required",
          skills: [
            "Lead Generation",
            "Proposal Writing",
            "Client Onboarding",
            "Relationship Building",
            "Conflict Resolution"
          ],
          resources: [
            {
              name: "Upwork - Winning Client Proposals",
              url: "https://www.upwork.com/resources/how-to-write-proposals"
            },
            {
              name: "Client Management Best Practices",
              url: "https://www.freshbooks.com/blog/client-management"
            }
          ]
        }
      ]
    }
  ]
};