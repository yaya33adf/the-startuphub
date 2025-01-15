import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { BookTitleCard } from "./BookTitleCard";

interface BookTitlesListProps {
  titles: string[];
  onRefresh: () => void;
  isLoading: boolean;
}

export const BookTitlesList = ({ titles, onRefresh, isLoading }: BookTitlesListProps) => {
  if (titles.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Generated Titles:</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={onRefresh}
          disabled={isLoading}
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh Titles
        </Button>
      </div>
      <div className="grid gap-2">
        {titles.map((title, index) => (
          <BookTitleCard key={index} title={title} />
        ))}
      </div>
    </div>
  );
};