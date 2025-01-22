import { JobRoadmap } from "@/types/roadmap";
import { fundamentals } from "./sections/fundamentals";
import { business } from "./sections/business";
import { specialization } from "./sections/specialization";
import { clientManagement } from "./sections/client-management";

export const personalStylistRoadmap: JobRoadmap = {
  title: "Personal Stylist",
  description: "A comprehensive guide to becoming a successful Personal Stylist, covering fashion fundamentals, business practices, and client management.",
  sections: [
    fundamentals,
    specialization,
    clientManagement,
    business,
  ]
};