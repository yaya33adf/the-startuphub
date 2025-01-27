import type { TrendData } from "@/types/trends";
import { SearchHeader } from "./search/SearchHeader";
import { SearchLogic } from "./search/SearchLogic";
import { LocationPeriodSelect } from "./search/LocationPeriodSelect";
import { useState } from "react";

interface TrendSearchProps {
  onSearchResults: (results: TrendData) => void;
  onCountryChange: (country: string) => void;
  onPeriodChange: (period: string) => void;
}

export const TrendSearch = ({ onSearchResults, onCountryChange, onPeriodChange }: TrendSearchProps) => {
  const [country, setCountry] = useState("global");
  const [period, setPeriod] = useState("7d");

  const handleSearchResults = (results: TrendData) => {
    console.log("Search results in TrendSearch:", results);
    if (results) {
      onSearchResults(results);
    }
  };

  const handleCountryChange = (newCountry: string) => {
    setCountry(newCountry);
    onCountryChange(newCountry);
  };

  const handlePeriodChange = (newPeriod: string) => {
    setPeriod(newPeriod);
    onPeriodChange(newPeriod);
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
          setCountry={handleCountryChange}
          period={period}
          setPeriod={handlePeriodChange}
        />
      </div>
    </div>
  );
};