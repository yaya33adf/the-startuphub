import { RoadmapSection } from "@/types/roadmap";

export const fundamentalsSection: RoadmapSection = {
  title: "Event Planning Fundamentals",
  steps: [
    {
      id: "ep-1",
      title: "Event Types & Categories",
      description: "Understanding different types of events: corporate, social, weddings, conferences, etc.",
      status: "required",
      skills: ["Event Classification", "Industry Knowledge", "Event Formats"],
      resources: [
        {
          name: "Event Planning Guide",
          url: "https://www.eventmanagerblog.com/event-planning"
        },
        {
          name: "Types of Events",
          url: "https://www.socialtables.com/blog/event-planning/types-of-events"
        }
      ]
    },
    {
      id: "ep-2",
      title: "Event Design Principles",
      description: "Learn about space planning, decor, themes, and creating cohesive event experiences.",
      status: "required",
      skills: ["Space Planning", "Theme Development", "Design Principles", "Color Theory"],
      resources: [
        {
          name: "Event Design Basics",
          url: "https://www.eventbrite.com/blog/event-design-guide"
        }
      ]
    },
    {
      id: "ep-3",
      title: "Vendor Management",
      description: "Working with caterers, decorators, AV teams, and other event vendors.",
      status: "required",
      skills: ["Vendor Relations", "Contract Negotiation", "Quality Control"],
      resources: [
        {
          name: "Vendor Management Guide",
          url: "https://www.theknot.com/content/wedding-vendor-management"
        }
      ]
    }
  ]
};