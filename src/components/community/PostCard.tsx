import { User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PostInteractions } from "./PostInteractions";
import type { Post } from "./types";

export const PostCard = ({ post }: { post: Post }) => {
  console.log("PostCard - Rendering post:", post);
  
  const authorName = post.users?.name || 'Anonymous';
  const formattedDate = new Date(post.created_at).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="hover:shadow-md transition-shadow" data-testid="post-card">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback>
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl">{post.title}</CardTitle>
            <CardDescription className="text-sm">
              Posted by {authorName} on {formattedDate}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-700 line-clamp-3">{post.content}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={`${post.id}-tag-${index}`}
                className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <PostInteractions 
        likes={post.likes || 0} 
        comments={post.comments || 0} 
      />
    </Card>
  );
};