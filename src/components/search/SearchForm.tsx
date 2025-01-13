import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LocationPeriodSelect } from "./LocationPeriodSelect";

interface SearchFormProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  country: string;
  setCountry: (country: string) => void;
  period: string;
  setPeriod: (period: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export const SearchForm = ({
  searchQuery,
  setSearchQuery,
  country,
  setCountry,
  period,
  setPeriod,
  onSubmit,
  isLoading,
}: SearchFormProps) => {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-4xl mx-auto space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search for market trends..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <LocationPeriodSelect
          country={country}
          setCountry={setCountry}
          period={period}
          setPeriod={setPeriod}
        />
        <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
          <Search className="w-4 h-4 mr-2" />
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </div>
    </form>
  );
};