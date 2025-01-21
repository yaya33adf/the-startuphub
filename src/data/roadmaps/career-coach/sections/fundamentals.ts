import { RoadmapSection } from '@/types/roadmap';

export const fundamentals: RoadmapSection = {
  title: "Career Coaching Fundamentals",
  steps: [
    {
      id: "career-foundations",
      title: "Career Development Foundations",
      description: "Understanding career development theories, workplace dynamics, and professional growth principles.",
      status: "required",
      skills: ["Career Development Theory", "Workplace Psychology", "Professional Development"],
      resources: [
        {
          name: "National Career Development Association",
          url: "https://www.ncda.org/aws/NCDA/pt/sp/home_page"
        },
        {
          name: "Career Development Quarterly",
          url: "https://www.ncda.org/aws/NCDA/pt/sp/cdquarterly"
        }
      ]
    },
    {
      id: "coaching-ethics",
      title: "Coaching Ethics and Standards",
      description: "Learning professional ethics, confidentiality practices, and industry standards for career coaching.",
      status: "required",
      skills: ["Ethical Guidelines", "Confidentiality", "Professional Boundaries"],
      resources: [
        {
          name: "ICF Code of Ethics",
          url: "https://coachingfederation.org/ethics/code-of-ethics"
        }
      ]
    },
    {
      id: "communication-skills",
      title: "Communication and Active Listening",
      description: "Developing strong interpersonal communication skills and active listening techniques.",
      status: "required",
      skills: ["Active Listening", "Empathy", "Questioning Techniques"],
      resources: [
        {
          name: "Active Listening Skills",
          url: "https://www.mindtools.com/CommSkll/ActiveListening.htm"
        }
      ]
    }
  ]
};