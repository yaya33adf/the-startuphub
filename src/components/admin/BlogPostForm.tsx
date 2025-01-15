import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";

export const BlogPostForm = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Blog Post</CardTitle>
        <CardDescription>Add new content to your blog</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleBlogSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              placeholder="Enter blog title"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
              placeholder="Write your blog content..."
              className="min-h-[200px]"
              required
            />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Create Post
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};