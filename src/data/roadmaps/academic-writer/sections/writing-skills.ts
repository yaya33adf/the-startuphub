import { RoadmapSection } from '@/types/roadmap';

export const writingSkills: RoadmapSection = {
  title: "Advanced Writing Skills",
  steps: [
    {
      id: "document-types",
      title: "Academic Document Types",
      description: "Learn to write different types of academic documents",
      skills: [
        "Research papers",
        "Literature reviews",
        "Dissertations",
        "Conference papers",
        "Journal articles"
      ],
      status: "required",
      resources: [
        {
          name: "Writing Academic Papers",
          url: "https://www.scribbr.com/category/academic-writing/"
        }
      ]
    },
    {
      id: "advanced-techniques",
      title: "Advanced Writing Techniques",
      description: "Master advanced academic writing techniques",
      skills: [
        "Argumentation",
        "Critical analysis",
        "Synthesis of sources",
        "Academic discourse",
        "Peer review process"
      ],
      status: "recommended",
      resources: [
        {
          name: "Writing in the Sciences",
          url: "https://www.coursera.org/learn/sciwrite"
        }
      ]
    }
  ]
};