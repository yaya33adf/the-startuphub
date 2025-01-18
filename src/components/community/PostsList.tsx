import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  tags?: string[];
}

interface PostsListProps {
  posts: Post[];
  isLoading: boolean;
}

export const PostsList = ({ posts, isLoading }: PostsListProps) => {
  console.log("PostsList - posts:", posts);
  console.log("PostsList - isLoading:", isLoading);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="h-3 bg-gray-100 rounded w-1/4 mt-2"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-4 bg-gray-100 rounded"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-muted-foreground">
          No questions have been asked yet. Be the first to start a discussion!
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>
              Posted {new Date(post.created_at).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700">{post.content}</p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};