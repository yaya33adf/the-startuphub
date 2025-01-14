import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface StartupIdea {
  name: string;
  description: string;
  market: string;
}

const StartupIdeas = () => {
  const [keyword, setKeyword] = useState("");
  const [ideas, setIdeas] = useState<StartupIdea[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateIdeas = async () => {
    if (!keyword.trim()) {
      toast({
        title: "Please enter a keyword",
        description: "Enter a keyword to generate startup ideas",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Generating ideas for keyword:", keyword);

    try {
      const { data, error } = await supabase.functions.invoke('generate-startup-ideas', {
        body: { keyword }
      });

      if (error) throw error;

      console.log("Generated ideas:", data);
      const parsedIdeas = typeof data.ideas === 'string' 
        ? JSON.parse(data.ideas.replace(/\n/g, ''))
        : data.ideas;

      setIdeas(Array.isArray(parsedIdeas) ? parsedIdeas : []);
      
      toast({
        title: "Ideas Generated!",
        description: "Here are your startup ideas based on the keyword.",
      });
    } catch (error) {
      console.error("Error generating ideas:", error);
      toast({
        title: "Error generating ideas",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Startup Ideas Generator</h1>
        <p className="text-muted-foreground">
          Enter a keyword to generate innovative startup ideas
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Enter a keyword (e.g., AI, Sustainability, Health)"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="flex-1"
          />
          <Button 
            onClick={generateIdeas} 
            disabled={isLoading}
            className="min-w-[120px]"
          >
            {isLoading ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <Lightbulb className="w-4 h-4 mr-2" />
                Generate
              </>
            )}
          </Button>
        </div>

        {ideas.length > 0 && (
          <div className="grid gap-4">
            {ideas.map((idea, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{idea.name}</CardTitle>
                  <CardDescription>Target Market: {idea.market}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{idea.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StartupIdeas;