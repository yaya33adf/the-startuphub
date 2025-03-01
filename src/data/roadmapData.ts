import { JobRoadmap } from '@/types/roadmap';
import { developmentRoadmaps } from './roadmaps/categories/development';
import { designRoadmaps } from './roadmaps/categories/design';
import { marketingRoadmaps } from './roadmaps/categories/marketing';
import { businessRoadmaps } from './roadmaps/categories/business';
import { creativeRoadmaps } from './roadmaps/categories/creative';
import { techRoadmaps } from './roadmaps/categories/tech';
import { legalRoadmaps } from './roadmaps/categories/legal';
import { personalLifestyleRoadmaps } from './roadmaps/categories/personal-lifestyle';
import { healthCoachRoadmap } from './roadmaps/health-coach';
import { academicWriterRoadmap } from './roadmaps/academic-writer';
import { localizationSpecialistRoadmap } from './roadmaps/localization-specialist';
import { photographerRoadmap } from './roadmaps/photographer';
import { propertyManagerRoadmap } from './roadmaps/property-manager';
import { travelPlannerRoadmap } from './roadmaps/travel-planner';

export const roadmaps: Record<string, JobRoadmap> = {
  ...developmentRoadmaps,
  ...designRoadmaps,
  ...marketingRoadmaps,
  ...businessRoadmaps,
  ...creativeRoadmaps,
  ...techRoadmaps,
  ...legalRoadmaps,
  ...personalLifestyleRoadmaps,
  'health-coach': healthCoachRoadmap,
  'academic-writer': academicWriterRoadmap,
  'localization-specialist': localizationSpecialistRoadmap,
  'professional-photographer': photographerRoadmap,
  'property-manager': propertyManagerRoadmap,
  'travel-planner': travelPlannerRoadmap,
};