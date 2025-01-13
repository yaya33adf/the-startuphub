import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { SearchForm } from "./search/SearchForm";
import { calculateTrendScores } from "@/services/trendService";
import type { TrendData } from "@/types/trends";

interface TrendSearchProps {
  onSearchResults: (results: TrendData) => void;
}

export const TrendSearch = ({ onSearchResults }: TrendSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useState("global");
  const [period, setPeriod] = useState("7d");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Starting trend search for:", searchQuery);
    
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
      console.log("Calculating trend scores...");
      const result = await calculateTrendScores(searchQuery);
      console.log("Trend scores calculated:", result);
      
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

  return (
    <SearchForm
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      country={country}
      setCountry={setCountry}
      period={period}
      setPeriod={setPeriod}
      onSubmit={handleSearch}
      isLoading={isLoading}
    />
  );
};