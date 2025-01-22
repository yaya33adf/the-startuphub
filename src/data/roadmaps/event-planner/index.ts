import { JobRoadmap } from "@/types/roadmap";
import { fundamentalsSection } from "./sections/fundamentals";
import { planningExecutionSection } from "./sections/planning-execution";
import { clientManagementSection } from "./sections/client-management";
import { businessSection } from "./sections/business";

export const eventPlannerRoadmap: JobRoadmap = {
  title: "Event Planner",
  description: "A comprehensive guide to becoming a successful event planner, covering everything from event fundamentals to business development.",
  sections: [
    fundamentalsSection,
    planningExecutionSection,
    clientManagementSection,
    businessSection
  ]
};