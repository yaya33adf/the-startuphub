import { JobRoadmap } from '@/types/roadmap';
import { developmentRoadmaps } from './roadmaps/categories/development';
import { designRoadmaps } from './roadmaps/categories/design';
import { marketingRoadmaps } from './roadmaps/categories/marketing';
import { businessRoadmaps } from './roadmaps/categories/business';
import { creativeRoadmaps } from './roadmaps/categories/creative';
import { techRoadmaps } from './roadmaps/categories/tech';

export const roadmaps: Record<string, JobRoadmap> = {
  ...developmentRoadmaps,
  ...designRoadmaps,
  ...marketingRoadmaps,
  ...businessRoadmaps,
  ...creativeRoadmaps,
  ...techRoadmaps,
};