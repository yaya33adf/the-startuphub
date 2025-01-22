import { useParams } from "react-router-dom";
import { RoadmapHeader } from "./RoadmapHeader";
import { RoadmapVisualization } from "./RoadmapVisualization";
import { RoadmapNotFound } from "./RoadmapNotFound";
import { roadmaps } from "@/data/roadmapData";

export const JobRoadmap = () => {
  const { jobId } = useParams();
  console.log("Current jobId:", jobId); // Debug log
  console.log("Available roadmaps:", Object.keys(roadmaps)); // Debug log
  console.log("Roadmap data for current id:", roadmaps[jobId || '']); // Additional debug log

  const roadmap = jobId ? roadmaps[jobId] : null;

  if (!roadmap) {
    console.log("Roadmap not found, redirecting to not found page"); // Debug log
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