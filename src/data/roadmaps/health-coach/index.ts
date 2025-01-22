import { JobRoadmap } from '@/types/roadmap';
import { fundamentals } from './sections/fundamentals';
import { coaching } from './sections/coaching';
import { business } from './sections/business';
import { specialization } from './sections/specialization';

export const healthCoachRoadmap: JobRoadmap = {
  title: "Health Coach Roadmap",
  description: "A comprehensive guide to becoming a successful health coach, covering essential knowledge, coaching methodologies, business practices, and specializations.",
  sections: [
    fundamentals,
    coaching,
    business,
    specialization
  ]
};