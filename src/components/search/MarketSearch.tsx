import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MarketSearchProps {
  onSearch: (query: string, region: string, timeframe: string) => void;
}

export const MarketSearch = ({ onSearch }: MarketSearchProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [region, setRegion] = React.useState("worldwide");
  const [timeframe, setTimeframe] = React.useState("7d");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, region, timeframe);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold text-center">Market Trend Analysis</h1>
      <p className="text-muted-foreground text-center">
        Discover emerging market opportunities and analyze trends across different regions
      </p>
      
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search markets or trends..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="worldwide">Worldwide</SelectItem>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="eu">Europe</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="12m">Last 12 months</SelectItem>
          </SelectContent>
        </Select>
        
        <Button type="submit" className="w-full md:w-auto">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </form>
    </div>
  );
};