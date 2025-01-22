import { JobRoadmap } from "@/types/roadmap";
import { fundamentalsSection } from "./sections/fundamentals";
import { planningSkillsSection } from "./sections/planning-skills";
import { clientManagementSection } from "./sections/client-management";
import { businessSection } from "./sections/business";

export const travelPlannerRoadmap: JobRoadmap = {
  title: "Travel Planner",
  description: "A comprehensive guide to becoming a professional travel planner, covering essential skills from industry fundamentals to business development.",
  sections: [
    fundamentalsSection,
    planningSkillsSection,
    clientManagementSection,
    businessSection
  ]
};