import { JobCategoryCard } from "./JobCategoryCard";
import { JobCategory } from "@/types/roadmap";

interface RoadmapCategoriesProps {
  categories: JobCategory[];
}

export const RoadmapCategories = ({ categories }: RoadmapCategoriesProps) => {
  console.log("Rendering categories:", categories); // Debug log

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => {
        console.log("Rendering category:", category.title); // Debug log
        return (
          <JobCategoryCard
            key={index}
            title={category.title}
            roles={category.roles}
          />
        );
      })}
    </div>
  );
};