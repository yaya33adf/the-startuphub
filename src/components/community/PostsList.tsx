import { PostCard } from "./PostCard";
import { PostSkeleton } from "./PostSkeleton";
import { EmptyPosts } from "./EmptyPosts";
import type { Post } from "./types";

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
          <PostSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    console.log("PostsList - No posts available to display");
    return <EmptyPosts />;
  }

  console.log("PostsList - Rendering posts list:", posts);
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};