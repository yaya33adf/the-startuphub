import { JobRoadmap } from '@/types/roadmap';
import { fundamentals } from './sections/fundamentals';
import { technical } from './sections/technical';
import { specialization } from './sections/specialization';
import { business } from './sections/business';

export const civilEngineerRoadmap: JobRoadmap = {
  title: "Civil Engineer Career Path",
  description: "A comprehensive guide to becoming a successful Civil Engineer, covering fundamental engineering principles, technical skills, specializations, and business aspects.",
  sections: [
    fundamentals,
    technical,
    specialization,
    business
  ]
};