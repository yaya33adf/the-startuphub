import { JobRoadmap } from "@/types/roadmap";
import { languageFoundationSection } from "./sections/languageFoundation";
import { translationSkillsSection } from "./sections/translationSkills";
import { specializationSection } from "./sections/specialization";
import { businessDevelopmentSection } from "./sections/businessDevelopment";

export const translatorRoadmap: JobRoadmap = {
  title: "Multilingual Translator Roadmap",
  description: "A comprehensive guide to becoming a professional translator specializing in multiple languages, covering language mastery, translation techniques, specialization, and business development.",
  sections: [
    languageFoundationSection,
    translationSkillsSection,
    specializationSection,
    businessDevelopmentSection
  ]
};