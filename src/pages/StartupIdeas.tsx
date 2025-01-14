import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const StartupIdeas = () => {
  const [keyword, setKeyword] = useState("");
  const [ideas, setIdeas] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateIdeas = async () => {
    if (!keyword.trim()) {
      toast({
        title: "Please enter a keyword",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-startup-ideas', {
        body: { keyword },
      });

      if (error) throw error;
      setIdeas(data.ideas);
    } catch (error) {
      toast({
        title: "Error generating ideas",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Startup Ideas Generator</h1>
      
      <div className="flex gap-4 mb-8">
        <Input
          placeholder="Enter a keyword (e.g., AI, sustainability, health)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="max-w-xl"
        />
        <Button 
          onClick={generateIdeas} 
          disabled={isLoading}
          className="min-w-[120px]"
        >
          {isLoading ? "Generating..." : "Generate"}
        </Button>
        {ideas && (
          <Button
            variant="outline"
            onClick={generateIdeas}
            disabled={isLoading}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        )}
      </div>

      {ideas && (
        <Card className="bg-accent/50">
          <CardContent className="pt-6 whitespace-pre-line">
            {ideas}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StartupIdeas;