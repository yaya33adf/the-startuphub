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
import { 
  sampleSegmentationData, 
  sampleSentimentData, 
  sampleCompetitorData,
  samplePredictiveData,
  sampleInsightsAndRecommendations,
  preparePlatformData,
  calculateTrendIndicators
} from "@/utils/trendDataUtils";

const Trends = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);

  const handleSearchResults = (results: TrendData) => {
    setSearchResults(results);
  };

  const handleExportPDF = async () => {
    // Export functionality will be handled by TrendResults component
    console.log("Exporting PDF...");
  };

  // Calculate metrics based on search results or use default values
  const score = searchResults?.score || 50;
  const { avgScore, interestLevel, searchVolume, growthRate, communitySize } = calculateTrendIndicators(score);

  // Prepare data for charts
  const platformData = searchResults ? preparePlatformData(searchResults.metadata) : [];
  const competitors = ["Competitor A", "Competitor B"];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageSEO 
        title="Trend Analysis & Market Intelligence"
        description="Track and analyze market trends in real-time. Get insights into consumer behavior, market opportunities, and competitive analysis."
      />
      <h1 className="text-4xl font-bold mb-8">Trend Analysis & Market Intelligence</h1>
      <TrendHeader onExport={handleExportPDF} />
      <div className="mb-8">
        <TrendSearch onSearchResults={handleSearchResults} />
        {searchResults && <TrendResults data={searchResults} />}
      </div>
      <TrendMetricsCards 
        avgScore={avgScore}
        interestLevel={interestLevel}
        searchVolume={searchVolume}
        growthRate={growthRate}
        communitySize={communitySize}
      />
      <ChartSection 
        platformData={platformData}
        segmentationData={sampleSegmentationData}
        sentimentData={sampleSentimentData}
        competitorData={sampleCompetitorData}
        competitors={competitors}
        predictiveData={samplePredictiveData}
        insights={sampleInsightsAndRecommendations.insights}
        recommendations={sampleInsightsAndRecommendations.recommendations}
      />
      <TrendInsights />
      <CompetitorAnalysis 
        data={sampleCompetitorData}
        competitors={competitors}
      />
      <GrowthOpportunities 
        insights={sampleInsightsAndRecommendations.insights}
        recommendations={sampleInsightsAndRecommendations.recommendations}
      />
      <SentimentAnalysis data={sampleSentimentData} />
      <PredictiveAnalysis 
        data={samplePredictiveData}
        confidenceScore={85}
      />
      <TrendFooter />
    </div>
  );
};

export default Trends;