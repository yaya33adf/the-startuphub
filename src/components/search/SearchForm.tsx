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
              <SelectItem value="global">Worldwide</SelectItem>
              <SelectItem value="US">United States</SelectItem>
              <SelectItem value="GB">United Kingdom</SelectItem>
              <SelectItem value="CA">Canada</SelectItem>
              <SelectItem value="AU">Australia</SelectItem>
              <SelectItem value="IN">India</SelectItem>
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