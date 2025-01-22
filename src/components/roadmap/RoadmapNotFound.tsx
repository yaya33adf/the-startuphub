import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

export const RoadmapNotFound = () => {
  return (
    <div className="container py-16">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold">Roadmap not found</h1>
        <p className="text-muted-foreground">
          The career roadmap you're looking for doesn't exist or hasn't been created yet.
          Please check the URL or explore our available roadmaps.
        </p>
        <Button asChild size="lg">
          <Link to="/roadmap" className="flex items-center gap-2">
            View All Roadmaps
          </Link>
        </Button>
      </div>
    </div>
  );
};