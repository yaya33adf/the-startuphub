import { JobRoadmap } from "@/types/roadmap";

export const digitalMarketingRoadmap: JobRoadmap = {
  title: "Digital Marketing Roadmap",
  description: "A comprehensive guide to becoming a Digital Marketing Professional",
  sections: [
    {
      title: "1. Marketing Fundamentals",
      steps: [
        {
          id: "marketing-basics",
          title: "Marketing Basics",
          description: "Learn core marketing principles and strategies",
          status: "required",
          skills: [
            "Marketing Principles",
            "Consumer Behavior",
            "Market Research",
            "Brand Strategy",
            "Marketing Analytics"
          ],
          resources: [
            {
              name: "Google Digital Marketing Course",
              url: "https://learndigital.withgoogle.com/digitalgarage"
            }
          ]
        },
        {
          id: "digital-channels",
          title: "Digital Marketing Channels",
          description: "Master various digital marketing channels",
          status: "required",
          skills: [
            "Social Media Marketing",
            "Email Marketing",
            "Content Marketing",
            "SEO",
            "PPC Advertising"
          ],
          resources: [
            {
              name: "HubSpot Academy",
              url: "https://academy.hubspot.com"
            }
          ]
        }
      ]
    },
    {
      title: "2. Advanced Digital Marketing",
      steps: [
        {
          id: "analytics-tools",
          title: "Analytics & Tools",
          description: "Learn essential digital marketing tools",
          status: "required",
          skills: [
            "Google Analytics",
            "Google Ads",
            "Social Media Analytics",
            "Marketing Automation",
            "CRM Systems"
          ],
          resources: [
            {
              name: "Google Analytics Academy",
              url: "https://analytics.google.com/analytics/academy/"
            }
          ]
        },
        {
          id: "strategy-optimization",
          title: "Strategy & Optimization",
          description: "Advanced marketing strategy and optimization",
          status: "recommended",
          skills: [
            "A/B Testing",
            "Conversion Rate Optimization",
            "Marketing Attribution",
            "Budget Management",
            "ROI Analysis"
          ],
          resources: [
            {
              name: "CXL Institute",
              url: "https://cxl.com/institute/"
            }
          ]
        }
      ]
    }
  ]
};