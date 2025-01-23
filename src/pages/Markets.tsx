import { TrendSearch } from "@/components/TrendSearch";
import { MarketResults } from "@/components/markets/MarketResults";
import { useState } from "react";
import type { TrendData } from "@/types/trends";
import { PageSEO } from "@/components/seo/PageSEO";
import { Loader2 } from "lucide-react";
import { MarketHeader } from "@/components/markets/MarketHeader";
import { MarketSearch } from "@/components/search/MarketSearch";

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
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        <MarketHeader />
        
        {/* Search Tools Section */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">Market Research Tools</h2>
            <div className="space-y-6">
              <TrendSearch onSearchResults={handleSearchResults} />
              <MarketSearch onSearch={handleMarketSearch} />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-8">
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <MarketResults 
              trendResults={searchResults}
              marketData={marketData}
              isLoading={false}
              error={error}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Markets;