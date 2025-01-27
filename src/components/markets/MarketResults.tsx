import { TrendResults } from "@/components/TrendResults";
import { MarketChart } from "@/components/markets/MarketChart";
import { MarketCards } from "@/components/markets/MarketCards";
import type { TrendData } from "@/types/trends";

interface MarketResultsProps {
  data: TrendData;
}

export const MarketResults = ({ data }: MarketResultsProps) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">Market Overview</h2>
        <TrendResults data={data} />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">Market Opportunities</h2>
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