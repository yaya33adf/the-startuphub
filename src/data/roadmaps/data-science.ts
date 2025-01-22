import { JobRoadmap } from "@/types/roadmap";
import { fundamentalsSection } from "./data-science/sections/fundamentals";
import { advancedSection } from "./data-science/sections/advanced";

export const dataScienceRoadmap: JobRoadmap = {
  title: "Data Scientist Roadmap",
  description: "A comprehensive guide to becoming a Data Scientist",
  sections: [
    fundamentalsSection,
    advancedSection
  ]
};