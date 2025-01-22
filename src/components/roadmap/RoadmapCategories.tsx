import { memo } from "react";
import { JobCategoryCard } from "./JobCategoryCard";
import { JobCategory } from "@/types/roadmap";

interface RoadmapCategoriesProps {
  categories: JobCategory[];
}

export const RoadmapCategories = memo(({ categories }: RoadmapCategoriesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <JobCategoryCard
          key={category.title} // Using title as key instead of index for better React reconciliation
          title={category.title}
          roles={category.roles}
        />
      ))}
    </div>
  );
});

RoadmapCategories.displayName = "RoadmapCategories";