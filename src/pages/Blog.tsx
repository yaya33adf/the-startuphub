import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PageSEO } from "@/components/seo/PageSEO";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('Fetching published blog posts...');
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
            author: author_id (
              id,
              email,
              name
            )
          `)
          .eq('status', 'published')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching blog posts:', error);
          return;
        }

        console.log('Fetched published posts:', data?.length || 0);
        setPosts(data || []);
      } catch (error) {
        console.error('Error in fetchPosts:', error);
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
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        {loading ? (
          <div>Loading posts...</div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="border rounded-lg p-4">
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                {post.image_url && (
                  <div className="mt-2">
                    <img src={post.image_url} alt={post.title} className="w-full h-48 object-cover rounded-md" />
                  </div>
                )}
                <div className="mt-4">
                  <span className="text-sm text-gray-500">{post.read_time} min read</span>
                </div>
                <div className="mt-2">
                  <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline">Read more</a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No published posts found.</div>
        )}
      </div>
    </>
  );
};

export default Blog;