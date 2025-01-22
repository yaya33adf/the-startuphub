import { JobRoadmap } from "@/types/roadmap";
import { fundamentalsSection } from "./sections/fundamentals";
import { technicalSection } from "./sections/technical";
import { businessSection } from "./sections/business";
import { specializationSection } from "./sections/specialization";

export const audioEditorRoadmap: JobRoadmap = {
  title: "Audio Editor",
  description: "A comprehensive guide to becoming a professional audio editor, covering fundamental concepts, technical skills, business practices, and specializations in the field.",
  sections: [
    fundamentalsSection,
    technicalSection,
    businessSection,
    specializationSection
  ]
};