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
      try {
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
          console.error("Error details:", {
            code: error.code,
            message: error.message,
            details: error.details
          });
          
          // Handle specific error cases
          if (error.code === "PGRST116") {
            toast({
              title: "Authentication Error",
              description: "Please sign in to view community posts.",
              variant: "destructive",
            });
          } else if (error.code === "42501") {
            toast({
              title: "Permission Denied",
              description: "You don't have permission to access these posts.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Error",
              description: "Failed to load community posts. Please try again.",
              variant: "destructive",
            });
          }
          throw error;
        }

        if (!data) {
          console.log("No posts found");
          return [];
        }

        console.log("Successfully fetched posts:", data);
        return data;
      } catch (error) {
        console.error("Unexpected error:", error);
        toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again later.",
          variant: "destructive",
        });
        throw error;
      }
    },
    enabled: !!userId,
    staleTime: 30000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: (failureCount, error: any) => {
      // Don't retry on authentication or permission errors
      if (error?.code === "PGRST116" || error?.code === "42501") {
        return false;
      }
      return failureCount < 3;
    },
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