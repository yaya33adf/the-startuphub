import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { SearchBar } from "./SearchBar";
import { QuestionForm } from "./QuestionForm";
import { PostsList } from "./PostsList";
import type { Post } from "./types";

interface CommunityPostsProps {
  userId: string;
}

export const CommunityPosts = ({ userId }: CommunityPostsProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: posts = [], isLoading: isLoadingPosts } = useQuery({
    queryKey: ["communityPosts"],
    queryFn: async () => {
      console.log("Fetching community posts...");
      const { data, error } = await supabase
        .from("community_posts")
        .select(`
          *,
          users (
            name
          )
        `)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
        throw error;
      }

      console.log("Successfully fetched posts:", data);
      return data || [];
    },
    enabled: !!userId,
    staleTime: 30000,
    retry: 1,
    meta: {
      errorMessage: "Failed to load community posts"
    },
    gcTime: 0
  });

  // Filter posts based on search query
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <SearchBar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="Search discussions..."
        />
        <QuestionForm userId={userId} />
      </div>
      
      <PostsList posts={filteredPosts} isLoading={isLoadingPosts} />
    </div>
  );
};