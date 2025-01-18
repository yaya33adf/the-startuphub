import { ThumbsUp, MessageCircle, Share2, Bookmark, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  tags?: string[];
  users?: {
    name: string | null;
  } | null;
}

interface PostsListProps {
  posts: Post[];
  isLoading: boolean;
}

export const PostsList = ({ posts, isLoading }: PostsListProps) => {
  console.log("PostsList - Component mounted");
  console.log("PostsList - Current props:", { posts, isLoading });

  if (isLoading) {
    console.log("PostsList - Rendering loading state");
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-5 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-100 rounded w-1/3 mt-3"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="h-4 bg-gray-100 rounded"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                <div className="h-4 bg-gray-100 rounded w-4/6"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    console.log("PostsList - No posts available to display");
    return (
      <Card className="p-8 text-center">
        <CardContent className="flex flex-col items-center space-y-4">
          <MessageCircle className="w-12 h-12 text-muted-foreground" />
          <div>
            <h3 className="text-lg font-semibold">No discussions yet</h3>
            <p className="text-muted-foreground">
              Be the first to start a discussion! Share your thoughts and questions with the community.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  console.log("PostsList - Rendering posts list:", posts);
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id} className="hover:shadow-md transition-shadow">
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
                  Posted by {post.users?.name || 'Anonymous'} on {new Date(post.created_at).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
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
                    key={index}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="border-t pt-4">
            <div className="flex justify-between w-full">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <MessageCircle className="w-4 h-4 mr-2" />
                Comment
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};