import { RoadmapSection } from '@/types/roadmap';

export const specialization: RoadmapSection = {
  title: "Specialization Areas",
  steps: [
    {
      id: "structural",
      title: "Structural Engineering",
      description: "Design and analysis of structures",
      status: "optional",
      skills: ["Structural Design", "Seismic Analysis", "Bridge Engineering", "High-rise Buildings"],
      resources: [
        {
          name: "Structural Engineering Basics",
          url: "https://www.structuralguide.com/"
        }
      ]
    },
    {
      id: "geotechnical",
      title: "Geotechnical Engineering",
      description: "Soil mechanics and foundation engineering",
      status: "optional",
      skills: ["Foundation Design", "Soil Investigation", "Ground Improvement", "Retaining Structures"],
      resources: [
        {
          name: "Geotechnical Engineering Portal",
          url: "https://www.geotechnicalinfo.com/"
        }
      ]
    },
    {
      id: "transportation",
      title: "Transportation Engineering",
      description: "Design of transportation infrastructure",
      status: "optional",
      skills: ["Highway Design", "Traffic Analysis", "Pavement Design", "Transportation Planning"],
      resources: [
        {
          name: "Transportation Engineering Resources",
          url: "https://www.transportation.org/"
        }
      ]
    }
  ]
};