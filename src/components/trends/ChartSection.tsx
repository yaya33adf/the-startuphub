import { MarketPopularityChart } from "./MarketPopularityChart";
import { MarketSegmentationChart } from "./MarketSegmentationChart";
import { SentimentAnalysis } from "./SentimentAnalysis";
import { CompetitorAnalysis } from "./CompetitorAnalysis";
import { PredictiveAnalysis } from "./PredictiveAnalysis";
import { GrowthOpportunities } from "./GrowthOpportunities";

interface ChartSectionProps {
  platformData: Array<{ name: string; score: number }>;
  segmentationData: Array<{ name: string; value: number }>;
  sentimentData: Array<{ date: string; positive: number; neutral: number; negative: number }>;
  competitorData: Array<{ date: string; current: number; competitor1: number; competitor2: number }>;
  predictiveData: Array<{ date: string; actual: number | null; predicted: number | null }>;
  insights: string[];
  recommendations: Array<{ title: string; description: string }>;
}

export const ChartSection = ({
  platformData,
  segmentationData,
  sentimentData,
  competitorData,
  predictiveData,
  insights,
  recommendations,
}: ChartSectionProps) => {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        <MarketPopularityChart platformData={platformData} />
        <SentimentAnalysis data={sentimentData} />
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        <CompetitorAnalysis data={competitorData} />
        <PredictiveAnalysis data={predictiveData} confidenceScore={85} />
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        <MarketSegmentationChart segmentationData={segmentationData} />
        <GrowthOpportunities insights={insights} recommendations={recommendations} />
      </div>
    </>
  );
};