import { useQuery } from "@tanstack/react-query";
import { BookOpen } from "lucide-react";
import { PageSEO } from "@/components/seo/PageSEO";
import { StructuredData } from "@/components/seo/StructuredData";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["published-blog-posts"],
    queryFn: async () => {
      console.log("Fetching published blog posts");
      const { data, error } = await supabase
        .from("blog_posts")
        .select(`
          *,
          users:author_id (
            name
          )
        `)
        .eq("status", "published") // Only fetch published posts
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching blog posts:", error);
        throw error;
      }

      return data;
    },
  });

  // Get the first post for the main schema
  const mainPost = posts?.[0];

  return (
    <>
      <PageSEO 
        title="Blog - Business Insights & Market Analysis"
        description="Read expert articles on business trends, market analysis, and entrepreneurial insights to help grow your business and stay ahead of the competition."
      />
      {mainPost && (
        <StructuredData
          type="article"
          articleData={{
            title: mainPost.title,
            description: mainPost.excerpt || mainPost.content.slice(0, 200),
            image: mainPost.image_url,
            datePublished: mainPost.created_at,
            dateModified: mainPost.updated_at || mainPost.created_at,
            authorName: mainPost.users?.name || 'TrendSpot Team',
            category: mainPost.category,
            tags: mainPost.tags
          }}
        />
      )}
      <div className="p-8">
        <div className="flex items-center space-x-2 mb-6">
          <BookOpen className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Blog</h1>
        </div>

        {isLoading ? (
          <div className="text-center">Loading posts...</div>
        ) : !posts?.length ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">No Posts Yet</CardTitle>
              <CardDescription className="text-center">
                Check back soon for expert insights on business trends, 
                market analysis, and entrepreneurial guidance.
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <div className="grid gap-6 max-w-4xl mx-auto">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    By {post.users?.name || 'Anonymous'} • {new Date(post.created_at).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {post.image_url && (
                    <img 
                      src={post.image_url} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                  )}
                  <p className="text-muted-foreground">{post.excerpt || post.content.slice(0, 200)}...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;