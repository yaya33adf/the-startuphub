import { JobRoadmap } from "@/types/roadmap";
import { fundamentalsSection } from "./sections/fundamentals";
import { marketExpertiseSection } from "./sections/market-expertise";
import { businessSkillsSection } from "./sections/business-skills";

export const realEstateAgentRoadmap: JobRoadmap = {
  title: "Real Estate Agent",
  description: "A comprehensive guide to becoming a successful real estate agent, covering licensing requirements, market expertise, and business development skills.",
  sections: [
    fundamentalsSection,
    marketExpertiseSection,
    businessSkillsSection
  ]
};