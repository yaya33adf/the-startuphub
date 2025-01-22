import { RoadmapSection } from "@/types/roadmap";

export const advancedSection: RoadmapSection = {
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
};