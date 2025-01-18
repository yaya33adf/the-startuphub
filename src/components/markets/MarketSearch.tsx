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
  buttonText = "Explore Markets"
}: MarketSearchProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex gap-4">
        <div className="flex-1">
          <SearchBar 
            searchQuery={searchQuery} 
            onSearchChange={onSearchChange}
            onKeyPress={handleKeyPress}
            placeholder="Search market opportunities..."
          />
        </div>
        <Button 
          onClick={onSearch}
          className="bg-primary hover:bg-primary/90"
        >
          <Search className="w-4 h-4 mr-2" />
          {buttonText}
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