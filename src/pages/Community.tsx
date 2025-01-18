import { PageSEO } from "@/components/seo/PageSEO";

const Community = () => {
  return (
    <>
      <PageSEO 
        title="Community - Coming Soon"
        description="Our community features are coming soon."
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
            <p className="text-muted-foreground">
              Our community features are currently under development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;