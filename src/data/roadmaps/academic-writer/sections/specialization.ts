import { RoadmapSection } from '@/types/roadmap';

export const specialization: RoadmapSection = {
  title: "Specialization and Professional Development",
  steps: [
    {
      id: "subject-expertise",
      title: "Subject Matter Expertise",
      description: "Develop expertise in specific academic fields",
      skills: [
        "Field-specific terminology",
        "Subject area research",
        "Interdisciplinary writing",
        "Expert consultation",
        "Professional networking"
      ],
      status: "recommended",
      resources: [
        {
          name: "Academia.edu",
          url: "https://www.academia.edu/"
        }
      ]
    },
    {
      id: "professional-development",
      title: "Professional Growth",
      description: "Build your career as an academic writer",
      skills: [
        "Portfolio development",
        "Academic publishing",
        "Conference presentations",
        "Peer reviewing",
        "Professional memberships"
      ],
      status: "optional",
      resources: [
        {
          name: "ResearchGate",
          url: "https://www.researchgate.net/"
        }
      ]
    }
  ]
};