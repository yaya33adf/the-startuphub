import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/community/SearchBar";
import { LocationPeriodSelect } from "@/components/search/LocationPeriodSelect";

interface MarketSearchProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  country: string;
  setCountry: (value: string) => void;
  period: string;
  setPeriod: (value: string) => void;
  onSearch: () => void;
}

export const MarketSearch = ({
  searchQuery,
  onSearchChange,
  country,
  setCountry,
  period,
  setPeriod,
  onSearch,
}: MarketSearchProps) => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex gap-4">
        <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
        <Button onClick={onSearch}>
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
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