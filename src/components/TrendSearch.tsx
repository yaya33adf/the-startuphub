import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Globe, Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { calculateTrendScores } from "@/services/trendService";
import type { TrendData } from "@/types/trends";

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
      
      // Safely transform the metadata to match TrendData interface
      const baseMetadata = typeof result.metadata === 'object' && result.metadata !== null 
        ? result.metadata 
        : {};

      const transformedMetadata = {
        ...baseMetadata,
        github: { 
          score: typeof baseMetadata?.github?.score === 'number' ? baseMetadata.github.score : 0,
          metadata: baseMetadata?.github?.metadata
        },
        google_trends: {
          score: typeof baseMetadata?.google_trends?.score === 'number' ? baseMetadata.google_trends.score : 0,
          metadata: baseMetadata?.google_trends?.metadata
        },
        hacker_news: {
          score: typeof baseMetadata?.hacker_news?.score === 'number' ? baseMetadata.hacker_news.score : 0,
          metadata: baseMetadata?.hacker_news?.metadata
        },
        stack_overflow: {
          score: typeof baseMetadata?.stack_overflow?.score === 'number' ? baseMetadata.stack_overflow.score : 0,
          metadata: baseMetadata?.stack_overflow?.metadata
        },
        wikipedia: {
          score: typeof baseMetadata?.wikipedia?.score === 'number' ? baseMetadata.wikipedia.score : 0,
          metadata: baseMetadata?.wikipedia?.metadata
        },
        npm: {
          score: typeof baseMetadata?.npm?.score === 'number' ? baseMetadata.npm.score : 0,
          metadata: baseMetadata?.npm?.metadata
        },
        pypi: {
          score: typeof baseMetadata?.pypi?.score === 'number' ? baseMetadata.pypi.score : 0,
          metadata: baseMetadata?.pypi?.metadata
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
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Global Trends Analysis</h1>
        <p className="text-muted-foreground">
          Discover emerging trends and analyze market opportunities across different regions
        </p>
      </div>

      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search for trends (e.g., AI, Crypto, Electric Cars)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          
          <Select value={region} onValueChange={setRegion}>
            <SelectTrigger className="w-full md:w-[180px]">
              <Globe className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="worldwide">Worldwide</SelectItem>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="eu">Europe</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="other">Other Regions</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-full md:w-[180px]">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
          
          <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
            <Search className="w-4 h-4 mr-2" />
            {isLoading ? "Searching..." : "Explore Trends"}
          </Button>
        </div>
      </form>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Popular Searches:</p>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((search) => (
            <Badge
              key={search}
              variant="secondary"
              className="cursor-pointer hover:bg-secondary/80"
              onClick={() => handlePopularSearch(search)}
            >
              {search}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};