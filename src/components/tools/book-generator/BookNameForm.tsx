import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen } from "lucide-react";

interface BookNameFormProps {
  genre: string;
  keywords: string;
  onGenreChange: (value: string) => void;
  onKeywordsChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const genres = [
  "Fiction",
  "Non-Fiction",
  "Mystery",
  "Science Fiction",
  "Fantasy",
  "Romance",
  "Business",
  "Self-Help",
  "Biography",
  "History",
  "Technology",
  "Science",
] as const;

export const BookNameForm = ({
  genre,
  keywords,
  onGenreChange,
  onKeywordsChange,
  onSubmit,
  isLoading,
}: BookNameFormProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="genre">Genre</Label>
        <Select value={genre} onValueChange={onGenreChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a genre" />
          </SelectTrigger>
          <SelectContent>
            {genres.map((g) => (
              <SelectItem key={g} value={g}>
                {g}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="keywords">Keywords (comma-separated)</Label>
        <Input
          id="keywords"
          placeholder="e.g., adventure, mystery, journey"
          value={keywords}
          onChange={(e) => onKeywordsChange(e.target.value)}
        />
      </div>

      <Button 
        onClick={onSubmit} 
        disabled={isLoading} 
        className="w-full"
      >
        <BookOpen className="w-4 h-4 mr-2" />
        Generate Book Titles
      </Button>
    </div>
  );
};