import { RoadmapSection } from '@/types/roadmap';

export const assessment: RoadmapSection = {
  title: "Assessment and Analysis",
  steps: [
    {
      id: "career-assessment",
      title: "Career Assessment Tools",
      description: "Learning to use and interpret various career assessment tools and personality tests.",
      status: "required",
      skills: ["Assessment Administration", "Result Interpretation", "Tool Selection"],
      resources: [
        {
          name: "Myers-Briggs Type Indicator",
          url: "https://www.myersbriggs.org/"
        },
        {
          name: "Strong Interest Inventory",
          url: "https://www.themyersbriggs.com/en-US/Products-and-Services/Strong"
        }
      ]
    },
    {
      id: "skills-analysis",
      title: "Skills and Strengths Analysis",
      description: "Methods for identifying and analyzing client skills, strengths, and areas for development.",
      status: "required",
      skills: ["Skills Assessment", "Strengths Analysis", "Gap Analysis"],
      resources: [
        {
          name: "StrengthsFinder",
          url: "https://www.gallup.com/cliftonstrengths/en/home.aspx"
        }
      ]
    },
    {
      id: "market-analysis",
      title: "Labor Market Analysis",
      description: "Understanding labor market trends, industry demands, and career opportunities.",
      status: "recommended",
      skills: ["Market Research", "Industry Analysis", "Trend Identification"],
      resources: [
        {
          name: "Bureau of Labor Statistics",
          url: "https://www.bls.gov/"
        }
      ]
    }
  ]
};