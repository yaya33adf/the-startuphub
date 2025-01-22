import { RoadmapSection } from "@/types/roadmap";

export const specializedCopywritingSection: RoadmapSection = {
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
        }
      ]
    }
  ]
};