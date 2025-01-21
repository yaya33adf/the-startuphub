import { JobRoadmap } from "@/types/roadmap";
import { digitalMarketingRoadmap } from "../digital-marketing";
import { seoRoadmap } from "../seo";
import { leadGenerationRoadmap } from "../lead-generation";

export const marketingRoadmaps: Record<string, JobRoadmap> = {
  "digital-marketing": digitalMarketingRoadmap,
  "seo-specialist": seoRoadmap,
  "lead-generation-specialist": leadGenerationRoadmap,
};