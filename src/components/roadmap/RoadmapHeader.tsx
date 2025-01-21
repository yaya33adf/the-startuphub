import { PageSEO } from "@/components/seo/PageSEO";

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
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-muted-foreground mb-12">{description}</p>
      </div>
    </>
  );
};