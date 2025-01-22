import { JobRoadmap } from "@/types/roadmap";
import { fundamentalsSection } from "./sections/fundamentals";
import { propertyOperationsSection } from "./sections/property-operations";
import { tenantRelationsSection } from "./sections/tenant-relations";
import { businessDevelopmentSection } from "./sections/business-development";

export const propertyManagerRoadmap: JobRoadmap = {
  title: "Property Manager",
  description: "A comprehensive guide to becoming a successful property manager, covering property operations, tenant relations, and business development.",
  sections: [
    fundamentalsSection,
    propertyOperationsSection,
    tenantRelationsSection,
    businessDevelopmentSection
  ]
};