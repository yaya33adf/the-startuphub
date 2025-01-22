import { JobRoadmap } from "@/types/roadmap";
import { fundamentalsSection } from "./sections/fundamentals";
import { clientManagementSection } from "./sections/client-management";
import { specializationSection } from "./sections/specialization";
import { businessSection } from "./sections/business";

export const ghostwriterRoadmap: JobRoadmap = {
  title: "Ghostwriter Roadmap",
  description: "A comprehensive guide to becoming a professional ghostwriter, covering essential writing skills, client management, specialization, and business development.",
  sections: [
    fundamentalsSection,
    clientManagementSection,
    specializationSection,
    businessSection
  ]
};