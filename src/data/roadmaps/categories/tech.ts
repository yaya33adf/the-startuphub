import { JobRoadmap } from "@/types/roadmap";
import { dataScienceRoadmap } from "../data-science";
import { devopsRoadmap } from "../devops";
import { cybersecurityRoadmap } from "../cybersecurity";

export const techRoadmaps: Record<string, JobRoadmap> = {
  "data-scientist": dataScienceRoadmap,
  "devops-engineer": devopsRoadmap,
  "cybersecurity-analyst": cybersecurityRoadmap,
};