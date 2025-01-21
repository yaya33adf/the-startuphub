import { JobRoadmap } from "@/types/roadmap";

export const digitalMarketingRoadmap: JobRoadmap = {
  title: "Digital Marketing Professional",
  description: "A comprehensive guide to becoming a successful digital marketing professional, covering essential skills, tools, and strategies.",
  sections: [
    {
      title: "Digital Marketing Fundamentals",
      steps: [
        {
          id: "dm-basics",
          title: "Marketing Basics",
          description: "Understanding core marketing concepts and principles",
          skills: ["Marketing Mix (4Ps)", "Target Audience Analysis", "Brand Positioning", "Marketing Strategy"],
          status: "required",
          resources: [
            {
              name: "HubSpot Academy Marketing Course",
              url: "https://academy.hubspot.com/courses/digital-marketing"
            },
            {
              name: "Google Digital Marketing Course",
              url: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing"
            }
          ]
        },
        {
          id: "dm-analytics",
          title: "Digital Analytics",
          description: "Learn to measure and analyze digital marketing performance",
          skills: ["Google Analytics", "Data Analysis", "KPI Tracking", "Conversion Rate Optimization"],
          status: "required",
          resources: [
            {
              name: "Google Analytics Academy",
              url: "https://analytics.google.com/analytics/academy/"
            }
          ]
        }
      ]
    },
    {
      title: "Content Marketing & SEO",
      steps: [
        {
          id: "content-marketing",
          title: "Content Marketing",
          description: "Creating and distributing valuable content",
          skills: ["Content Strategy", "Content Creation", "Editorial Calendar", "Content Distribution"],
          status: "required",
          resources: [
            {
              name: "Content Marketing Institute",
              url: "https://contentmarketinginstitute.com/learning/"
            }
          ]
        },
        {
          id: "seo",
          title: "Search Engine Optimization",
          description: "Optimizing content for search engines",
          skills: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
          status: "required",
          resources: [
            {
              name: "Moz SEO Learning Center",
              url: "https://moz.com/beginners-guide-to-seo"
            }
          ]
        }
      ]
    },
    {
      title: "Social Media Marketing",
      steps: [
        {
          id: "social-media",
          title: "Social Media Strategy",
          description: "Managing social media presence and campaigns",
          skills: ["Platform Selection", "Content Planning", "Community Management", "Social Media Analytics"],
          status: "required",
          resources: [
            {
              name: "Hootsuite Academy",
              url: "https://education.hootsuite.com/"
            }
          ]
        },
        {
          id: "paid-social",
          title: "Paid Social Advertising",
          description: "Running paid campaigns on social platforms",
          skills: ["Ad Campaign Setup", "Audience Targeting", "Budget Management", "A/B Testing"],
          status: "recommended",
          resources: [
            {
              name: "Facebook Blueprint",
              url: "https://www.facebook.com/business/learn"
            }
          ]
        }
      ]
    },
    {
      title: "Email Marketing",
      steps: [
        {
          id: "email-marketing",
          title: "Email Marketing Fundamentals",
          description: "Creating effective email marketing campaigns",
          skills: ["Email Strategy", "List Building", "Email Design", "Automation"],
          status: "required",
          resources: [
            {
              name: "Mailchimp Marketing Library",
              url: "https://mailchimp.com/resources/"
            }
          ]
        },
        {
          id: "email-automation",
          title: "Marketing Automation",
          description: "Setting up automated marketing workflows",
          skills: ["Workflow Design", "Lead Nurturing", "Segmentation", "Personalization"],
          status: "recommended"
        }
      ]
    },
    {
      title: "Paid Advertising",
      steps: [
        {
          id: "ppc",
          title: "Pay-Per-Click Advertising",
          description: "Managing paid search and display campaigns",
          skills: ["Google Ads", "Keyword Planning", "Ad Copywriting", "Campaign Optimization"],
          status: "recommended",
          resources: [
            {
              name: "Google Ads Certification",
              url: "https://skillshop.withgoogle.com/"
            }
          ]
        },
        {
          id: "display-ads",
          title: "Display & Programmatic",
          description: "Understanding display advertising and programmatic buying",
          skills: ["Ad Networks", "Targeting Options", "Creative Design", "Bid Management"],
          status: "optional"
        }
      ]
    }
  ]
};