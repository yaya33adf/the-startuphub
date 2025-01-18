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
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Be the first to start a discussion! Share your thoughts and questions with the community.
          </p>
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
            <CardTitle className="text-xl">{post.title}</CardTitle>
            <CardDescription className="text-sm">
              Posted on {new Date(post.created_at).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700 line-clamp-3">{post.content}</p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
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