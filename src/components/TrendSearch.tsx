import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { calculateTrendScores } from "@/services/trendService";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import type { TrendData } from "@/types/trends";
import { SearchHeader } from "./search/SearchHeader";
import { SearchForm } from "./search/SearchForm";
import { PopularSearches } from "./search/PopularSearches";

interface TrendSearchProps {
  onSearchResults: (results: TrendData) => void;
}

const popularSearches = [
  "Artificial Intelligence",
  "Virtual Reality",
  "Blockchain",
  "Remote Work",
  "Sustainable Energy"
];

export const TrendSearch = ({ onSearchResults }: TrendSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("worldwide");
  const [timeframe, setTimeframe] = useState("7d");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { session, isLoading: sessionLoading } = useSessionContext();
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Current session state:", session);
    console.log("Session loading state:", sessionLoading);

    if (sessionLoading) {
      console.log("Session is still loading, waiting...");
      return;
    }
    
    if (!session?.user) {
      console.log("No session found, redirecting to login");
      toast({
        title: "Authentication required",
        description: "Please sign in to search trends",
        variant: "destructive",
      });
      navigate("/auth/signin");
      return;
    }

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
      
      const metadata = (typeof result.metadata === 'object' && result.metadata !== null) 
        ? result.metadata as Record<string, { score?: number; metadata?: any }>
        : {};

      const transformedMetadata: TrendData['metadata'] = {
        github: {
          score: metadata.github?.score ?? 0,
          metadata: metadata.github?.metadata ?? null
        },
        google_trends: {
          score: metadata.google_trends?.score ?? 0,
          metadata: metadata.google_trends?.metadata ?? null
        },
        hacker_news: {
          score: metadata.hacker_news?.score ?? 0,
          metadata: metadata.hacker_news?.metadata ?? null
        },
        stack_overflow: {
          score: metadata.stack_overflow?.score ?? 0,
          metadata: metadata.stack_overflow?.metadata ?? null
        },
        wikipedia: {
          score: metadata.wikipedia?.score ?? 0,
          metadata: metadata.wikipedia?.metadata ?? null
        },
        npm: {
          score: metadata.npm?.score ?? 0,
          metadata: metadata.npm?.metadata ?? null
        },
        pypi: {
          score: metadata.pypi?.score ?? 0,
          metadata: metadata.pypi?.metadata ?? null
        }
      };
      
      const trendData: TrendData = {
        score: result.score,
        metadata: transformedMetadata
      };
      
      onSearchResults(trendData);
      
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
    handleSearch(new Event('submit') as any);
  };

  return (
    <div className="space-y-6">
      <SearchHeader />
      <SearchForm
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        region={region}
        onRegionChange={setRegion}
        timeframe={timeframe}
        onTimeframeChange={setTimeframe}
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