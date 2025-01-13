import { useQuery } from "@tanstack/react-query";
import { BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Blog = () => {
  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      console.log("Fetching blog posts...");
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching blog posts:", error);
        throw error;
      }
      
      console.log("Fetched blog posts:", data);
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="flex items-center space-x-2 mb-6">
          <BookOpen className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Blog</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded"></div>
                  <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="flex items-center space-x-2 mb-6">
          <BookOpen className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Blog</h1>
        </div>
        <Card className="bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-600">Error Loading Blog Posts</CardTitle>
            <CardDescription>
              There was an error loading the blog posts. Please try again later.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center space-x-2 mb-6">
        <BookOpen className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Blog</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts?.map((post) => (
          <Card key={post.id} className="flex flex-col">
            {post.image_url && (
              <div className="relative w-full h-48">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                {post.read_time && (
                  <span className="text-sm text-muted-foreground">
                    {post.read_time} read
                  </span>
                )}
                {post.category && (
                  <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                    {post.category}
                  </span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground line-clamp-3">
                {post.excerpt || post.content}
              </p>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;