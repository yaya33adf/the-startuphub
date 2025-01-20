import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ImageIcon, Loader2 } from "lucide-react";

interface BlogPostEditorProps {
  blogTitle: string;
  setBlogTitle: (title: string) => void;
  blogContent: string;
  setBlogContent: (content: string) => void;
  onImageUpload: (file: File) => Promise<void>;
  imageUrl: string | null;
  isUploading: boolean;
}

export const BlogPostEditor = ({
  blogTitle,
  setBlogTitle,
  blogContent,
  setBlogContent,
  onImageUpload,
  imageUrl,
  isUploading,
}: BlogPostEditorProps) => {
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      console.error('Invalid file type. Please upload an image.');
      return;
    }
    
    // Validate file size (e.g., 5MB limit)
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_SIZE) {
      console.error('File is too large. Maximum size is 5MB.');
      return;
    }

    await onImageUpload(file);
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
            {isUploading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <ImageIcon className="w-4 h-4 mr-2" />
                Upload Image
              </>
            )}
          </Button>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
            disabled={isUploading}
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