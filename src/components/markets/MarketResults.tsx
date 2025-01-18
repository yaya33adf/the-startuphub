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

  return (
    <>
      {trendResults && (
        <div className="mt-8">
          <TrendResults data={trendResults} />
        </div>
      )}
      <div className="mt-8">
        <MarketChart 
          data={marketData.map(market => ({
            name: market.name,
            trendScore: market.trend_score || 0,
            potentialEarnings: market.monthly_earnings_max || 0,
          }))} 
        />
      </div>
      <div className="mt-8">
        <MarketCards markets={marketData} />
      </div>
    </>
  );
};