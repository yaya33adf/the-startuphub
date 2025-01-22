import { JobRoadmap } from '@/types/roadmap';
import { fundamentals } from './sections/fundamentals';
import { researchSkills } from './sections/research-skills';
import { writingSkills } from './sections/writing-skills';
import { specialization } from './sections/specialization';

export const academicWriterRoadmap: JobRoadmap = {
  title: "Academic Writer",
  description: "A comprehensive guide to becoming a professional academic writer, covering research methodologies, writing techniques, and academic standards.",
  sections: [
    fundamentals,
    researchSkills,
    writingSkills,
    specialization,
  ]
};