import { RoadmapSection } from "@/types/roadmap";

export const clientManagementSection: RoadmapSection = {
  title: "Client Management",
  steps: [
    {
      id: "ep-7",
      title: "Client Communication",
      description: "Effective communication strategies and managing client expectations.",
      status: "required",
      skills: ["Communication Skills", "Expectation Management", "Client Relations"],
      resources: [
        {
          name: "Client Communication Guide",
          url: "https://www.eventplannersassociation.com/client-communication"
        }
      ]
    },
    {
      id: "ep-8",
      title: "Proposal Development",
      description: "Creating compelling event proposals and presentations.",
      status: "recommended",
      skills: ["Proposal Writing", "Presentation Skills", "Package Development"],
      resources: [
        {
          name: "Event Proposal Writing",
          url: "https://www.socialtables.com/blog/event-planning/event-proposal"
        }
      ]
    }
  ]
};