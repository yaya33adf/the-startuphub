import { RoadmapSection } from "@/types/roadmap";

export const fundamentalsSection: RoadmapSection = {
  title: "Fitness Fundamentals",
  steps: [
    {
      id: "pt-1",
      title: "Human Anatomy and Physiology",
      description: "Learn the fundamentals of human anatomy, muscle groups, and body systems essential for personal training.",
      status: "required",
      skills: ["Anatomy", "Physiology", "Biomechanics"],
      resources: [
        {
          name: "ACE Fitness - Anatomy and Physiology",
          url: "https://www.acefitness.org/education-and-resources/professional/expert-articles/5158/muscles-that-move-the-arm/"
        },
        {
          name: "NASM Exercise Library",
          url: "https://www.nasm.org/exercise-library"
        }
      ]
    },
    {
      id: "pt-2",
      title: "Exercise Science",
      description: "Master the principles of exercise science, including proper form, movement patterns, and training methodologies.",
      status: "required",
      skills: ["Exercise Technique", "Movement Patterns", "Training Principles"],
      resources: [
        {
          name: "NSCA Basics of Strength Training",
          url: "https://www.nsca.com/education/articles/basics-of-strength-and-conditioning-manual/"
        }
      ]
    },
    {
      id: "pt-3",
      title: "Nutrition Fundamentals",
      description: "Understand basic nutrition principles and their role in fitness and performance.",
      status: "required",
      skills: ["Nutrition Basics", "Meal Planning", "Macronutrients"],
      resources: [
        {
          name: "Precision Nutrition Coaching",
          url: "https://www.precisionnutrition.com/nutrition-coaching"
        }
      ]
    }
  ]
};