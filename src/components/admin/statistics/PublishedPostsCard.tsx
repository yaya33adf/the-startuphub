import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export const PublishedPostsCard = () => {
  const { data: publishedPosts, isLoading } = useQuery({
    queryKey: ["publishedPosts"],
    queryFn: async () => {
      console.log("Fetching published posts count");
      const { count, error } = await supabase
        .from("blog_posts")
        .select("*", { count: "exact", head: true })
        .eq("status", "published");

      if (error) {
        console.error("Error fetching published posts:", error);
        throw error;
      }
      return count || 0;
    },
    staleTime: 30000,
    refetchOnWindowFocus: false
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Published Posts</CardTitle>
        <FileText className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {isLoading ? "Loading..." : publishedPosts}
        </div>
      </CardContent>
    </Card>
  );
};