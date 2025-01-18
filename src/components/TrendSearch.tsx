import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { calculateTrendScores } from "@/services/trendService";
import { useSession } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import type { TrendData } from "@/types/trends";
import { SearchHeader } from "./search/SearchHeader";
import { SearchForm } from "./search/SearchForm";
import { PopularSearches } from "./search/PopularSearches";
import { GeneratedIdeas } from "./search/GeneratedIdeas";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "./ui/button";
import { Lightbulb } from "lucide-react";

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
  const [isGeneratingIdeas, setIsGeneratingIdeas] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<Array<{ title: string; description: string }>>([]);
  const { toast } = useToast();
  const session = useSession();
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!session) {
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

  const generateIdeas = async () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Search query required",
        description: "Please enter a keyword to generate ideas.",
        variant: "destructive",
      });
      return;
    }

    setIsGeneratingIdeas(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-ideas', {
        body: { keyword: searchQuery }
      });

      if (error) {
        // Check if the error is related to OpenAI quota
        if (error.message?.includes('insufficient_quota') || error.message?.includes('exceeded your current quota')) {
          toast({
            title: "OpenAI API Quota Exceeded",
            description: "The API quota has been exceeded. Please try again later or check the billing details.",
            variant: "destructive",
          });
          console.error('OpenAI quota exceeded:', error);
          return;
        }
        throw error;
      }

      setGeneratedIdeas(data.ideas);
      toast({
        title: "Ideas Generated",
        description: "Check out your new business ideas below!",
      });
    } catch (error) {
      console.error('Error generating ideas:', error);
      toast({
        title: "Error generating ideas",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingIdeas(false);
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
      <div className="flex justify-center">
        <Button
          onClick={generateIdeas}
          disabled={isGeneratingIdeas || !searchQuery.trim()}
          className="w-full md:w-auto"
        >
          <Lightbulb className={`w-4 h-4 mr-2 ${isGeneratingIdeas ? 'animate-spin' : ''}`} />
          {isGeneratingIdeas ? "Generating Ideas..." : "Generate Ideas"}
        </Button>
      </div>
      <GeneratedIdeas
        ideas={generatedIdeas}
        isLoading={isGeneratingIdeas}
        onRefresh={generateIdeas}
      />
      <PopularSearches 
        searches={popularSearches}
        onSearchSelect={handlePopularSearch}
      />
    </div>
  );
};