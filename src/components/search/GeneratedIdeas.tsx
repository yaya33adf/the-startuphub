import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";

interface Idea {
  title: string;
  description: string;
}

interface GeneratedIdeasProps {
  ideas: Idea[];
  isLoading: boolean;
  onRefresh: () => void;
}

export const GeneratedIdeas = ({ ideas, isLoading, onRefresh }: GeneratedIdeasProps) => {
  if (!ideas.length) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Generated Ideas</h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onRefresh}
          disabled={isLoading}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh Ideas
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ideas.map((idea, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{idea.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{idea.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};