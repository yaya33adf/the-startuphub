import { useParams } from "react-router-dom";
import { PageSEO } from "@/components/seo/PageSEO";
import { RoadmapVisualization } from "./RoadmapVisualization";
import { roadmaps } from "@/data/roadmapData";

export const JobRoadmap = () => {
  const { jobId } = useParams();
  const roadmap = roadmaps[jobId as string];

  if (!roadmap) {
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-bold text-center">Roadmap not found</h1>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <PageSEO 
        title={roadmap.title}
        description={roadmap.description}
      />
      
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{roadmap.title}</h1>
        <p className="text-lg text-muted-foreground mb-12">{roadmap.description}</p>

        <RoadmapVisualization sections={roadmap.sections} />
      </div>
    </div>
  );
};