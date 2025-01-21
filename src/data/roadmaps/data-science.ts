import { JobRoadmap } from "@/types/roadmap";

export const dataScienceRoadmap: JobRoadmap = {
  title: "Data Scientist Roadmap",
  description: "A comprehensive guide to becoming a Data Scientist",
  sections: [
    {
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
              name: "DataCamp",
              url: "https://www.datacamp.com"
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
    },
    {
      title: "2. Advanced Data Science",
      steps: [
        {
          id: "machine-learning",
          title: "Machine Learning",
          description: "Master machine learning concepts and tools",
          status: "required",
          skills: [
            "Scikit-learn",
            "Supervised Learning",
            "Unsupervised Learning",
            "Model Evaluation",
            "Feature Engineering"
          ],
          resources: [
            {
              name: "Machine Learning Course",
              url: "https://www.coursera.org/learn/machine-learning"
            }
          ]
        },
        {
          id: "deep-learning",
          title: "Deep Learning & Big Data",
          description: "Learn deep learning and big data technologies",
          status: "recommended",
          skills: [
            "TensorFlow",
            "PyTorch",
            "Neural Networks",
            "Big Data Tools",
            "Cloud Computing"
          ],
          resources: [
            {
              name: "Deep Learning Specialization",
              url: "https://www.coursera.org/specializations/deep-learning"
            }
          ]
        }
      ]
    }
  ]
};