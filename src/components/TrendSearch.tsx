import type { TrendData } from "@/types/trends";
import { SearchHeader } from "./search/SearchHeader";
import { SearchLogic } from "./search/SearchLogic";
import { LocationPeriodSelect } from "./search/LocationPeriodSelect";
import { useState } from "react";

interface TrendSearchProps {
  onSearchResults: (results: TrendData) => void;
}

export const TrendSearch = ({ onSearchResults }: TrendSearchProps) => {
  const [country, setCountry] = useState("global");
  const [period, setPeriod] = useState("7d");

  const handleSearchResults = (results: TrendData) => {
    console.log("Search results in TrendSearch:", results);
    if (results) {
      onSearchResults(results);
    }
  };

  return (
    <div className="space-y-6">
      <SearchHeader />
      <SearchLogic 
        onSearchResults={handleSearchResults}
        country={country}
        period={period}
      />
      <div className="flex flex-col md:flex-row gap-4">
        <LocationPeriodSelect
          country={country}
          setCountry={setCountry}
          period={period}
          setPeriod={setPeriod}
        />
      </div>
    </div>
  );
};