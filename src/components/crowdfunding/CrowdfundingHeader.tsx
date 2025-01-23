import { PageSEO } from "@/components/seo/PageSEO";

export const CrowdfundingHeader = () => {
  return (
    <>
      <PageSEO 
        title="Crowdfunding Projects"
        description="Discover innovative crowdfunding projects, track funding progress, and find investment opportunities in trending startups."
      />
      <h2 className="text-4xl font-bold mb-8 text-center">Trending Crowdfunding Projects</h2>
    </>
  );
};