import { JobRoadmap } from "@/types/roadmap";

export const leadGenerationRoadmap: JobRoadmap = {
  title: "Lead Generation Specialist Roadmap",
  description: "A comprehensive guide to becoming a successful Lead Generation Specialist",
  sections: [
    {
      title: "1. Marketing Fundamentals",
      steps: [
        {
          id: "marketing-basics",
          title: "Marketing Basics",
          description: "Master fundamental marketing concepts and principles",
          status: "required",
          skills: [
            "Marketing Strategy",
            "Target Audience Analysis",
            "Customer Journey Mapping",
            "Value Proposition",
            "Marketing Funnel"
          ],
          resources: [
            {
              name: "HubSpot Marketing Fundamentals",
              url: "https://academy.hubspot.com/courses/marketing-fundamentals"
            },
            {
              name: "Google Digital Marketing Course",
              url: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing"
            }
          ]
        },
        {
          id: "lead-gen-basics",
          title: "Lead Generation Fundamentals",
          description: "Understand core lead generation concepts and methodologies",
          status: "required",
          skills: [
            "Lead Qualification",
            "Lead Scoring",
            "Lead Nurturing",
            "Sales Pipeline Management",
            "CRM Basics"
          ],
          resources: [
            {
              name: "Salesforce Lead Generation Trail",
              url: "https://trailhead.salesforce.com/content/learn/modules/lead_basics"
            },
            {
              name: "HubSpot Lead Generation Course",
              url: "https://academy.hubspot.com/courses/lead-generation"
            }
          ]
        }
      ]
    },
    {
      title: "2. Digital Marketing Tools",
      steps: [
        {
          id: "crm-tools",
          title: "CRM and Sales Tools",
          description: "Learn essential CRM platforms and sales automation tools",
          status: "required",
          skills: [
            "Salesforce",
            "HubSpot CRM",
            "Pipedrive",
            "Sales Automation",
            "Email Marketing Tools"
          ],
          resources: [
            {
              name: "Salesforce Trailhead",
              url: "https://trailhead.salesforce.com/"
            },
            {
              name: "HubSpot CRM Certification",
              url: "https://academy.hubspot.com/courses/crm-implementation"
            }
          ]
        },
        {
          id: "lead-gen-tools",
          title: "Lead Generation Tools",
          description: "Master popular lead generation and prospecting tools",
          status: "required",
          skills: [
            "LinkedIn Sales Navigator",
            "ZoomInfo",
            "Hunter.io",
            "Lead Generation Software",
            "Prospecting Tools"
          ],
          resources: [
            {
              name: "LinkedIn Sales Solutions Training",
              url: "https://business.linkedin.com/sales-solutions/training"
            },
            {
              name: "B2B Lead Generation Tools Guide",
              url: "https://blog.hubspot.com/marketing/lead-generation-tools"
            }
          ]
        }
      ]
    },
    {
      title: "3. Lead Generation Strategies",
      steps: [
        {
          id: "inbound-marketing",
          title: "Inbound Marketing",
          description: "Learn inbound marketing strategies for lead generation",
          status: "required",
          skills: [
            "Content Marketing",
            "SEO",
            "Social Media Marketing",
            "Email Marketing",
            "Landing Page Optimization"
          ],
          resources: [
            {
              name: "HubSpot Inbound Marketing Course",
              url: "https://academy.hubspot.com/courses/inbound"
            },
            {
              name: "Moz SEO Training",
              url: "https://academy.moz.com/"
            }
          ]
        },
        {
          id: "outbound-strategies",
          title: "Outbound Strategies",
          description: "Master outbound lead generation techniques",
          status: "recommended",
          skills: [
            "Cold Calling",
            "Cold Email Outreach",
            "LinkedIn Prospecting",
            "Direct Mail Campaigns",
            "Event Marketing"
          ],
          resources: [
            {
              name: "Sales Prospecting Course",
              url: "https://www.saleshacker.com/courses/prospecting"
            },
            {
              name: "Cold Email Mastery",
              url: "https://www.close.com/cold-email"
            }
          ]
        }
      ]
    },
    {
      title: "4. Analytics and Optimization",
      steps: [
        {
          id: "analytics",
          title: "Marketing Analytics",
          description: "Learn to measure and analyze lead generation performance",
          status: "required",
          skills: [
            "Google Analytics",
            "CRM Analytics",
            "Conversion Rate Optimization",
            "A/B Testing",
            "ROI Analysis"
          ],
          resources: [
            {
              name: "Google Analytics Academy",
              url: "https://analytics.google.com/analytics/academy/"
            },
            {
              name: "CXL Conversion Optimization Course",
              url: "https://cxl.com/institute/courses/conversion-optimization/"
            }
          ]
        },
        {
          id: "reporting",
          title: "Reporting and Documentation",
          description: "Master reporting and documentation practices",
          status: "recommended",
          skills: [
            "Data Visualization",
            "Report Creation",
            "KPI Tracking",
            "Performance Analysis",
            "Stakeholder Communication"
          ],
          resources: [
            {
              name: "Data Visualization Course",
              url: "https://www.tableau.com/learn/training"
            },
            {
              name: "Business Analytics Fundamentals",
              url: "https://www.coursera.org/learn/business-analytics"
            }
          ]
        }
      ]
    }
  ]
};