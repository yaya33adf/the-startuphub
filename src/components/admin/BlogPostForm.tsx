import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { BlogPostEditor } from "./BlogPostEditor";
import { BlogPostActions } from "./BlogPostActions";

export const BlogPostForm = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('author_id', user.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (error) throw error;
        
        if (data) {
          setBlogTitle(data.title);
          setBlogContent(data.content);
          setCurrentPostId(data.id);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchCurrentPost();
  }, []);

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("You must be logged in to create a blog post");
        return;
      }

      const { error } = await supabase
        .from('blog_posts')
        .insert({
          title: blogTitle,
          content: blogContent,
          author_id: user.id,
          status: 'draft'
        });

      if (error) throw error;

      toast.success("Blog post created successfully!");
      setBlogTitle("");
      setBlogContent("");
    } catch (error) {
      console.error('Error creating blog post:', error);
      toast.error("Failed to create blog post");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (postId: string) => {
    if (!postId) {
      toast.error("No post selected for deletion");
      return;
    }

    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;
      
      toast.success("Blog post deleted successfully!");
      setBlogTitle("");
      setBlogContent("");
      setCurrentPostId(null);
    } catch (error) {
      console.error('Error deleting blog post:', error);
      toast.error("Failed to delete blog post");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Blog Post</CardTitle>
        <CardDescription>Add new content to your blog</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleBlogSubmit} className="space-y-4">
          <BlogPostEditor
            blogTitle={blogTitle}
            setBlogTitle={setBlogTitle}
            blogContent={blogContent}
            setBlogContent={setBlogContent}
          />
          <BlogPostActions
            isSubmitting={isSubmitting}
            isDeleting={isDeleting}
            currentPostId={currentPostId}
            onDelete={handleDelete}
          />
        </form>
      </CardContent>
    </Card>
  );
};