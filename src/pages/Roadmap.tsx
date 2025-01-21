import { PageSEO } from "@/components/seo/PageSEO";

const Roadmap = () => {
  return (
    <div className="container py-8">
      <PageSEO 
        title="Career Roadmap" 
        description="Explore freelancer career paths and development roadmaps"
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Freelancer Career Roadmaps
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Discover various career paths and skills needed to succeed as a freelancer
        </p>
        
        {/* Content will be added in future updates */}
        <div className="text-center text-muted-foreground">
          Career roadmaps coming soon...
        </div>
      </div>
    </div>
  );
};

export default Roadmap;