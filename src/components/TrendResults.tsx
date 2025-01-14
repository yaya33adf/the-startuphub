import { TrendData } from "@/types/trends";
import { TrendMetricsCards } from "./trends/TrendMetricsCards";
import { MarketPopularityChart } from "./trends/MarketPopularityChart";
import { MarketSegmentationChart } from "./trends/MarketSegmentationChart";

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

  return (
    <div className="space-y-8">
      <TrendMetricsCards
        avgScore={avgScore}
        interestLevel={interestLevel}
        searchVolume={searchVolume}
        growthRate={growthRate}
        communitySize={communitySize}
      />
      <MarketPopularityChart platformData={platformData} />
      <MarketSegmentationChart segmentationData={segmentationData} />
    </div>
  );
};