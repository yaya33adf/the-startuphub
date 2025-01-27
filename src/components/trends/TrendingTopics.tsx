import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

interface TrendingTopic {
  title: string;
  score: number;
}

interface TrendingTopicsProps {
  country: string;
  period: string;
}

export const TrendingTopics = ({ country, period }: TrendingTopicsProps) => {
  const { data: trendingTopics, isLoading } = useQuery({
    queryKey: ["trending-topics", country, period],
    queryFn: async () => {
      console.log("Fetching trending topics for:", { country, period });
      const { data, error } = await supabase.functions.invoke('google-trends', {
        body: { 
          action: 'daily-trends',
          country: country || 'US',
          timeframe: period || '7d'
        }
      });

      if (error) {
        console.error('Error fetching trending topics:', error);
        throw error;
      }

      console.log("Received trending topics:", data?.trends);
      return data?.trends || [];
    }
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Today's Trending Topics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-8 w-full" />
          ))}
        </CardContent>
      </Card>
    );
  }

  if (!trendingTopics || trendingTopics.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Today's Trending Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No trending topics found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Trending Topics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic: TrendingTopic, index: number) => (
            <Badge 
              key={index}
              variant={index < 3 ? "default" : "secondary"}
              className="text-sm py-1 px-3"
            >
              {topic.title}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};