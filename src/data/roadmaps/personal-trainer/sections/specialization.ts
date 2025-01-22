import { RoadmapSection } from "@/types/roadmap";

export const specializationSection: RoadmapSection = {
  title: "Training Specializations",
  steps: [
    {
      id: "pt-4",
      title: "Strength Training",
      description: "Develop expertise in resistance training, weightlifting techniques, and program design.",
      status: "required",
      skills: ["Program Design", "Weightlifting Technique", "Spotting"],
      resources: [
        {
          name: "Starting Strength",
          url: "https://startingstrength.com/training/programming"
        }
      ]
    },
    {
      id: "pt-5",
      title: "Cardiovascular Training",
      description: "Learn various cardio training methods and how to design effective cardio programs.",
      status: "required",
      skills: ["Cardio Programming", "HIIT", "Endurance Training"],
      resources: [
        {
          name: "ACE Cardio Training Guidelines",
          url: "https://www.acefitness.org/education-and-resources/professional/expert-articles/5851/designing-cardio-programs/"
        }
      ]
    },
    {
      id: "pt-6",
      title: "Special Populations",
      description: "Learn to work with different populations including seniors, youth, and those with special conditions.",
      status: "recommended",
      skills: ["Adaptive Training", "Senior Fitness", "Youth Training"],
      resources: [
        {
          name: "ACSM Special Populations Guidelines",
          url: "https://www.acsm.org/education-resources/trending-topics-resources"
        }
      ]
    }
  ]
};