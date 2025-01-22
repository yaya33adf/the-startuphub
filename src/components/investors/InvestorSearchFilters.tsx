import { Search, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface InvestorSearchFiltersProps {
  searchName: string;
  selectedCountry: string;
  uniqueCountries: string[];
  onSearchNameChange: (value: string) => void;
  onCountryChange: (value: string) => void;
}

export const InvestorSearchFilters = ({
  searchName,
  selectedCountry,
  uniqueCountries,
  onSearchNameChange,
  onCountryChange,
}: InvestorSearchFiltersProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name..."
          value={searchName}
          onChange={(e) => onSearchNameChange(e.target.value)}
          className="pl-8"
        />
      </div>
      <Select value={selectedCountry} onValueChange={onCountryChange}>
        <SelectTrigger className="w-full sm:w-[200px]">
          <Globe className="h-4 w-4 mr-2" />
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Countries</SelectItem>
          {uniqueCountries.map((country) => (
            <SelectItem key={country} value={country}>
              {country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};