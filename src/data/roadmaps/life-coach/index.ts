import { JobRoadmap } from "@/types/roadmap";
import { fundamentals } from "./sections/fundamentals";
import { specialization } from "./sections/specialization";
import { clientManagement } from "./sections/client-management";
import { business } from "./sections/business";

export const lifeCoachRoadmap: JobRoadmap = {
  title: "Life Coach",
  description: "A comprehensive guide to becoming a professional life coach, covering coaching fundamentals, specializations, client management, and business development.",
  sections: [
    fundamentals,
    specialization,
    clientManagement,
    business
  ]
};