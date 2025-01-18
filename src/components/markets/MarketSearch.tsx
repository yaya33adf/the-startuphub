import { useToast } from "@/components/ui/use-toast";
import { calculateTrendScores } from "@/services/trendService";
import type { TrendData } from "@/types/trends";
import { Search, Globe, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MarketSearchProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  country: string;
  setCountry: (value: string) => void;
  period: string;
  setPeriod: (value: string) => void;
  onSearch: (query: string, region: string, timeframe: string) => void;
  onTrendResults?: (results: TrendData) => void;
  buttonText?: string;
}

export const MarketSearch = ({
  searchQuery,
  onSearchChange,
  country,
  setCountry,
  period,
  setPeriod,
  onSearch,
  onTrendResults,
  buttonText = "Search Markets"
}: MarketSearchProps) => {
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Starting market search with:", { searchQuery, country, period });

    if (!searchQuery.trim()) {
      toast({
        title: "Search query required",
        description: "Please enter a market or topic to search for",
        variant: "destructive",
      });
      return;
    }

    try {
      // Calculate trend scores
      if (onTrendResults) {
        const results = await calculateTrendScores(searchQuery);
        console.log("Trend results:", results);
        
        if (results) {
          const metadata = typeof results.metadata === 'object' && results.metadata !== null ? results.metadata : {};
          
          const extractScore = (key: string): { score: number; metadata?: any } => {
            if (
              typeof metadata === 'object' && 
              key in metadata && 
              metadata[key] && 
              typeof metadata[key] === 'object' && 
              'score' in metadata[key] && 
              typeof metadata[key].score === 'number'
            ) {
              return {
                score: metadata[key].score,
                metadata: metadata[key].metadata
              };
            }
            return { score: 0 };
          };
          
          const trendData: TrendData = {
            score: results.score,
            metadata: {
              github: extractScore('github'),
              google_trends: extractScore('google_trends'),
              hacker_news: extractScore('hacker_news'),
              stack_overflow: extractScore('stack_overflow'),
              wikipedia: extractScore('wikipedia'),
              npm: extractScore('npm'),
              pypi: extractScore('pypi')
            }
          };
          
          onTrendResults(trendData);
        }
      }

      // Call the original search handler
      onSearch(searchQuery, country, period);
    } catch (error) {
      console.error("Error in market search:", error);
      toast({
        title: "Error analyzing market trends",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search markets or trends..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full"
          />
        </div>
        
        <Select value={country} onValueChange={setCountry}>
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
        
        <Select value={period} onValueChange={setPeriod}>
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
        
        <Button type="submit" className="w-full md:w-auto">
          <Search className="w-4 h-4 mr-2" />
          {buttonText}
        </Button>
      </div>
    </form>
  );
};