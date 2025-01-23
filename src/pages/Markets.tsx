import { TrendSearch } from "@/components/TrendSearch";
import { MarketResults } from "@/components/markets/MarketResults";
import { useState } from "react";
import type { TrendData } from "@/types/trends";
import { PageSEO } from "@/components/seo/PageSEO";
import { Loader2 } from "lucide-react";
import { MarketHeader } from "@/components/markets/MarketHeader";

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

  return (
    <>
      <PageSEO 
        title="Market Analysis & Opportunities"
        description="Track and analyze market trends in real-time with our comprehensive market analysis tools and insights."
      />
      <div className="container mx-auto p-8 space-y-8">
        <MarketHeader />
        <TrendSearch onSearchResults={handleSearchResults} />
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          searchResults && (
            <MarketResults 
              trendResults={searchResults}
              marketData={[]}
              isLoading={false}
              error={error}
            />
          )
        )}
      </div>
    </>
  );
};

export default Markets;