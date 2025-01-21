import { JobRoadmap } from "@/types/roadmap";
import { businessPlanWriterRoadmap } from "../business-plan-writer";
import { amazonFbaRoadmap } from "../amazon-fba";
import { virtualAssistantRoadmap } from "../virtual-assistant";
import { bookkeeperRoadmap } from "../bookkeeper";
import { careerCoachRoadmap } from "../career-coach";

export const businessRoadmaps: Record<string, JobRoadmap> = {
  "business-plan-writer": businessPlanWriterRoadmap,
  "amazon-fba-specialist": amazonFbaRoadmap,
  "virtual-assistant": virtualAssistantRoadmap,
  "bookkeeper": bookkeeperRoadmap,
  "career-coach": careerCoachRoadmap,
};