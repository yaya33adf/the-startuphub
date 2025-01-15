import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { BookNameForm } from "./book-generator/BookNameForm";
import { BookTitlesList } from "./book-generator/BookTitlesList";

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
      <BookNameForm
        genre={genre}
        keywords={keywords}
        onGenreChange={setGenre}
        onKeywordsChange={setKeywords}
        onSubmit={generateBookNames}
        isLoading={isLoading}
      />
      <BookTitlesList
        titles={generatedTitles}
        onRefresh={handleRefresh}
        isLoading={isLoading}
      />
    </div>
  );
};