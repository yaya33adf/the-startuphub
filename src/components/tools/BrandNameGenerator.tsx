import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const BrandNameGenerator = () => {
  const [keyword, setKeyword] = useState("");
  const [industry, setIndustry] = useState("");
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateNames = async () => {
    if (!keyword.trim() || !industry.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide both a keyword and industry.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-brand-names", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword, industry }),
      });

      if (!response.ok) throw new Error("Failed to generate names");

      const data = await response.json();
      setGeneratedNames(data.names || []);
      
      toast({
        title: "Success!",
        description: "Brand names generated successfully.",
      });
    } catch (error) {
      console.error("Error generating names:", error);
      toast({
        title: "Error",
        description: "Failed to generate brand names. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="keyword">Keyword</Label>
        <Input
          id="keyword"
          placeholder="Enter a keyword related to your brand"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Input
          id="industry"
          placeholder="Enter your industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        />
      </div>

      <Button 
        onClick={generateNames}
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? "Generating..." : "Generate Names"}
      </Button>

      {generatedNames.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Generated Names:</h3>
          <div className="space-y-2">
            {generatedNames.map((name, index) => (
              <div
                key={index}
                className="p-3 bg-accent rounded-md hover:bg-accent/80 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};