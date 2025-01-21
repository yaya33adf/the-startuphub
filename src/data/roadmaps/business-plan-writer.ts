import type { JobRoadmap } from '@/types/roadmap';

export const businessPlanWriterRoadmap: JobRoadmap = {
  title: "Business Plan Writer",
  description: "A comprehensive guide to becoming a professional business plan writer, covering essential skills from financial analysis to strategic planning.",
  sections: [
    {
      title: "Business Fundamentals",
      steps: [
        {
          id: "bpw-1",
          title: "Business Concepts",
          description: "Master core business concepts and terminology essential for business plan writing",
          status: "required",
          skills: [
            "Business Models",
            "Market Analysis",
            "Competitive Analysis",
            "Business Strategy"
          ],
          resources: [
            {
              name: "Harvard Business Essentials",
              url: "https://online.hbs.edu/courses/"
            },
            {
              name: "Business Model Canvas",
              url: "https://www.strategyzer.com/canvas/business-model-canvas"
            }
          ]
        },
        {
          id: "bpw-2",
          title: "Financial Analysis",
          description: "Learn to create and analyze financial projections and statements",
          status: "required",
          skills: [
            "Financial Modeling",
            "Cash Flow Analysis",
            "Break-even Analysis",
            "Financial Ratios"
          ],
          resources: [
            {
              name: "Financial Modeling Course",
              url: "https://corporatefinanceinstitute.com/resources/knowledge/modeling/"
            }
          ]
        },
        {
          id: "bpw-3",
          title: "Market Research",
          description: "Develop skills in conducting thorough market research and analysis",
          status: "required",
          skills: [
            "Data Collection",
            "Market Size Analysis",
            "Industry Analysis",
            "Consumer Research"
          ],
          resources: [
            {
              name: "Market Research Techniques",
              url: "https://www.marketresearch.com/education/"
            }
          ]
        }
      ]
    },
    {
      title: "Writing & Documentation",
      steps: [
        {
          id: "bpw-4",
          title: "Business Writing",
          description: "Master professional business writing and documentation",
          status: "required",
          skills: [
            "Professional Writing",
            "Document Structure",
            "Executive Summaries",
            "Proposal Writing"
          ],
          resources: [
            {
              name: "Business Writing Essentials",
              url: "https://www.coursera.org/learn/business-writing"
            }
          ]
        },
        {
          id: "bpw-5",
          title: "Business Plan Components",
          description: "Learn to craft each section of a business plan effectively",
          status: "required",
          skills: [
            "Executive Summary Writing",
            "Business Description",
            "Marketing Plan",
            "Operations Plan"
          ],
          resources: [
            {
              name: "SBA Business Plan Guide",
              url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan"
            }
          ]
        }
      ]
    },
    {
      title: "Professional Development",
      steps: [
        {
          id: "bpw-6",
          title: "Industry Specialization",
          description: "Develop expertise in specific industries or business types",
          status: "recommended",
          skills: [
            "Industry Analysis",
            "Sector Expertise",
            "Regulatory Knowledge",
            "Trend Analysis"
          ],
          resources: [
            {
              name: "Industry Reports",
              url: "https://www.ibisworld.com/industry-trends/"
            }
          ]
        },
        {
          id: "bpw-7",
          title: "Client Management",
          description: "Learn to work effectively with clients and manage projects",
          status: "recommended",
          skills: [
            "Client Communication",
            "Project Management",
            "Requirement Gathering",
            "Presentation Skills"
          ],
          resources: [
            {
              name: "Client Management Skills",
              url: "https://www.udemy.com/course/client-management/"
            }
          ]
        },
        {
          id: "bpw-8",
          title: "Tools & Software",
          description: "Master essential tools and software for business plan writing",
          status: "recommended",
          skills: [
            "Financial Software",
            "Project Management Tools",
            "Document Processing",
            "Presentation Software"
          ],
          resources: [
            {
              name: "Business Planning Software Guide",
              url: "https://www.capterra.com/business-plan-software/"
            }
          ]
        }
      ]
    }
  ]
};