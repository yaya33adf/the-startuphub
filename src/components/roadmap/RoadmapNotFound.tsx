import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const RoadmapNotFound = () => {
  return (
    <div className="container py-8">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Roadmap not found</h1>
        <p className="text-muted-foreground">
          The roadmap you're looking for doesn't exist or hasn't been created yet.
        </p>
        <Button asChild>
          <Link to="/roadmap">View All Roadmaps</Link>
        </Button>
      </div>
    </div>
  );
};