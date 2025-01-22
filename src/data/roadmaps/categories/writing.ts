import { JobRoadmap } from "@/types/roadmap";
import { blogWriterRoadmap } from "../blog-writer";
import { ghostwriterRoadmap } from "../ghostwriter";
import { copywriterRoadmap } from "../copywriter";

export const writingRoadmaps: Record<string, JobRoadmap> = {
  "blog-writer": blogWriterRoadmap,
  "ghostwriter": ghostwriterRoadmap,
  "copywriter": copywriterRoadmap
};