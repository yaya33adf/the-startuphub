import { JobRoadmap } from "@/types/roadmap";
import { lifeCoachRoadmap } from "../life-coach";
import { personalTrainerRoadmap } from "../personal-trainer";
import { travelPlannerRoadmap } from "../travel-planner";
import { personalChefRoadmap } from "../personal-chef";

export const personalLifestyleRoadmaps: Record<string, JobRoadmap> = {
  "life-coach": lifeCoachRoadmap,
  "personal-trainer": personalTrainerRoadmap,
  "travel-planner": travelPlannerRoadmap,
  "personal-chef": personalChefRoadmap
};