import { RoadmapSection } from '@/types/roadmap';

export const coaching: RoadmapSection = {
  title: "Coaching Methodologies",
  steps: [
    {
      id: "goal-setting",
      title: "Goal Setting and Action Planning",
      description: "Techniques for helping clients set and achieve meaningful career goals.",
      status: "required",
      skills: ["SMART Goals", "Action Planning", "Progress Tracking"],
      resources: [
        {
          name: "Goal-Setting Techniques",
          url: "https://positivepsychology.com/goal-setting/"
        }
      ]
    },
    {
      id: "career-transition",
      title: "Career Transition Coaching",
      description: "Supporting clients through career changes and professional transitions.",
      status: "required",
      skills: ["Change Management", "Transition Support", "Decision Making"],
      resources: [
        {
          name: "Career Change Resources",
          url: "https://www.indeed.com/career-advice/finding-a-job/career-change"
        }
      ]
    },
    {
      id: "interview-prep",
      title: "Interview and Job Search Coaching",
      description: "Preparing clients for job interviews and effective job search strategies.",
      status: "required",
      skills: ["Interview Preparation", "Resume Writing", "Job Search Strategy"],
      resources: [
        {
          name: "Interview Preparation Guide",
          url: "https://www.themuse.com/advice/interview-preparation-guide"
        }
      ]
    }
  ]
};