import { JobRoadmap } from "@/types/roadmap";
import { writingFundamentalsSection } from "./sections/writing-fundamentals";
import { marketingPsychologySection } from "./sections/marketing-psychology";
import { specializedCopywritingSection } from "./sections/specialized-copywriting";

export const copywriterRoadmap: JobRoadmap = {
  title: "Copywriting Roadmap",
  description: "A comprehensive guide to becoming a professional copywriter",
  sections: [
    writingFundamentalsSection,
    marketingPsychologySection,
    specializedCopywritingSection
  ]
};