import { RoadmapSection } from '@/types/roadmap';

export const researchSkills: RoadmapSection = {
  title: "Research Methodology",
  steps: [
    {
      id: "research-methods",
      title: "Research Methods",
      description: "Learn various research methodologies and data collection techniques",
      skills: [
        "Literature review",
        "Primary research methods",
        "Secondary research methods",
        "Data analysis",
        "Research ethics"
      ],
      status: "required",
      resources: [
        {
          name: "SAGE Research Methods",
          url: "https://methods.sagepub.com/"
        }
      ]
    },
    {
      id: "academic-databases",
      title: "Academic Databases",
      description: "Master the use of academic databases and research tools",
      skills: [
        "Database navigation",
        "Advanced search techniques",
        "Source evaluation",
        "Reference management",
        "Digital library usage"
      ],
      status: "required",
      resources: [
        {
          name: "Google Scholar",
          url: "https://scholar.google.com/"
        }
      ]
    }
  ]
};