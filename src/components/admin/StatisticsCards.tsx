import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const StatisticsCards = () => {
  const { data: totalUsers, isLoading: loadingUsers } = useQuery({
    queryKey: ['adminStats', 'users'],
    queryFn: async () => {
      console.log('Fetching total users count...');
      const { data: { user } } = await supabase.auth.getUser();
      console.log('Current user:', user);

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

  const { data: publishedPosts, isLoading: loadingPosts } = useQuery({
    queryKey: ['adminStats', 'posts'],
    queryFn: async () => {
      console.log('Fetching published posts count...');
      const { count, error } = await supabase
        .from('blog_posts')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'published');
      
      if (error) {
        console.error('Error fetching posts:', error);
        throw error;
      }
      console.log('Published posts count:', count);
      return count || 0;
    }
  });

  const { data: activeUsers, isLoading: loadingActive } = useQuery({
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

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Manage user accounts and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          {loadingUsers ? (
            <div className="flex items-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <p>Loading users...</p>
            </div>
          ) : (
            <p className="text-2xl font-bold">Total users: {totalUsers}</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Content Management</CardTitle>
          <CardDescription>Manage blog posts and content</CardDescription>
        </CardHeader>
        <CardContent>
          {loadingPosts ? (
            <div className="flex items-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <p>Loading posts...</p>
            </div>
          ) : (
            <p className="text-2xl font-bold">Published posts: {publishedPosts}</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>View site statistics and metrics</CardDescription>
        </CardHeader>
        <CardContent>
          {loadingActive ? (
            <div className="flex items-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <p>Loading analytics...</p>
            </div>
          ) : (
            <p className="text-2xl font-bold">Active users: {activeUsers}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};