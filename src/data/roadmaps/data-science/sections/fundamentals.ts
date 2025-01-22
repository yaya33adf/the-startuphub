import { RoadmapSection } from "@/types/roadmap";

export const fundamentalsSection: RoadmapSection = {
  title: "1. Data Science Fundamentals",
  steps: [
    {
      id: "programming-stats",
      title: "Programming & Statistics",
      description: "Master programming and statistical concepts",
      status: "required",
      skills: [
        "Python",
        "R",
        "Statistics",
        "Probability",
        "Linear Algebra"
      ],
      resources: [
        {
          name: "IBM Data Science Professional Certificate",
          url: "https://www.coursera.org/professional-certificates/ibm-data-science"
        },
        {
          name: "Applied Data Science with Python Specialization",
          url: "https://www.coursera.org/specializations/data-science-python"
        },
        {
          name: "Machine Learning A-Z™: AI, Python & R",
          url: "https://www.udemy.com/course/machinelearning/"
        },
        {
          name: "Deep Learning Specialization",
          url: "https://www.coursera.org/specializations/deep-learning"
        }
      ]
    },
    {
      id: "data-analysis",
      title: "Data Analysis & Visualization",
      description: "Learn data analysis and visualization techniques",
      status: "required",
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Data Cleaning"
      ],
      resources: [
        {
          name: "Kaggle Courses",
          url: "https://www.kaggle.com/learn"
        }
      ]
    }
  ]
};