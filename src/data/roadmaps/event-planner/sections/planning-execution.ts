import { RoadmapSection } from "@/types/roadmap";

export const planningExecutionSection: RoadmapSection = {
  title: "Planning & Execution",
  steps: [
    {
      id: "ep-4",
      title: "Event Timeline Creation",
      description: "Developing detailed event timelines and production schedules.",
      status: "required",
      skills: ["Timeline Management", "Schedule Creation", "Task Delegation"],
      resources: [
        {
          name: "Event Timeline Templates",
          url: "https://www.eventbrite.com/blog/event-planning-timeline-ds00"
        }
      ]
    },
    {
      id: "ep-5",
      title: "Budgeting & Financial Management",
      description: "Creating and managing event budgets, cost control, and financial reporting.",
      status: "required",
      skills: ["Budget Planning", "Cost Analysis", "Financial Management"],
      resources: [
        {
          name: "Event Budgeting Guide",
          url: "https://www.eventbrite.com/blog/event-budget-guide-ds00"
        }
      ]
    },
    {
      id: "ep-6",
      title: "Risk Management & Contingency Planning",
      description: "Identifying potential risks and developing backup plans.",
      status: "required",
      skills: ["Risk Assessment", "Crisis Management", "Problem Solving"],
      resources: [
        {
          name: "Event Risk Management",
          url: "https://www.eventmanagerblog.com/event-risk-management"
        }
      ]
    }
  ]
};