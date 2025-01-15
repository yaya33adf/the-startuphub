import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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

export const BookNameGenerator = () => {
  const [genre, setGenre] = useState<string>("");
  const [keywords, setKeywords] = useState("");
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateBookNames = () => {
    if (!genre || !keywords) {
      toast({
        title: "Missing Information",
        description: "Please select a genre and enter keywords to generate book titles.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Mock generation logic - in a real implementation, this could use an AI service
    const keywordsList = keywords.split(",").map(k => k.trim());
    const mockTitles = [
      `The ${keywordsList[0]} Chronicles`,
      `${genre} Guide: ${keywordsList[0]}`,
      `The Art of ${keywordsList[0]}`,
      `${keywordsList[0]}: A ${genre} Journey`,
      `Beyond ${keywordsList[0]}`,
    ];

    setTimeout(() => {
      setGeneratedTitles(mockTitles);
      setIsLoading(false);
      toast({
        title: "Book Titles Generated",
        description: "Check out your suggested book titles below!",
      });
    }, 1000);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    const keywordsList = keywords.split(",").map(k => k.trim());
    const variations = [
      `The ${keywordsList[0]} Legacy`,
      `${genre} Masters: ${keywordsList[0]}`,
      `Secrets of ${keywordsList[0]}`,
      `The ${genre} of ${keywordsList[0]}`,
      `${keywordsList[0]} Unleashed`,
    ];

    setTimeout(() => {
      setGeneratedTitles(variations);
      setIsLoading(false);
      toast({
        title: "New Titles Generated",
        description: "Fresh book title suggestions are ready!",
      });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <Select value={genre} onValueChange={setGenre}>
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
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>

        <Button 
          onClick={generateBookNames} 
          disabled={isLoading} 
          className="w-full"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Generate Book Titles
        </Button>
      </div>

      {generatedTitles.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Generated Titles:</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isLoading}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Titles
            </Button>
          </div>
          <div className="grid gap-2">
            {generatedTitles.map((title, index) => (
              <div
                key={index}
                className="p-3 rounded-lg border bg-card hover:shadow-md transition-shadow"
              >
                {title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};