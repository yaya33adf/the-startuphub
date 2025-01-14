import { TrendData } from "@/types/trends";
import { TrendMetricsCards } from "./trends/TrendMetricsCards";
import { TrendingItemsGrid } from "./trends/TrendingItemsGrid";
import { ChartSection } from "./trends/ChartSection";
import { 
  calculateTrendIndicators,
  preparePlatformData,
  sampleSegmentationData,
  sampleSentimentData,
  sampleCompetitorData,
  samplePredictiveData,
  sampleInsightsAndRecommendations,
  trendingItemsData
} from "@/utils/trendDataUtils";

interface TrendResultsProps {
  data: TrendData;
}

export const TrendResults = ({ data }: TrendResultsProps) => {
  const {
    avgScore,
    interestLevel,
    searchVolume,
    growthRate,
    communitySize
  } = calculateTrendIndicators(data.score);

  const platformData = preparePlatformData(data.metadata);
  const { insights, recommendations } = sampleInsightsAndRecommendations;

  return (
    <div className="space-y-8">
      <TrendMetricsCards
        avgScore={avgScore}
        interestLevel={interestLevel}
        searchVolume={searchVolume}
        growthRate={growthRate}
        communitySize={communitySize}
      />

      <TrendingItemsGrid items={trendingItemsData} />
      
      <ChartSection
        platformData={platformData}
        segmentationData={sampleSegmentationData}
        sentimentData={sampleSentimentData}
        competitorData={sampleCompetitorData}
        predictiveData={samplePredictiveData}
        insights={insights}
        recommendations={recommendations}
      />
    </div>
  );
};