import { RoadmapSection } from "@/types/roadmap";

export const specialization: RoadmapSection = {
  title: "Specializations & Advanced Topics",
  steps: [
    {
      id: "weight-management",
      title: "Weight Management",
      description: "Specialize in weight management and sustainable lifestyle changes.",
      status: "optional",
      skills: ["Weight Loss Strategies", "Body Composition", "Metabolic Health"],
      resources: [
        {
          name: "Weight Management Certification",
          url: "https://www.nasm.org/weight-loss"
        }
      ]
    },
    {
      id: "stress-management",
      title: "Stress Management & Mental Wellness",
      description: "Learn techniques for helping clients manage stress and improve mental well-being.",
      status: "optional",
      skills: ["Stress Reduction", "Mindfulness", "Work-Life Balance"],
      resources: [
        {
          name: "Stress Management Coaching",
          url: "https://www.mindfulnessalliance.org"
        }
      ]
    },
    {
      id: "chronic-disease",
      title: "Chronic Disease Prevention",
      description: "Understand how to support clients in preventing and managing chronic conditions.",
      status: "optional",
      skills: ["Disease Prevention", "Lifestyle Medicine", "Health Risk Assessment"],
      resources: [
        {
          name: "Chronic Disease Prevention",
          url: "https://www.cdc.gov/chronicdisease/"
        }
      ]
    }
  ]
};