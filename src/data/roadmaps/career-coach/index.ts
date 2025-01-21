import { JobRoadmap } from '@/types/roadmap';
import { fundamentals } from './sections/fundamentals';
import { assessment } from './sections/assessment';
import { coaching } from './sections/coaching';
import { business } from './sections/business';

export const careerCoachRoadmap: JobRoadmap = {
  title: "Career Coach Roadmap",
  description: "A comprehensive guide to becoming a successful career coach, covering essential skills, methodologies, and business practices.",
  sections: [
    fundamentals,
    assessment,
    coaching,
    business
  ]
};