import { useParams } from "react-router-dom";
import { RoadmapHeader } from "./RoadmapHeader";
import { RoadmapVisualization } from "./RoadmapVisualization";
import { RoadmapNotFound } from "./RoadmapNotFound";
import { roadmaps } from "@/data/roadmapData";

export const JobRoadmap = () => {
  const { jobId } = useParams();
  const roadmap = roadmaps[jobId as string];

  if (!roadmap) {
    return <RoadmapNotFound />;
  }

  return (
    <div className="container py-8">
      <RoadmapHeader 
        title={roadmap.title}
        description={roadmap.description}
      />
      <RoadmapVisualization sections={roadmap.sections} />
    </div>
  );
};