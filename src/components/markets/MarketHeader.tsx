import { PageSEO } from "@/components/seo/PageSEO";

export const MarketHeader = () => {
  return (
    <>
      <PageSEO 
        title="Market Analysis & Opportunities"
        description="Analyze market trends, discover growth opportunities, and make data-driven decisions with our comprehensive market analysis tools."
      />
      <div>
        <h1 className="text-4xl font-bold mb-6">Market Analysis Dashboard</h1>
        <p className="text-muted-foreground mb-8">
          Discover emerging market trends and analyze global business opportunities
        </p>
      </div>
    </>
  );
};