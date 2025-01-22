import { RoadmapSection } from "@/types/roadmap";

export const clientManagementSection: RoadmapSection = {
  title: "Client Management",
  steps: [
    {
      id: "pt-7",
      title: "Assessment and Goal Setting",
      description: "Learn to conduct fitness assessments and help clients set achievable goals.",
      status: "required",
      skills: ["Fitness Assessment", "Goal Setting", "Progress Tracking"],
      resources: [
        {
          name: "NASM Assessment Forms",
          url: "https://www.nasm.org/resources/assessment-forms"
        }
      ]
    },
    {
      id: "pt-8",
      title: "Program Design",
      description: "Create personalized workout programs based on client goals and fitness levels.",
      status: "required",
      skills: ["Program Design", "Periodization", "Exercise Selection"],
      resources: [
        {
          name: "ACE Program Design",
          url: "https://www.acefitness.org/education-and-resources/professional/expert-articles/5002/a-systematic-approach-to-program-design/"
        }
      ]
    },
    {
      id: "pt-9",
      title: "Motivation and Communication",
      description: "Develop skills to effectively motivate and communicate with clients.",
      status: "required",
      skills: ["Communication", "Motivation Techniques", "Behavior Change"],
      resources: [
        {
          name: "Motivational Interviewing",
          url: "https://motivationalinterviewing.org/"
        }
      ]
    }
  ]
};