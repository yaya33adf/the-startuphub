import { PageSEO } from "@/components/seo/PageSEO";

export const SideHustleHeader = () => {
  return (
    <>
      <PageSEO 
        title="Side Hustles & Business Opportunities"
        description="Find profitable side hustle ideas, explore business opportunities, and learn how to monetize your skills with our comprehensive guide."
      />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Side Hustles</h1>
        <p className="text-muted-foreground mb-8">
          Discover profitable side business opportunities and start earning extra income
        </p>
      </div>
    </>
  );
};