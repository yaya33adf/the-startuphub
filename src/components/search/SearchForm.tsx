import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFormProps {
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  region: string;
  onRegionChange: (value: string) => void;
  timeframe: string;
  onTimeframeChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const countries = [
  { value: "global", label: "Worldwide" },
  { value: "af", label: "Afghanistan" },
  { value: "al", label: "Albania" },
  { value: "dz", label: "Algeria" },
  { value: "ar", label: "Argentina" },
  { value: "au", label: "Australia" },
  { value: "at", label: "Austria" },
  { value: "bd", label: "Bangladesh" },
  { value: "be", label: "Belgium" },
  { value: "br", label: "Brazil" },
  { value: "ca", label: "Canada" },
  { value: "cl", label: "Chile" },
  { value: "cn", label: "China" },
  { value: "co", label: "Colombia" },
  { value: "cz", label: "Czech Republic" },
  { value: "dk", label: "Denmark" },
  { value: "eg", label: "Egypt" },
  { value: "fi", label: "Finland" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "gr", label: "Greece" },
  { value: "hk", label: "Hong Kong" },
  { value: "hu", label: "Hungary" },
  { value: "in", label: "India" },
  { value: "id", label: "Indonesia" },
  { value: "ir", label: "Iran" },
  { value: "iq", label: "Iraq" },
  { value: "ie", label: "Ireland" },
  { value: "il", label: "Israel" },
  { value: "it", label: "Italy" },
  { value: "jp", label: "Japan" },
  { value: "jo", label: "Jordan" },
  { value: "ke", label: "Kenya" },
  { value: "kr", label: "South Korea" },
  { value: "kw", label: "Kuwait" },
  { value: "my", label: "Malaysia" },
  { value: "mx", label: "Mexico" },
  { value: "ma", label: "Morocco" },
  { value: "nl", label: "Netherlands" },
  { value: "nz", label: "New Zealand" },
  { value: "ng", label: "Nigeria" },
  { value: "no", label: "Norway" },
  { value: "pk", label: "Pakistan" },
  { value: "pe", label: "Peru" },
  { value: "ph", label: "Philippines" },
  { value: "pl", label: "Poland" },
  { value: "pt", label: "Portugal" },
  { value: "qa", label: "Qatar" },
  { value: "ro", label: "Romania" },
  { value: "ru", label: "Russia" },
  { value: "sa", label: "Saudi Arabia" },
  { value: "sg", label: "Singapore" },
  { value: "za", label: "South Africa" },
  { value: "es", label: "Spain" },
  { value: "se", label: "Sweden" },
  { value: "ch", label: "Switzerland" },
  { value: "tw", label: "Taiwan" },
  { value: "th", label: "Thailand" },
  { value: "tr", label: "Turkey" },
  { value: "ae", label: "United Arab Emirates" },
  { value: "gb", label: "United Kingdom" },
  { value: "us", label: "United States" },
  { value: "vn", label: "Vietnam" },
];

export const SearchForm = ({
  searchQuery,
  onSearchQueryChange,
  region,
  onRegionChange,
  timeframe,
  onTimeframeChange,
  onSubmit,
  isLoading,
}: SearchFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Search for trends (e.g., AI, Crypto, Electric Cars)"
          value={searchQuery}
          onChange={(e) => onSearchQueryChange(e.target.value)}
          className="w-full min-h-[44px]"
        />
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={region} onValueChange={onRegionChange}>
            <SelectTrigger className="w-full min-h-[44px]">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.value} value={country.value}>
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={timeframe} onValueChange={onTimeframeChange}>
            <SelectTrigger className="w-full min-h-[44px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          type="submit" 
          className="w-full min-h-[44px]" 
          disabled={isLoading}
        >
          <Search className="w-4 h-4 mr-2" />
          {isLoading ? "Searching..." : "Explore Trends"}
        </Button>
      </div>
    </form>
  );
};