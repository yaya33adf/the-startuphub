import { RoadmapSection } from "@/types/roadmap";

export const fundamentalsSection: RoadmapSection = {
  title: "Travel Planning Fundamentals",
  steps: [
    {
      id: "tp-basics",
      title: "Travel Industry Basics",
      description: "Learn the fundamentals of the travel industry, including key terminology, major players, and industry trends.",
      status: "required",
      skills: ["Industry Knowledge", "Travel Terminology", "Market Research"],
      resources: [
        {
          name: "IATA Travel and Tourism Training",
          url: "https://www.iata.org/training/Pages/travel-tourism.aspx"
        },
        {
          name: "World Tourism Organization",
          url: "https://www.unwto.org/education"
        }
      ]
    },
    {
      id: "geography",
      title: "Geography and Destinations",
      description: "Develop a strong understanding of world geography, popular destinations, and cultural considerations.",
      status: "required",
      skills: ["World Geography", "Cultural Awareness", "Destination Knowledge"],
      resources: [
        {
          name: "National Geographic Travel",
          url: "https://www.nationalgeographic.com/travel"
        }
      ]
    },
    {
      id: "travel-tech",
      title: "Travel Technology",
      description: "Master essential travel planning tools, booking systems, and industry software.",
      status: "required",
      skills: ["Booking Systems", "Travel Apps", "GDS Systems"],
      resources: [
        {
          name: "Amadeus Training",
          url: "https://amadeus.com/en/training"
        }
      ]
    }
  ]
};