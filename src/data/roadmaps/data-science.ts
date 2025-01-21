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
          skills: [
            "Linear Algebra",
            "Calculus",
            "Probability",
            "Statistics",
            "Optimization"
          ],
          resources: [
            {
              name: "Khan Academy Math",
              url: "https://www.khanacademy.org/math"
            },
            {
              name: "Statistics Course",
              url: "https://www.coursera.org/learn/statistics"
            }
          ]
        },
        {
          id: "programming",
          title: "Programming Skills",
          description: "Learn essential programming languages for data science",
          status: "required",
          skills: [
            "Python",
            "R",
            "SQL",
            "Data Structures",
            "Algorithms"
          ],
          resources: [
            {
              name: "Python for Data Science",
              url: "https://www.python.org/about/gettingstarted"
            }
          ]
        }
      ]
    },
    {
      title: "2. Data Science Tools",
      steps: [
        {
          id: "data-analysis",
          title: "Data Analysis & Visualization",
          description: "Master data analysis and visualization tools",
          status: "required",
          skills: [
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Jupyter Notebooks"
          ],
          resources: [
            {
              name: "Pandas Documentation",
              url: "https://pandas.pydata.org/docs"
            }
          ]
        },
        {
          id: "machine-learning",
          title: "Machine Learning",
          description: "Learn machine learning concepts and tools",
          status: "required",
          skills: [
            "Scikit-learn",
            "TensorFlow",
            "PyTorch",
            "Model Evaluation",
            "Feature Engineering"
          ],
          resources: [
            {
              name: "Machine Learning Course",
              url: "https://www.coursera.org/learn/machine-learning"
            }
          ]
        }
      ]
    }
  ]
};