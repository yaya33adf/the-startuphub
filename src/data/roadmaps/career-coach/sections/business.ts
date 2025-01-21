import { RoadmapSection } from '@/types/roadmap';

export const business: RoadmapSection = {
  title: "Business Development",
  steps: [
    {
      id: "practice-setup",
      title: "Setting Up Your Practice",
      description: "Establishing and managing a career coaching business.",
      status: "required",
      skills: ["Business Planning", "Legal Requirements", "Service Packaging"],
      resources: [
        {
          name: "Starting a Coaching Business",
          url: "https://www.entrepreneur.com/starting-a-business/how-to-start-a-coaching-business/429533"
        }
      ]
    },
    {
      id: "marketing",
      title: "Marketing and Client Acquisition",
      description: "Developing marketing strategies and building a client base.",
      status: "required",
      skills: ["Digital Marketing", "Networking", "Personal Branding"],
      resources: [
        {
          name: "Marketing for Coaches",
          url: "https://www.coachfoundation.com/blog/marketing-strategies-life-coaches/"
        }
      ]
    },
    {
      id: "professional-development",
      title: "Continuous Professional Development",
      description: "Staying updated with industry trends and advancing your coaching skills.",
      status: "recommended",
      skills: ["Professional Development", "Industry Networking", "Certification Maintenance"],
      resources: [
        {
          name: "ICF Continuing Education",
          url: "https://coachingfederation.org/education"
        }
      ]
    }
  ]
};