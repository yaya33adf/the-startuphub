import { RoadmapSection } from "@/types/roadmap";

export const planningSkillsSection: RoadmapSection = {
  title: "Planning and Logistics",
  steps: [
    {
      id: "itinerary",
      title: "Itinerary Development",
      description: "Learn to create detailed, efficient, and engaging travel itineraries that meet client needs and preferences.",
      status: "required",
      skills: ["Itinerary Planning", "Time Management", "Route Optimization"],
      resources: [
        {
          name: "Professional Travel Planning Guide",
          url: "https://www.travelpulse.com/articles/travel-agents"
        }
      ]
    },
    {
      id: "logistics",
      title: "Travel Logistics",
      description: "Master the coordination of transportation, accommodations, and activities.",
      status: "required",
      skills: ["Transportation Planning", "Accommodation Booking", "Activity Coordination"],
      resources: [
        {
          name: "Travel Logistics Best Practices",
          url: "https://www.travelweekly.com/Travel-News/Travel-Agent-Issues"
        }
      ]
    },
    {
      id: "risk-management",
      title: "Risk Management",
      description: "Understand travel insurance, safety considerations, and contingency planning.",
      status: "recommended",
      skills: ["Risk Assessment", "Travel Insurance", "Emergency Planning"],
      resources: [
        {
          name: "Travel Risk Management",
          url: "https://www.internationalsos.com/risk-management"
        }
      ]
    }
  ]
};