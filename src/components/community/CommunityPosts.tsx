import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { SearchBar } from "./SearchBar";
import { QuestionForm } from "./QuestionForm";
import { PostsList } from "./PostsList";
import { useToast } from "@/hooks/use-toast";
import type { Post } from "./types";

interface CommunityPostsProps {
  userId: string;
}

export const CommunityPosts = ({ userId }: CommunityPostsProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const { data: posts = [], isLoading: isLoadingPosts } = useQuery({
    queryKey: ["communityPosts"],
    queryFn: async () => {
      console.log("Fetching community posts for user:", userId);
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
        toast({
          title: "Error",
          description: "Failed to load community posts. Please try again.",
          variant: "destructive",
        });
        throw error;
      }

      console.log("Successfully fetched posts:", data);
      return data || [];
    },
    enabled: !!userId,
    staleTime: 30000, // Cache data for 30 seconds
    gcTime: 1000 * 60 * 5, // Keep in cache for 5 minutes (renamed from cacheTime)
    refetchOnWindowFocus: false, // Prevent refetch on window focus
    refetchOnMount: false, // Prevent refetch on component mount
    retry: 1,
    meta: {
      errorMessage: "Failed to load community posts"
    }
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

  console.log("Filtered posts:", filteredPosts);

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