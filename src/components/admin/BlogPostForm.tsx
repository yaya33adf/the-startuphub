import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPostEditor } from "./BlogPostEditor";
import { BlogPostActions } from "./BlogPostActions";
import { useCreateBlogPost } from "@/hooks/useCreateBlogPost";

export const BlogPostForm = () => {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Blog Post</CardTitle>
        <CardDescription>Add new content to your blog</CardDescription>
      </CardHeader>
      <CardContent>
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