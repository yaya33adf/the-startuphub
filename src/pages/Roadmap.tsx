import { PageSEO } from "@/components/seo/PageSEO";
import { RoadmapCategories } from "@/components/roadmap/RoadmapCategories";
import { RoadmapPageHeader } from "@/components/roadmap/RoadmapPageHeader";
import { jobCategories } from "@/data/jobCategories";

const Roadmap = () => {
  console.log("Rendering Roadmap page"); // Debug log
  console.log("Job categories:", jobCategories); // Debug log
  
  return (
    <div className="container py-8">
      <PageSEO 
        title="Career Roadmap" 
        description="Explore freelancer career paths and development roadmaps"
      />
      
      <RoadmapPageHeader />
      <RoadmapCategories categories={jobCategories} />
    </div>
  );
};

export default Roadmap;