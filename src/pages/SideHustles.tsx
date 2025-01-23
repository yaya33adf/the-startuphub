import { useState } from "react";
import { SideHustleHeader } from "@/components/side-hustles/SideHustleHeader";
import { SideHustleResults } from "@/components/side-hustles/SideHustleResults";
import { TrendSearch } from "@/components/TrendSearch";
import type { TrendData } from "@/types/trends";
import { Loader2 } from "lucide-react";

const SideHustles = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchResults = async (results: TrendData) => {
    try {
      setIsLoading(true);
      console.log("Side hustles search results:", results);
      setSearchResults(results);
    } catch (error) {
      console.error("Error handling side hustles search:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <SideHustleHeader />
      <div className="space-y-8">
        <TrendSearch onSearchResults={handleSearchResults} />
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          searchResults && <SideHustleResults data={searchResults} />
        )}
      </div>
    </div>
  );
};

export default SideHustles;