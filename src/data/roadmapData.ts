import { JobRoadmap } from "@/types/roadmap";
import { frontendRoadmap } from "./roadmaps/frontend";
import { backendRoadmap } from "./roadmaps/backend";
import { uiuxRoadmap } from "./roadmaps/uiux";
import { dataScienceRoadmap } from "./roadmaps/data-science";
import { devopsRoadmap } from "./roadmaps/devops";
import { mobileRoadmap } from "./roadmaps/mobile";
import { cybersecurityRoadmap } from "./roadmaps/cybersecurity";

export const roadmaps: Record<string, JobRoadmap> = {
  "frontend-developer": frontendRoadmap,
  "backend-developer": backendRoadmap,
  "uxui-designer": uiuxRoadmap,
  "data-scientist": dataScienceRoadmap,
  "devops-engineer": devopsRoadmap,
  "mobile-developer": mobileRoadmap,
  "cybersecurity-analyst": cybersecurityRoadmap
};