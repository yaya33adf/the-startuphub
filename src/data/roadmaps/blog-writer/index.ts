import { JobRoadmap } from "@/types/roadmap";
import { writingFundamentalsSection } from "./sections/writing-fundamentals";
import { contentStrategySection } from "./sections/content-strategy";
import { contentCreationSection } from "./sections/content-creation";
import { professionalGrowthSection } from "./sections/professional-growth";

export const blogWriterRoadmap: JobRoadmap = {
  title: "Blog Writer Roadmap",
  description: "A comprehensive guide to becoming a professional blog writer",
  sections: [
    writingFundamentalsSection,
    contentStrategySection,
    contentCreationSection,
    professionalGrowthSection
  ]
};