import { JobRoadmap } from "@/types/roadmap";
import { lifeCoachRoadmap } from "../life-coach";
import { personalTrainerRoadmap } from "../personal-trainer";

export const personalLifestyleRoadmaps: Record<string, JobRoadmap> = {
  "life-coach": lifeCoachRoadmap,
  "personal-trainer": personalTrainerRoadmap
};