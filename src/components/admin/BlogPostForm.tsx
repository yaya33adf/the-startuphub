import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPostEditor } from "./BlogPostEditor";
import { BlogPostActions } from "./BlogPostActions";
import { useCreateBlogPost } from "@/hooks/useCreateBlogPost";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const BlogPostForm = () => {
  const [keyword, setKeyword] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const {
    blogTitle,
    setBlogTitle,
    blogContent,
    setBlogContent,
    imageUrl,
    isUploading,
    isSubmitting,
    isDeleting,
    isPublishing,
    currentPostId,
    handleImageUpload,
    handleSubmit,
    handleDelete,
    handlePublish,
  } = useCreateBlogPost();

  const generateContent = async () => {
    if (!keyword.trim()) {
      toast.error("Please enter a keyword first");
      return;
    }

    setIsGenerating(true);
    try {
      console.log('Calling generate-blog-content function with keyword:', keyword);
      const { data, error } = await supabase.functions.invoke('generate-blog-content', {
        body: { keyword }
      });

      if (error) {
        console.error('Error from edge function:', error);
        throw error;
      }

      console.log('Generated content:', data);

      if (!data?.title || !data?.content) {
        throw new Error('Invalid content generated');
      }

      setBlogTitle(data.title);
      setBlogContent(data.content);
      toast.success("Blog content generated successfully!");
    } catch (error) {
      console.error('Error generating content:', error);
      toast.error("Failed to generate content. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Blog Post</CardTitle>
        <CardDescription>Add new content to your blog</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex gap-4 mb-4">
            <Input
              placeholder="Enter main keyword for AI generation..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button 
              onClick={generateContent} 
              disabled={isGenerating}
              variant="outline"
            >
              <Wand2 className="w-4 h-4 mr-2" />
              {isGenerating ? "Generating..." : "Generate"}
            </Button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <BlogPostEditor
            blogTitle={blogTitle}
            setBlogTitle={setBlogTitle}
            blogContent={blogContent}
            setBlogContent={setBlogContent}
            onImageUpload={handleImageUpload}
            imageUrl={imageUrl}
            isUploading={isUploading}
          />
          <BlogPostActions
            isSubmitting={isSubmitting}
            isDeleting={isDeleting}
            isPublishing={isPublishing}
            currentPostId={currentPostId}
            onDelete={handleDelete}
            onPublish={handlePublish}
          />
        </form>
      </CardContent>
    </Card>
  );
};