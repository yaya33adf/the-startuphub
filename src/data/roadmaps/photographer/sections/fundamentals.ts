import { RoadmapSection } from "@/types/roadmap";

export const fundamentals: RoadmapSection = {
  title: "Photography Fundamentals",
  steps: [
    {
      id: "camera-basics",
      title: "Camera Basics",
      description: "Master the fundamental concepts of camera operation and settings",
      skills: ["Camera anatomy", "Exposure triangle", "Manual mode", "Focus modes"],
      status: "required",
      resources: [
        {
          name: "Understanding Camera Exposure",
          url: "https://www.bhphotovideo.com/explora/photography/tips-and-solutions/understanding-exposure-photography-guide"
        },
        {
          name: "Camera Settings Guide",
          url: "https://www.digitalcameraworld.com/tutorials/camera-settings"
        }
      ]
    },
    {
      id: "composition",
      title: "Composition Techniques",
      description: "Learn essential composition rules and techniques for creating compelling images",
      skills: ["Rule of thirds", "Leading lines", "Framing", "Balance", "Symmetry"],
      status: "required",
      resources: [
        {
          name: "Photography Composition Rules",
          url: "https://photographylife.com/photography-composition-techniques"
        }
      ]
    },
    {
      id: "lighting",
      title: "Understanding Light",
      description: "Master natural and artificial lighting techniques",
      skills: ["Natural light", "Golden hour", "Studio lighting", "Flash photography"],
      status: "required",
      resources: [
        {
          name: "Lighting for Photography",
          url: "https://digital-photography-school.com/lighting"
        }
      ]
    }
  ]
};