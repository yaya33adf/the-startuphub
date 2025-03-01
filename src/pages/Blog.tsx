import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PageSEO } from "@/components/seo/PageSEO";
import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  excerpt?: string;
  content: string;
  image_url?: string;
  category?: string;
  tags?: string[];
  read_time?: string;
  created_at: string;
  author?: {
    id: string;
    email: string;
    name: string;
  };
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('Initiating blog posts fetch...');
        const { data, error } = await supabase
          .from('blog_posts')
          .select(`
            id,
            title,
            excerpt,
            content,
            image_url,
            category,
            tags,
            read_time,
            created_at,
            author:users(
              id,
              email,
              name
            )
          `)
          .eq('status', 'published')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching blog posts:', error);
          toast.error("Failed to load blog posts");
          return;
        }

        console.log('Successfully fetched published posts:', data?.length || 0);
        setPosts(data || []);
      } catch (error) {
        console.error('Error in fetchPosts:', error);
        toast.error("An error occurred while loading posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <PageSEO 
        title="Blog | Startup Hub" 
        description="Latest insights and updates from the Startup Hub community"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {post.image_url && (
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={post.image_url} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-2xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                  {post.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  )}
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">
                      {post.read_time ? `${post.read_time} min read` : ''}
                    </span>
                    <a 
                      href={`/blog/${post.id}`} 
                      className="text-primary hover:text-primary/90 hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No published posts found.
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;