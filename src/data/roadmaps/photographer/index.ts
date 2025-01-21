import { JobRoadmap } from "@/types/roadmap";
import { fundamentals } from "./sections/fundamentals";
import { technical } from "./sections/technical";
import { specialization } from "./sections/specialization";
import { business } from "./sections/business";

export const photographerRoadmap: JobRoadmap = {
  title: "Professional Photographer",
  description: "A comprehensive guide to becoming a successful professional photographer, covering technical skills, creative development, and business aspects.",
  sections: [
    fundamentals,
    technical,
    specialization,
    business
  ]
};