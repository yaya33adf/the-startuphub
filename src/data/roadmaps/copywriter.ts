import { JobRoadmap } from "@/types/roadmap";

export const copywriterRoadmap: JobRoadmap = {
  title: "Copywriting Roadmap",
  description: "A comprehensive guide to becoming a professional copywriter",
  sections: [
    {
      title: "1. Writing Fundamentals",
      steps: [
        {
          id: "writing-basics",
          title: "Writing Basics",
          description: "Master the essential elements of effective writing",
          status: "required",
          skills: [
            "Grammar & Punctuation",
            "Sentence Structure",
            "Paragraph Flow",
            "Writing Style",
            "Proofreading"
          ],
          resources: [
            {
              name: "Grammarly Writing Handbook",
              url: "https://www.grammarly.com/handbook"
            },
            {
              name: "Hemingway Editor",
              url: "https://hemingwayapp.com/"
            },
            {
              name: "The Elements of Style",
              url: "https://www.gutenberg.org/files/37134/37134-h/37134-h.htm"
            }
          ]
        },
        {
          id: "copywriting-principles",
          title: "Copywriting Principles",
          description: "Learn the fundamental principles of persuasive copywriting",
          status: "required",
          skills: [
            "Headlines & Hooks",
            "Persuasive Writing",
            "Call to Action",
            "Emotional Triggers",
            "Brand Voice"
          ],
          resources: [
            {
              name: "Copyblogger Academy",
              url: "https://copyblogger.com/blog/"
            },
            {
              name: "The Boron Letters",
              url: "https://www.amazon.com/Boron-Letters-Gary-C-Halbert/dp/1484825985"
            }
          ]
        }
      ]
    },
    {
      title: "2. Marketing & Psychology",
      steps: [
        {
          id: "marketing-basics",
          title: "Marketing Fundamentals",
          description: "Understand key marketing concepts and consumer behavior",
          status: "required",
          skills: [
            "Target Audience Analysis",
            "Marketing Psychology",
            "Consumer Behavior",
            "Market Research",
            "Value Proposition"
          ],
          resources: [
            {
              name: "HubSpot Marketing Course",
              url: "https://academy.hubspot.com/courses/digital-marketing"
            },
            {
              name: "Psychology Today Marketing Articles",
              url: "https://www.psychologytoday.com/us/topics/marketing"
            }
          ]
        },
        {
          id: "content-strategy",
          title: "Content Strategy",
          description: "Learn to develop effective content strategies",
          status: "recommended",
          skills: [
            "Content Planning",
            "Sales Funnel",
            "Customer Journey",
            "Content Types",
            "Distribution Channels"
          ],
          resources: [
            {
              name: "Content Marketing Institute",
              url: "https://contentmarketinginstitute.com/"
            },
            {
              name: "Moz Content Strategy Guide",
              url: "https://moz.com/beginners-guide-to-content-marketing"
            }
          ]
        }
      ]
    },
    {
      title: "3. Specialized Copywriting",
      steps: [
        {
          id: "digital-copywriting",
          title: "Digital Copywriting",
          description: "Master writing for digital platforms",
          status: "required",
          skills: [
            "SEO Copywriting",
            "Social Media Copy",
            "Email Marketing",
            "Landing Pages",
            "Web Content"
          ],
          resources: [
            {
              name: "SEMrush Writing Course",
              url: "https://www.semrush.com/academy/"
            },
            {
              name: "MailChimp Email Guide",
              url: "https://mailchimp.com/resources/email-marketing-guide/"
            }
          ]
        },
        {
          id: "advanced-techniques",
          title: "Advanced Techniques",
          description: "Learn advanced copywriting techniques and specializations",
          status: "recommended",
          skills: [
            "Direct Response",
            "Brand Storytelling",
            "UX Writing",
            "Technical Writing",
            "Video Scripts"
          ],
          resources: [
            {
              name: "UX Writing Hub",
              url: "https://uxwritinghub.com/"
            },
            {
              name: "Storytelling for Brands",
              url: "https://www.coursera.org/learn/brand-storytelling"
            }
          ]
        }
      ]
    }
  ]
};