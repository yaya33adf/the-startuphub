import { JobRoadmap } from "@/types/roadmap";
import { fundamentalsSection } from "./sections/fundamentals";
import { enginesSection } from "./sections/engines";
import { advancedSection } from "./sections/advanced";

export const gameDeveloperRoadmap: JobRoadmap = {
  title: "Game Developer Roadmap",
  description: "A comprehensive guide to becoming a professional game developer",
  sections: [
    fundamentalsSection,
    enginesSection,
    advancedSection
  ]
};