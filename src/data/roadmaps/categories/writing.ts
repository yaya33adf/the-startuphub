import { JobRoadmap } from "@/types/roadmap";
import { copywriterRoadmap } from "../copywriter";
import { academicWriterRoadmap } from "../academic-writer";

export const writingRoadmaps: Record<string, JobRoadmap> = {
  "copywriter": copywriterRoadmap,
  "academic-writer": academicWriterRoadmap
};