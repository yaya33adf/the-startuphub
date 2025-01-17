import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const ContentStatsCard = () => {
  const { data: publishedPosts, isLoading, error } = useQuery({
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

  if (error) {
    console.error('Error in ContentStatsCard:', error);
    return (
      <Card>
        <CardHeader>
          <CardTitle>Content Management</CardTitle>
          <CardDescription>Error loading content data</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Management</CardTitle>
        <CardDescription>Manage blog posts and content</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <p>Loading posts...</p>
          </div>
        ) : (
          <p className="text-2xl font-bold">Published posts: {publishedPosts}</p>
        )}
      </CardContent>
    </Card>
  );
};