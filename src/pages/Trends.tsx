import { TrendSearch } from "@/components/TrendSearch";
import { TrendResults } from "@/components/TrendResults";
import { TrendingTopics } from "@/components/trends/TrendingTopics";
import { useState } from "react";
import type { TrendData } from "@/types/trends";
import { PageSEO } from "@/components/seo/PageSEO";
import { Loader2 } from "lucide-react";

const Trends = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState("US");

  const handleSearchResults = async (results: TrendData) => {
    try {
      setIsLoading(true);
      console.log("Search results received:", results);
      setSearchResults(results);
    } catch (error) {
      console.error("Error handling search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageSEO 
        title="Market Trend Analysis"
        description="Track and analyze market trends in real-time with our comprehensive trend analysis tools and insights."
      />
      <div className="container mx-auto p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Market Trend Analysis</h1>
        
        <div className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2">
              <TrendSearch onSearchResults={handleSearchResults} />
            </div>
            <div className="md:col-span-1">
              <TrendingTopics country={country} />
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            searchResults && <TrendResults data={searchResults} />
          )}
        </div>
      </div>
    </>
  );
};

export default Trends;