import { Badge } from "@/components/ui/badge";

interface PopularSearchesProps {
  searches: string[];
  onSearchSelect: (query: string) => void;
}

export const PopularSearches = ({ searches, onSearchSelect }: PopularSearchesProps) => {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">Popular Searches:</p>
      <div className="flex flex-wrap gap-2">
        {searches.map((search) => (
          <Badge
            key={search}
            variant="secondary"
            className="cursor-pointer hover:bg-secondary/80"
            onClick={() => onSearchSelect(search)}
          >
            {search}
          </Badge>
        ))}
      </div>
    </div>
  );
};