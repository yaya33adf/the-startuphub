import { PageSEO } from "@/components/seo/PageSEO";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface RoadmapHeaderProps {
  title: string;
  description: string;
}

export const RoadmapHeader = ({ title, description }: RoadmapHeaderProps) => {
  const howToData = {
    name: title,
    description: description,
    steps: [
      {
        name: "Review Prerequisites",
        text: "Review and ensure you have the necessary foundational knowledge",
      },
      {
        name: "Follow Learning Path",
        text: "Follow the structured learning path and complete each section",
      },
      {
        name: "Practice Skills",
        text: "Practice and apply the skills learned in real-world projects",
      },
      {
        name: "Stay Updated",
        text: "Keep learning and stay updated with industry trends and best practices",
      }
    ],
    totalTime: "6-12 months"
  };

  return (
    <>
      <PageSEO 
        title={title}
        description={description}
      />
      <StructuredData 
        type="howto"
        howToData={howToData}
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