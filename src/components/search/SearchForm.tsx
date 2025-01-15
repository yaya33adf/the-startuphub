import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Globe, Calendar } from "lucide-react";
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
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search for trends (e.g., AI, Crypto, Electric Cars)"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            className="w-full"
          />
        </div>
        
        <Select value={region} onValueChange={onRegionChange}>
          <SelectTrigger className="w-full md:w-[180px]">
            <Globe className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="worldwide">Worldwide</SelectItem>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="eu">Europe</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="other">Other Regions</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={timeframe} onValueChange={onTimeframeChange}>
          <SelectTrigger className="w-full md:w-[180px]">
            <Calendar className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="12m">Last 12 months</SelectItem>
          </SelectContent>
        </Select>
        
        <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
          <Search className="w-4 h-4 mr-2" />
          {isLoading ? "Searching..." : "Explore Trends"}
        </Button>
      </div>
    </form>
  );
};