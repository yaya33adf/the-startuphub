import { JobRoadmap } from '@/types/roadmap';
import { fundamentals } from './sections/fundamentals';
import { specialization } from './sections/specialization';
import { clientManagement } from './sections/client-management';
import { business } from './sections/business';

export const personalChefRoadmap: JobRoadmap = {
  title: "Personal Chef Roadmap",
  description: "A comprehensive guide to becoming a successful personal chef, covering culinary skills, specializations, client management, and business development.",
  sections: [
    fundamentals,
    specialization,
    clientManagement,
    business
  ]
};