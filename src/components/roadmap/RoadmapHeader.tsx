import { PageSEO } from "@/components/seo/PageSEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface RoadmapHeaderProps {
  title: string;
  description: string;
}

export const RoadmapHeader = ({ title, description }: RoadmapHeaderProps) => {
  return (
    <>
      <PageSEO 
        title={title}
        description={description}
      />
      
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Button
            variant="ghost"
            asChild
            className="mb-4 -ml-4 text-muted-foreground hover:text-foreground"
          >
            <Link to="/roadmap" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Roadmaps
            </Link>
          </Button>
        </div>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-muted-foreground mb-12">{description}</p>
      </div>
    </>
  );
};