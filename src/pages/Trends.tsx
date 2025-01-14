import { TrendSearch } from "@/components/TrendSearch";
import { TrendResults } from "@/components/TrendResults";
import { useState } from "react";
import type { TrendData } from "@/types/trends";

const Trends = () => {
  const [searchResults, setSearchResults] = useState<TrendData | null>(null);

  const handleSearchResults = (results: TrendData) => {
    setSearchResults(results);
    console.log("Search results received:", results);
  };

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Market Trend Analysis</h1>
      <TrendSearch onSearchResults={handleSearchResults} />
      {searchResults && <TrendResults data={searchResults} />}
    </div>
  );
};

export default Trends;