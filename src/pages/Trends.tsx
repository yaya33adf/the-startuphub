import { useState } from "react";
import { TrendSearch } from "@/components/TrendSearch";
import { TrendResults } from "@/components/TrendResults";
import { TrendHeader } from "@/components/trends/TrendHeader";
import { TrendMetricsCards } from "@/components/trends/TrendMetricsCards";
import { TrendInsights } from "@/components/trends/TrendInsights";
import { TrendFooter } from "@/components/trends/TrendFooter";
import { ChartSection } from "@/components/trends/ChartSection";
import { CompetitorAnalysis } from "@/components/trends/CompetitorAnalysis";
import { GrowthOpportunities } from "@/components/trends/GrowthOpportunities";
import { SentimentAnalysis } from "@/components/trends/SentimentAnalysis";
import { PredictiveAnalysis } from "@/components/trends/PredictiveAnalysis";
import type { TrendData } from "@/types/trends";
import { PageSEO } from "@/components/seo/PageSEO";

const Trends = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);

  const handleSearchResults = (results: TrendData) => {
    setSearchResults(results);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageSEO 
        title="Trend Analysis & Market Intelligence"
        description="Track and analyze market trends in real-time. Get insights into consumer behavior, market opportunities, and competitive analysis."
      />
      <h1 className="text-4xl font-bold mb-8">Trend Analysis & Market Intelligence</h1>
      <TrendHeader />
      <div className="mb-8">
        <TrendSearch onSearchResults={handleSearchResults} />
        {searchResults && <TrendResults data={searchResults} />}
      </div>
      <TrendMetricsCards />
      <ChartSection />
      <TrendInsights />
      <CompetitorAnalysis />
      <GrowthOpportunities />
      <SentimentAnalysis />
      <PredictiveAnalysis />
      <TrendFooter />
    </div>
  );
};

export default Trends;