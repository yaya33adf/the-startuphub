import { RoadmapSection } from "@/types/roadmap";

export const businessSection: RoadmapSection = {
  title: "4. Business Development",
  steps: [
    {
      id: "business-setup",
      title: "Business Setup",
      description: "Establish and grow your ghostwriting business",
      status: "recommended",
      skills: [
        "Business Planning",
        "Service Packaging",
        "Contract Writing",
        "Pricing Strategy",
        "Portfolio Building"
      ],
      resources: [
        {
          name: "Freelance Business Guide",
          url: "https://www.freelancersunion.org/resources/"
        }
      ]
    },
    {
      id: "marketing",
      title: "Marketing & Networking",
      description: "Market your ghostwriting services effectively",
      status: "recommended",
      skills: [
        "Personal Branding",
        "Network Building",
        "Social Media Presence",
        "Client Acquisition",
        "Testimonial Collection"
      ],
      resources: [
        {
          name: "Marketing for Writers",
          url: "https://www.writersmarket.com/"
        }
      ]
    }
  ]
};