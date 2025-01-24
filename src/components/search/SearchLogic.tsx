import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { calculateTrendScores } from "@/services/trendService";
import { useSessionContext } from "@supabase/auth-helpers-react";
import type { TrendData } from "@/types/trends";
import { SearchForm } from "./SearchForm";
import { PopularSearches } from "./PopularSearches";

interface SearchLogicProps {
  onSearchResults: (results: TrendData) => void;
  country: string;
  period: string;
}

export const SearchLogic = ({ onSearchResults, country, period }: SearchLogicProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { session } = useSessionContext();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search initiated with:", { searchQuery, country, period, session: !!session });

    if (!searchQuery.trim()) {
      toast({
        title: "Search query required",
        description: "Please enter a market or topic to search for.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      console.log("Starting trend calculation for:", searchQuery);
      const result = await calculateTrendScores(searchQuery, country, period);
      
      if (!result) {
        throw new Error("No results returned from trend calculation");
      }
      
      console.log("Received trend results:", result);
      onSearchResults(result);
      
      toast({
        title: "Trend scores calculated",
        description: `Combined trend score for "${searchQuery}": ${result.score}/100`,
      });
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Error calculating trend score",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePopularSearch = (query: string) => {
    setSearchQuery(query);
    const event = new Event('submit') as any;
    handleSearch(event);
  };

  return (
    <div className="space-y-6">
      <SearchForm
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onSubmit={handleSearch}
        isLoading={isLoading}
      />
      <PopularSearches 
        searches={popularSearches}
        onSearchSelect={handlePopularSearch}
      />
    </div>
  );
};

const popularSearches = [
  "Artificial Intelligence",
  "Virtual Reality",
  "Blockchain",
  "Remote Work",
  "Sustainable Energy"
];