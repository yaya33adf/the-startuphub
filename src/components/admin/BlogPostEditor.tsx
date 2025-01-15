import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface BlogPostEditorProps {
  blogTitle: string;
  setBlogTitle: (title: string) => void;
  blogContent: string;
  setBlogContent: (content: string) => void;
}

export const BlogPostEditor = ({
  blogTitle,
  setBlogTitle,
  blogContent,
  setBlogContent,
}: BlogPostEditorProps) => {
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