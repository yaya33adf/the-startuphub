import { TrendSearch } from "@/components/TrendSearch";
import { MarketResults } from "@/components/markets/MarketResults";
import { useState } from "react";
import type { TrendData } from "@/types/trends";
import { PageSEO } from "@/components/seo/PageSEO";
import { Loader2 } from "lucide-react";
import { MarketHeader } from "@/components/markets/MarketHeader";
import { MarketSearch } from "@/components/search/MarketSearch";
import { MarketChart } from "@/components/markets/MarketChart";
import { MarketCards } from "@/components/markets/MarketCards";

const Markets = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleSearchResults = async (results: TrendData) => {
    try {
      setIsLoading(true);
      setError(null);
      console.log("Search results received:", results);
      setSearchResults(results);
    } catch (err) {
      console.error("Error handling search results:", err);
      setError(err instanceof Error ? err : new Error("An error occurred"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarketSearch = (query: string, region: string, timeframe: string) => {
    console.log("Market search:", { query, region, timeframe });
    // Implement market search logic here
  };

  // Sample market data for demonstration
  const marketData = [
    {
      name: "AI Development",
      trendScore: 95,
      potentialEarnings: 15000,
    },
    {
      name: "Web Development",
      trendScore: 88,
      potentialEarnings: 12000,
    },
    {
      name: "Mobile Development",
      trendScore: 85,
      potentialEarnings: 13000,
    }
  ];

  return (
    <>
      <PageSEO 
        title="Market Analysis & Opportunities"
        description="Track and analyze market trends in real-time with our comprehensive market analysis tools and insights."
      />
      <div className="container mx-auto p-8 space-y-8">
        <MarketHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <TrendSearch onSearchResults={handleSearchResults} />
            <MarketSearch onSearch={handleMarketSearch} />
          </div>
          <div className="bg-accent/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Market Insights</h3>
            <p className="text-muted-foreground">
              Analyze current market trends and discover emerging opportunities in various sectors.
              Use our advanced analytics tools to make data-driven decisions.
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <>
            {searchResults && (
              <MarketResults 
                trendResults={searchResults}
                marketData={marketData}
                isLoading={false}
                error={error}
              />
            )}
            {!searchResults && (
              <>
                <div className="mb-8">
                  <MarketChart 
                    data={marketData}
                  />
                </div>
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
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Markets;