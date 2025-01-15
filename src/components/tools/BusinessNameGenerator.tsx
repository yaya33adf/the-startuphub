import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Lightbulb } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const BusinessNameGenerator = () => {
  const [industry, setIndustry] = useState("");
  const [keywords, setKeywords] = useState("");
  const [description, setDescription] = useState("");
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!industry.trim() || !keywords.trim() || !description.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to generate business names.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // For now, generate some example names
      // In a real implementation, you might want to use an AI service
      const mockNames = [
        `${keywords.split(',')[0]} ${industry}`,
        `${industry} Solutions`,
        `${keywords.split(',')[0]} Pro`,
        `${industry} Express`,
        `${keywords.split(',')[0]} Hub`,
      ];
      
      setGeneratedNames(mockNames);
      toast({
        title: "Names Generated",
        description: "Check out your potential business names below!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate business names. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Input
            id="industry"
            placeholder="e.g., Technology, Food, Fashion"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="keywords">Keywords (comma-separated)</Label>
          <Input
            id="keywords"
            placeholder="e.g., innovative, modern, eco-friendly"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Business Description</Label>
          <Textarea
            id="description"
            placeholder="Briefly describe your business idea..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Button type="submit" disabled={isLoading} className="w-full">
          <Lightbulb className="w-4 h-4 mr-2" />
          Generate Names
        </Button>
      </form>

      {generatedNames.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Generated Names:</h3>
          <div className="grid gap-2">
            {generatedNames.map((name, index) => (
              <div
                key={index}
                className="p-3 rounded-lg border bg-card hover:shadow-md transition-shadow"
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