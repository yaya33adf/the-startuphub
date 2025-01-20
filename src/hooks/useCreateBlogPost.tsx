import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useCreateBlogPost = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);

  useEffect(() => {
    fetchCurrentPost();
  }, []);

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

      if (error) {
        console.error('Error fetching blog post:', error);
        return;
      }
      
      if (data) {
        setBlogTitle(data.title);
        setBlogContent(data.content);
        setImageUrl(data.image_url);
        setCurrentPostId(data.id);
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
      toast.error("Failed to fetch blog post");
    }
  };

  const handleImageUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `blog-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setImageUrl(publicUrl);
      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error("Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogTitle.trim() || !blogContent.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

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
          title: blogTitle.trim(),
          content: blogContent.trim(),
          author_id: user.id,
          status: 'draft',
          image_url: imageUrl
        });

      if (error) throw error;

      toast.success("Blog post created successfully!");
      setBlogTitle("");
      setBlogContent("");
      setImageUrl(null);
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
      if (imageUrl) {
        const imagePath = imageUrl.split('/').pop();
        if (imagePath) {
          await supabase.storage
            .from('blog-images')
            .remove([`blog-images/${imagePath}`]);
        }
      }

      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;
      
      toast.success("Blog post deleted successfully!");
      setBlogTitle("");
      setBlogContent("");
      setImageUrl(null);
      setCurrentPostId(null);
    } catch (error) {
      console.error('Error deleting blog post:', error);
      toast.error("Failed to delete blog post");
    } finally {
      setIsDeleting(false);
    }
  };

  const handlePublish = async (postId: string) => {
    setIsPublishing(true);
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ status: 'published' })
        .eq('id', postId);

      if (error) throw error;

      toast.success("Blog post published successfully!");
    } catch (error) {
      console.error('Error publishing blog post:', error);
      toast.error("Failed to publish blog post");
    } finally {
      setIsPublishing(false);
    }
  };

  return {
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
  };
};