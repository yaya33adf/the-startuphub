import { JobRoadmap } from "@/types/roadmap";
import { fundamentals } from "./sections/fundamentals";
import { technicalSkills } from "./sections/technical-skills";
import { specialization } from "./sections/specialization";
import { businessSkills } from "./sections/business-skills";

export const localizationSpecialistRoadmap: JobRoadmap = {
  title: "Localization Specialist",
  description: "A comprehensive guide to becoming a successful Localization Specialist, covering language expertise, cultural knowledge, technical tools, and project management.",
  sections: [
    fundamentals,
    technicalSkills,
    specialization,
    businessSkills
  ]
};