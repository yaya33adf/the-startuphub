import { JobRoadmap } from "@/types/roadmap";
import { copywriterRoadmap } from "../copywriter";
import { academicWriterRoadmap } from "../academic-writer";
import { blogWriterRoadmap } from "../blog-writer";
import { ghostwriterRoadmap } from "../ghostwriter";

export const writingRoadmaps: Record<string, JobRoadmap> = {
  "copywriter": copywriterRoadmap,
  "academic-writer": academicWriterRoadmap,
  "blog-writer": blogWriterRoadmap,
  "ghostwriter": ghostwriterRoadmap
};