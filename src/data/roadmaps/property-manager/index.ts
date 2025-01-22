import { JobRoadmap } from "@/types/roadmap";
import { fundamentalsSection } from "./sections/fundamentals";
import { operationsSection } from "./sections/operations";
import { financialSection } from "./sections/financial";
import { businessSection } from "./sections/business";

export const propertyManagerRoadmap: JobRoadmap = {
  title: "Property Manager",
  description: "A comprehensive guide to becoming a successful property manager, covering essential skills from tenant management to financial operations.",
  sections: [
    fundamentalsSection,
    operationsSection,
    financialSection,
    businessSection
  ]
};