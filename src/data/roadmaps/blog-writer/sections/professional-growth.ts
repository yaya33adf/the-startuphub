import { RoadmapSection } from "@/types/roadmap";

export const professionalGrowthSection: RoadmapSection = {
  title: "4. Professional Growth",
  steps: [
    {
      id: "analytics-measurement",
      title: "Analytics & Measurement",
      description: "Learn to measure and analyze blog performance",
      status: "recommended",
      skills: [
        "Google Analytics",
        "Content Performance Metrics",
        "User Engagement Analysis",
        "A/B Testing",
        "ROI Measurement"
      ],
      resources: [
        {
          name: "Google Analytics Academy",
          url: "https://analytics.google.com/analytics/academy/"
        }
      ]
    },
    {
      id: "business-development",
      title: "Business Development",
      description: "Build a successful blog writing business",
      status: "optional",
      skills: [
        "Client Management",
        "Portfolio Building",
        "Pricing Strategy",
        "Personal Branding",
        "Networking"
      ],
      resources: [
        {
          name: "Freelance Writers Den",
          url: "https://freelancewritersden.com/"
        }
      ]
    }
  ]
};