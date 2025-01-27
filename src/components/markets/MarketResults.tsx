import { TrendResults } from "@/components/TrendResults";
import { MarketChart } from "@/components/markets/MarketChart";
import { MarketCards } from "@/components/markets/MarketCards";
import type { TrendData } from "@/types/trends";

interface MarketResultsProps {
  trendResults: TrendData | null;
  marketData: any[];
  isLoading: boolean;
  error: Error | null;
}

export const MarketResults = ({ trendResults, marketData, isLoading, error }: MarketResultsProps) => {
  if (error) {
    return (
      <div className="mt-8 bg-red-50 p-6 rounded-lg">
        <h2 className="text-red-600 text-lg font-semibold">Error Loading Market Data</h2>
        <p className="text-red-500">There was an error loading the market opportunities. Please try again later.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="mt-8 space-y-4">
        <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3"></div>
        <div className="h-[400px] bg-gray-100 rounded animate-pulse"></div>
      </div>
    );
  }

  if (trendResults) {
    return (
      <div className="mt-8">
        <TrendResults data={trendResults} />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">Market Overview</h2>
        <MarketChart 
          data={marketData.map(market => ({
            name: market.name,
            trendScore: market.trendScore || 0,
            potentialEarnings: market.potentialEarnings || 0,
          }))} 
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">Top Market Opportunities</h2>
        <MarketCards 
          markets={[
            {
              id: "1",
              name: "AI Development",
              description: "Artificial Intelligence and Machine Learning solutions",
              trend_score: 95,
              monthly_earnings_min: 8000,
              monthly_earnings_max: 15000
            },
            {
              id: "2",
              name: "Web Development",
              description: "Frontend and Backend Development",
              trend_score: 88,
              monthly_earnings_min: 6000,
              monthly_earnings_max: 12000
            },
            {
              id: "3",
              name: "Mobile Development",
              description: "iOS and Android Development",
              trend_score: 85,
              monthly_earnings_min: 7000,
              monthly_earnings_max: 13000
            }
          ]}
        />
      </div>
    </div>
  );
};