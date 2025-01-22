import { RoadmapSection } from "@/types/roadmap";

export const clientManagementSection: RoadmapSection = {
  title: "2. Client Management",
  steps: [
    {
      id: "client-communication",
      title: "Client Communication",
      description: "Develop effective client communication and collaboration skills",
      status: "required",
      skills: [
        "Interview Techniques",
        "Project Scoping",
        "Feedback Management",
        "Confidentiality",
        "Expectation Setting"
      ],
      resources: [
        {
          name: "Professional Communication Guide",
          url: "https://www.indeed.com/career-advice/career-development/professional-communication"
        }
      ]
    },
    {
      id: "project-management",
      title: "Project Management",
      description: "Learn to manage ghostwriting projects effectively",
      status: "required",
      skills: [
        "Timeline Planning",
        "Milestone Setting",
        "Revision Management",
        "Documentation",
        "Version Control"
      ],
      resources: [
        {
          name: "Project Management for Writers",
          url: "https://www.writersdigest.com/getting-published/project-management-for-writers"
        }
      ]
    }
  ]
};