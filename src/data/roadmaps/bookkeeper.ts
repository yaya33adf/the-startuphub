import type { JobRoadmap } from '@/types/roadmap';

export const bookkeeperRoadmap: JobRoadmap = {
  title: "Bookkeeper",
  description: "A comprehensive guide to becoming a professional bookkeeper, covering essential accounting principles, financial software, and business practices.",
  sections: [
    {
      title: "Foundational Knowledge",
      steps: [
        {
          id: "basic-accounting",
          title: "Basic Accounting Principles",
          description: "Master fundamental accounting concepts and principles",
          status: "required",
          skills: [
            "Double-entry bookkeeping",
            "Debits and credits",
            "Chart of accounts",
            "General ledger",
            "Trial balance"
          ],
          resources: [
            {
              name: "Accounting Coach - Learn Basic Accounting",
              url: "https://www.accountingcoach.com/accounting-basics/outline"
            },
            {
              name: "Principles of Accounting",
              url: "https://www.principlesofaccounting.com/"
            }
          ]
        },
        {
          id: "financial-statements",
          title: "Financial Statements",
          description: "Learn to prepare and interpret basic financial statements",
          status: "required",
          skills: [
            "Balance sheet",
            "Income statement",
            "Cash flow statement",
            "Statement analysis"
          ],
          resources: [
            {
              name: "Corporate Finance Institute - Financial Statements",
              url: "https://corporatefinanceinstitute.com/resources/accounting/"
            }
          ]
        }
      ]
    },
    {
      title: "Technical Skills",
      steps: [
        {
          id: "accounting-software",
          title: "Accounting Software Proficiency",
          description: "Gain expertise in popular accounting software",
          status: "required",
          skills: [
            "QuickBooks",
            "Xero",
            "FreshBooks",
            "Sage 50",
            "Microsoft Excel"
          ],
          resources: [
            {
              name: "QuickBooks Online Training",
              url: "https://quickbooks.intuit.com/tutorials/"
            },
            {
              name: "Xero Central",
              url: "https://central.xero.com/"
            }
          ]
        },
        {
          id: "data-entry",
          title: "Data Entry and Management",
          description: "Develop accurate and efficient data entry skills",
          status: "required",
          skills: [
            "Touch typing",
            "Data verification",
            "Filing systems",
            "Document management",
            "Data security"
          ],
          resources: [
            {
              name: "Typing.com - Free Touch Typing Course",
              url: "https://www.typing.com/"
            }
          ]
        }
      ]
    },
    {
      title: "Professional Development",
      steps: [
        {
          id: "certifications",
          title: "Professional Certifications",
          description: "Obtain relevant certifications to enhance credibility",
          status: "recommended",
          skills: [
            "Certified Bookkeeper (CB)",
            "QuickBooks Certified ProAdvisor",
            "Xero Certified Advisor"
          ],
          resources: [
            {
              name: "AIPB Certification",
              url: "https://www.aipb.org/certification/"
            },
            {
              name: "NACPB Certification",
              url: "https://www.nacpb.org/"
            }
          ]
        },
        {
          id: "business-ethics",
          title: "Business Ethics and Compliance",
          description: "Understand ethical responsibilities and regulatory requirements",
          status: "required",
          skills: [
            "Professional ethics",
            "Tax compliance",
            "Record retention",
            "Client confidentiality",
            "Internal controls"
          ],
          resources: [
            {
              name: "IRS Small Business Resources",
              url: "https://www.irs.gov/businesses/small-businesses-self-employed"
            }
          ]
        }
      ]
    },
    {
      title: "Business Operations",
      steps: [
        {
          id: "client-management",
          title: "Client Management",
          description: "Develop client relationship and communication skills",
          status: "recommended",
          skills: [
            "Client communication",
            "Service agreements",
            "Project management",
            "Time tracking",
            "Billing procedures"
          ],
          resources: [
            {
              name: "Client Management Guide",
              url: "https://www.freshbooks.com/hub/client-management"
            }
          ]
        },
        {
          id: "specialization",
          title: "Industry Specialization",
          description: "Consider specializing in specific industries or services",
          status: "optional",
          skills: [
            "Nonprofit accounting",
            "Small business accounting",
            "E-commerce bookkeeping",
            "Real estate accounting",
            "Restaurant accounting"
          ],
          resources: [
            {
              name: "Industry-Specific Accounting Guides",
              url: "https://www.aicpa.org/resources/landing/industry-insights"
            }
          ]
        }
      ]
    }
  ]
};