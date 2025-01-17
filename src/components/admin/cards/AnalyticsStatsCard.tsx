import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const AnalyticsStatsCard = () => {
  const { data: activeUsers, isLoading, error } = useQuery({
    queryKey: ['adminStats', 'activeUsers'],
    queryFn: async () => {
      console.log('Fetching active users count...');
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const { count, error } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', thirtyDaysAgo.toISOString());
      
      if (error) {
        console.error('Error fetching active users:', error);
        throw error;
      }
      console.log('Active users count:', count);
      return count || 0;
    }
  });

  if (error) {
    console.error('Error in AnalyticsStatsCard:', error);
    return (
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>Error loading analytics data</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>View site statistics and metrics</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <p>Loading analytics...</p>
          </div>
        ) : (
          <p className="text-2xl font-bold">Active users: {activeUsers}</p>
        )}
      </CardContent>
    </Card>
  );
};