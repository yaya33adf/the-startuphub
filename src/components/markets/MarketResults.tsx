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
  // Remove duplicates by creating a Set of market names and categories
  const uniqueMarketData = [
    {
      id: "1",
      name: "AI Development",
      description: "Artificial Intelligence and Machine Learning solutions",
      trend_score: 95,
      monthly_earnings_min: 8000,
      monthly_earnings_max: 15000,
      category: "Technology"
    },
    {
      id: "2",
      name: "React Development",
      description: "Frontend development with React.js",
      trend_score: 88,
      monthly_earnings_min: 6000,
      monthly_earnings_max: 12000,
      category: "Web Development"
    },
    {
      id: "3",
      name: "Sustainable Energy",
      description: "Green energy and sustainability solutions",
      trend_score: 92,
      monthly_earnings_min: 7000,
      monthly_earnings_max: 14000,
      category: "Clean Tech"
    },
    {
      id: "4",
      name: "Digital Marketing",
      description: "Social media and content marketing",
      trend_score: 85,
      monthly_earnings_min: 5000,
      monthly_earnings_max: 10000,
      category: "Marketing"
    },
    {
      id: "5",
      name: "Cybersecurity",
      description: "Network security and threat prevention",
      trend_score: 94,
      monthly_earnings_min: 9000,
      monthly_earnings_max: 16000,
      category: "Security"
    },
    {
      id: "6",
      name: "E-commerce Solutions",
      description: "Online retail and marketplace development",
      trend_score: 87,
      monthly_earnings_min: 6500,
      monthly_earnings_max: 13000,
      category: "Business"
    },
    {
      id: "7",
      name: "Cloud Computing",
      description: "Cloud infrastructure and services",
      trend_score: 91,
      monthly_earnings_min: 8500,
      monthly_earnings_max: 15500,
      category: "Infrastructure"
    },
    {
      id: "8",
      name: "Mobile App Development",
      description: "iOS and Android app development",
      trend_score: 89,
      monthly_earnings_min: 7000,
      monthly_earnings_max: 14000,
      category: "Mobile"
    },
    {
      id: "9",
      name: "Data Analytics",
      description: "Business intelligence and data visualization",
      trend_score: 90,
      monthly_earnings_min: 7500,
      monthly_earnings_max: 13500,
      category: "Analytics"
    },
    {
      id: "10",
      name: "Blockchain Development",
      description: "Cryptocurrency and smart contract development",
      trend_score: 86,
      monthly_earnings_min: 8000,
      monthly_earnings_max: 15000,
      category: "Blockchain"
    }
  ];

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
          data={uniqueMarketData.map(market => ({
            name: market.name,
            trendScore: market.trend_score || 0,
            potentialEarnings: market.monthly_earnings_max || 0,
          }))} 
        />
      </div>
      <div className="mt-8">
        <MarketCards markets={uniqueMarketData} />
      </div>
    </>
  );
};