import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";

interface BlogPostEditorProps {
  blogTitle: string;
  setBlogTitle: (title: string) => void;
  blogContent: string;
  setBlogContent: (content: string) => void;
  onImageUpload: (file: File) => Promise<void>;
  imageUrl: string | null;
}

export const BlogPostEditor = ({
  blogTitle,
  setBlogTitle,
  blogContent,
  setBlogContent,
  onImageUpload,
  imageUrl,
}: BlogPostEditorProps) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      await onImageUpload(file);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-4">
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
        <Label htmlFor="image">Featured Image</Label>
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            disabled={isUploading}
            onClick={() => document.getElementById('image-upload')?.click()}
          >
            <ImageIcon className="w-4 h-4 mr-2" />
            {isUploading ? 'Uploading...' : 'Upload Image'}
          </Button>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        {imageUrl && (
          <div className="mt-2">
            <img 
              src={imageUrl} 
              alt="Blog post featured image" 
              className="max-w-xs rounded-md shadow-sm"
            />
          </div>
        )}
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
    </div>
  );
};