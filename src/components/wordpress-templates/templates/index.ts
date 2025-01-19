import { techTemplates } from './tech';
import { financeTemplates } from './finance';
import { healthEducationTemplates } from './health-education';
import { lifestyleTemplates } from './lifestyle';
import { WordPressTemplate } from '../types';

export const templates: WordPressTemplate[] = [
  ...techTemplates,
  ...financeTemplates,
  ...healthEducationTemplates,
  ...lifestyleTemplates
];