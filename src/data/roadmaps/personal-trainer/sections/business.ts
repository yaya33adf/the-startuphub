import { RoadmapSection } from "@/types/roadmap";

export const businessSection: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "pt-10",
      title: "Certification and Insurance",
      description: "Obtain necessary certifications and insurance to practice as a personal trainer.",
      status: "required",
      skills: ["Professional Certification", "Liability Insurance", "CPR/AED"],
      resources: [
        {
          name: "NASM Certification",
          url: "https://www.nasm.org/certified-personal-trainer"
        }
      ]
    },
    {
      id: "pt-11",
      title: "Business Operations",
      description: "Learn to manage your personal training business effectively.",
      status: "recommended",
      skills: ["Business Planning", "Marketing", "Client Retention"],
      resources: [
        {
          name: "ACE Business Resources",
          url: "https://www.acefitness.org/education-and-resources/business/"
        }
      ]
    },
    {
      id: "pt-12",
      title: "Online Training",
      description: "Develop skills for offering virtual training services.",
      status: "recommended",
      skills: ["Virtual Training", "Online Programming", "Digital Tools"],
      resources: [
        {
          name: "Online Trainer Academy",
          url: "https://www.theptdc.com/online-trainer-academy"
        }
      ]
    }
  ]
};