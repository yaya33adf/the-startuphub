import { JobRoadmap } from "@/types/roadmap";

export const dataScienceRoadmap: JobRoadmap = {
  title: "Data Scientist Roadmap",
  description: "A comprehensive guide to becoming a Data Scientist",
  sections: [
    {
      title: "1. Mathematics & Statistics",
      steps: [
        {
          id: "math-fundamentals",
          title: "Mathematical Foundations",
          description: "Master essential mathematical concepts",
          status: "required",
          skills: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
          resources: [
            { name: "Khan Academy Math", url: "https://www.khanacademy.org/math" },
            { name: "Statistics Course", url: "https://www.coursera.org/learn/statistics" }
          ]
        }
      ]
    },
    {
      title: "2. Programming & Tools",
      steps: [
        {
          id: "programming-tools",
          title: "Programming Languages & Tools",
          description: "Learn essential programming languages and tools",
          status: "required",
          skills: ["Python", "R", "SQL", "Jupyter Notebooks", "Git"],
          resources: [
            { name: "Python for Data Science", url: "https://www.python.org/about/gettingstarted" },
            { name: "R Programming", url: "https://www.r-project.org/about.html" }
          ]
        }
      ]
    }
  ]
};