import { JobRoadmap } from "@/types/roadmap";
import { personalChefRoadmap } from "../personal-chef";
import { personalStylistRoadmap } from "../personal-stylist";
import { personalTrainerRoadmap } from "../personal-trainer";
import { travelPlannerRoadmap } from "../travel-planner";
import { eventPlannerRoadmap } from "../event-planner";

export const personalLifestyleRoadmaps: Record<string, JobRoadmap> = {
  "personal-chef": personalChefRoadmap,
  "personal-stylist": personalStylistRoadmap,
  "personal-trainer": personalTrainerRoadmap,
  "travel-planner": travelPlannerRoadmap,
  "event-planner": eventPlannerRoadmap
};