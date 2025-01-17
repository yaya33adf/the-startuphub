import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const UserStatsCard = () => {
  const { data: totalUsers, isLoading, error } = useQuery({
    queryKey: ['adminStats', 'users'],
    queryFn: async () => {
      console.log('Fetching total users count...');
      const { count, error } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });
      
      if (error) {
        console.error('Error fetching users:', error);
        throw error;
      }
      console.log('Total users count:', count);
      return count || 0;
    }
  });

  if (error) {
    console.error('Error in UserStatsCard:', error);
    return (
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Error loading user data</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Management</CardTitle>
        <CardDescription>Manage user accounts and permissions</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <p>Loading users...</p>
          </div>
        ) : (
          <p className="text-2xl font-bold">Total users: {totalUsers}</p>
        )}
      </CardContent>
    </Card>
  );
};