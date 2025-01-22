import { JobRoadmap } from '@/types/roadmap';
import { developmentRoadmaps } from './roadmaps/categories/development';
import { designRoadmaps } from './roadmaps/categories/design';
import { marketingRoadmaps } from './roadmaps/categories/marketing';
import { businessRoadmaps } from './roadmaps/categories/business';
import { creativeRoadmaps } from './roadmaps/categories/creative';
import { techRoadmaps } from './roadmaps/categories/tech';
import { legalRoadmaps } from './roadmaps/categories/legal';
import { healthCoachRoadmap } from './roadmaps/health-coach';

export const roadmaps: Record<string, JobRoadmap> = {
  ...developmentRoadmaps,
  ...designRoadmaps,
  ...marketingRoadmaps,
  ...businessRoadmaps,
  ...creativeRoadmaps,
  ...techRoadmaps,
  ...legalRoadmaps,
  'health-coach': healthCoachRoadmap,
};
