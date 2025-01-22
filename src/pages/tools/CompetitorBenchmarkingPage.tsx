import { PageSEO } from "@/components/seo/PageSEO";
import { CompetitorBenchmarking } from "@/components/tools/CompetitorBenchmarking";

const CompetitorBenchmarkingPage = () => {
  return (
    <div className="container py-8">
      <PageSEO
        title="Competitor Benchmarking Tool"
        description="Analyze and compare your competitors with our comprehensive benchmarking tool"
      />
      
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Competitor Benchmarking Tool</h1>
        <p className="text-muted-foreground">
          Track and analyze your competitors by comparing their strengths, weaknesses,
          market share, pricing strategies, and unique value propositions.
        </p>
        
        <CompetitorBenchmarking />
      </div>
    </div>
  );
};

export default CompetitorBenchmarkingPage;