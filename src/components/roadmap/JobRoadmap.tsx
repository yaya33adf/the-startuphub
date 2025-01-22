import { useParams } from "react-router-dom";
import { RoadmapHeader } from "./RoadmapHeader";
import { RoadmapVisualization } from "./RoadmapVisualization";
import { RoadmapNotFound } from "./RoadmapNotFound";
import { roadmaps } from "@/data/roadmapData";

export const JobRoadmap = () => {
  const { jobId } = useParams();
  console.log("Current jobId:", jobId); // Debug log
  console.log("Available roadmaps:", Object.keys(roadmaps)); // Debug log
  console.log("All roadmaps data:", roadmaps); // Additional debug log

  // Normalize the jobId to match the format in roadmaps
  const normalizedJobId = jobId?.toLowerCase().replace(/\s+/g, '-');
  console.log("Normalized jobId:", normalizedJobId); // Debug log

  const roadmap = normalizedJobId ? roadmaps[normalizedJobId] : null;
  console.log("Found roadmap:", roadmap); // Debug log

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