import { MarketSearch } from "@/components/markets/MarketSearch";
import { useToast } from "@/components/ui/use-toast";
import { calculateTrendScores } from "@/services/trendService";
import type { TrendData } from "@/types/trends";

interface CrowdfundingSearchProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  country: string;
  setCountry: (value: string) => void;
  period: string;
  setPeriod: (value: string) => void;
  onTrendResults: (results: TrendData) => void;
  refetchCompanies: () => void;
}

export const CrowdfundingSearch = ({
  searchQuery,
  onSearchChange,
  country,
  setCountry,
  period,
  setPeriod,
  onTrendResults,
  refetchCompanies
}: CrowdfundingSearchProps) => {
  const { toast } = useToast();

  const handleSearch = async () => {
    console.log("Exploring opportunities:", searchQuery);
    if (!searchQuery) {
      toast({
        title: "Search query required",
        description: "Please enter a market or topic to explore",
        variant: "destructive",
      });
      return;
    }

    try {
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
        toast({
          title: "Market Analysis Complete",
          description: `Trend score for "${searchQuery}": ${results.score}/100`,
        });
      }
      
      refetchCompanies();
    } catch (error) {
      console.error("Error calculating trends:", error);
      toast({
        title: "Error analyzing market trends",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <MarketSearch
      searchQuery={searchQuery}
      onSearchChange={onSearchChange}
      country={country}
      setCountry={setCountry}
      period={period}
      setPeriod={setPeriod}
      onSearch={handleSearch}
      buttonText="Explore Projects"
    />
  );
};