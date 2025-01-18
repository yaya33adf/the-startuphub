import type { TrendData } from "@/types/trends";
import { SearchHeader } from "./search/SearchHeader";
import { SearchLogic } from "./search/SearchLogic";

interface TrendSearchProps {
  onSearchResults: (results: TrendData) => void;
}

export const TrendSearch = ({ onSearchResults }: TrendSearchProps) => {
  return (
    <div className="space-y-6">
      <SearchHeader />
      <SearchLogic onSearchResults={onSearchResults} />
    </div>
  );
};