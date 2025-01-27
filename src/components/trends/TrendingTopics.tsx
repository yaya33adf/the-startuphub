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
}

export const TrendingTopics = ({ country }: TrendingTopicsProps) => {
  const { data: trendingTopics, isLoading } = useQuery({
    queryKey: ["trending-topics", country],
    queryFn: async () => {
      console.log("Fetching trending topics for country:", country);
      const { data, error } = await supabase.functions.invoke('google-trends', {
        body: { 
          action: 'daily-trends',
          country: country 
        }
      });

      if (error) {
        console.error('Error fetching trending topics:', error);
        throw error;
      }

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Trending Topics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {trendingTopics?.map((topic: TrendingTopic, index: number) => (
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