import { TrendData } from "@/types/trends";
import { TrendMetricsCards } from "./trends/TrendMetricsCards";
import { MarketPopularityChart } from "./trends/MarketPopularityChart";
import { MarketSegmentationChart } from "./trends/MarketSegmentationChart";
import { SentimentAnalysis } from "./trends/SentimentAnalysis";
import { CompetitorAnalysis } from "./trends/CompetitorAnalysis";
import { PredictiveAnalysis } from "./trends/PredictiveAnalysis";
import { GrowthOpportunities } from "./trends/GrowthOpportunities";

interface TrendResultsProps {
  data: TrendData;
}

export const TrendResults = ({ data }: TrendResultsProps) => {
  // Calculate trend indicators
  const avgScore = data.score;
  const interestLevel = avgScore > 70 ? "High" : avgScore > 40 ? "Moderate" : "Low";
  const searchVolume = avgScore > 60 ? "Growing" : "Stable";
  const growthRate = `${avgScore > 50 ? '+' : '-'}${Math.abs(avgScore - 50)}%`;
  const communitySize = avgScore > 55 ? "Growing" : "Declining";

  // Platform impact data
  const platformData = [
    { name: 'GitHub', score: data.metadata.github?.score || 0 },
    { name: 'Google', score: data.metadata.google_trends?.score || 0 },
    { name: 'Reddit', score: data.metadata.reddit?.score || 0 },
    { name: 'HN', score: data.metadata.hacker_news?.score || 0 },
    { name: 'Stack Overflow', score: data.metadata.stack_overflow?.score || 0 },
    { name: 'Wikipedia', score: data.metadata.wikipedia?.score || 0 },
  ].sort((a, b) => b.score - a.score);

  // Market segmentation data
  const segmentationData = [
    { name: 'Tech', value: 35 },
    { name: 'Business', value: 25 },
    { name: 'Education', value: 20 },
    { name: 'Other', value: 20 },
  ];

  // Sample sentiment data
  const sentimentData = [
    { date: '2024-01', positive: 65, neutral: 25, negative: 10 },
    { date: '2024-02', positive: 70, neutral: 20, negative: 10 },
    { date: '2024-03', positive: 75, neutral: 15, negative: 10 },
  ];

  // Sample competitor data
  const competitorData = [
    { date: '2024-01', current: 45, competitor1: 30, competitor2: 25 },
    { date: '2024-02', current: 48, competitor1: 32, competitor2: 20 },
    { date: '2024-03', current: 52, competitor1: 28, competitor2: 20 },
  ];

  // Sample predictive data
  const predictiveData = [
    { date: '2024-01', actual: 45, predicted: null },
    { date: '2024-02', actual: 48, predicted: null },
    { date: '2024-03', actual: 52, predicted: 52 },
    { date: '2024-04', actual: null, predicted: 55 },
    { date: '2024-05', actual: null, predicted: 58 },
  ];

  // Sample insights and recommendations
  const insights = [
    "Strong growth in tech sector adoption",
    "Increasing interest from educational institutions",
    "Positive sentiment trending upward",
  ];

  const recommendations = [
    {
      title: "Focus on Educational Market",
      description: "Expand presence in educational institutions to capture growing interest.",
    },
    {
      title: "Technical Content Creation",
      description: "Develop more technical content to address growing developer interest.",
    },
    {
      title: "Regional Expansion",
      description: "Consider expanding into emerging markets showing high growth potential.",
    },
  ];

  return (
    <div className="space-y-8">
      <TrendMetricsCards
        avgScore={avgScore}
        interestLevel={interestLevel}
        searchVolume={searchVolume}
        growthRate={growthRate}
        communitySize={communitySize}
      />
      
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
    </div>
  );
};