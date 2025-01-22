import type { JobRoadmap } from "@/types/roadmap";
import { fundamentalsSection } from "./sections/fundamentals";
import { specializationSection } from "./sections/specialization";
import { businessSection } from "./sections/business";

export const legalConsultantRoadmap: JobRoadmap = {
  title: "Legal Consultant",
  description: "A comprehensive guide to becoming a successful legal consultant, covering essential legal knowledge, specialization areas, and business development skills.",
  sections: [
    fundamentalsSection,
    specializationSection,
    businessSection
  ]
};