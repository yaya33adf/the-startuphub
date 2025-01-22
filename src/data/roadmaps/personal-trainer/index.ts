import { JobRoadmap } from "@/types/roadmap";
import { fundamentalsSection } from "./sections/fundamentals";
import { specializationSection } from "./sections/specialization";
import { clientManagementSection } from "./sections/client-management";
import { businessSection } from "./sections/business";

export const personalTrainerRoadmap: JobRoadmap = {
  title: "Personal Trainer",
  description: "A comprehensive guide to becoming a successful personal trainer, covering fitness fundamentals, specializations, client management, and business development.",
  sections: [
    fundamentalsSection,
    specializationSection,
    clientManagementSection,
    businessSection
  ]
};