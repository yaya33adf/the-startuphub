import type { TrendData } from "@/types/trends";
import { SearchHeader } from "./search/SearchHeader";
import { SearchLogic } from "./search/SearchLogic";

interface TrendSearchProps {
  onSearchResults: (results: TrendData) => void;
}

export const TrendSearch = ({ onSearchResults }: TrendSearchProps) => {
  const handleSearchResults = (results: TrendData) => {
    console.log("Search results in TrendSearch:", results);
    if (results) {
      onSearchResults(results);
    }
  };

  return (
    <div className="space-y-6">
      <SearchHeader />
      <SearchLogic onSearchResults={handleSearchResults} />
    </div>
  );
};