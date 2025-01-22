import { JobCategory } from "@/types/roadmap";
import { writingCategory } from "./categories/writing";
import { personalLifestyleCategory } from "./categories/personal-lifestyle";
import { developmentCategory } from "./categories/development";
import { designCategory } from "./categories/design";
import { marketingCategory } from "./categories/marketing";
import { businessCategory } from "./categories/business";
import { creativeCategory } from "./categories/creative";
import { techCategory } from "./categories/tech";
import { legalCategory } from "./categories/legal";

export const jobCategories: JobCategory[] = [
  writingCategory,
  personalLifestyleCategory,
  developmentCategory,
  designCategory,
  marketingCategory,
  businessCategory,
  creativeCategory,
  techCategory,
  legalCategory
];