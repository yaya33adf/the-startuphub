import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CommunityHeader } from "@/components/community/CommunityHeader";
import { SearchBar } from "@/components/community/SearchBar";
import { QuestionForm } from "@/components/community/QuestionForm";
import { PostsList } from "@/components/community/PostsList";
import { PageSEO } from "@/components/seo/PageSEO";
import { Loader2 } from "lucide-react";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { session, isLoading: isLoadingSession } = useSessionContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Authentication check
  useEffect(() => {
    if (!isLoadingSession && !session) {
      console.log("No active session, redirecting to login");
      toast({
        title: "Authentication Required",
        description: "Please sign in to access the community features",
        variant: "destructive",
      });
      navigate("/auth/signin");
    }
  }, [session, isLoadingSession, navigate, toast]);

  // Fetch posts with React Query
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
    enabled: !!session?.user?.id,
    staleTime: 30000,
    retry: 1,
    meta: {
      errorMessage: "Failed to load community posts"
    },
    gcTime: 0
  });

  // Handle loading state
  if (isLoadingSession) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

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
    <>
      <PageSEO 
        title="Community - Connect & Share"
        description="Join our entrepreneurial community to share ideas, get feedback, and connect with like-minded business professionals."
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <CommunityHeader />
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <SearchBar 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              placeholder="Search discussions..."
            />
            {session && <QuestionForm userId={session.user.id} />}
          </div>
          
          <PostsList posts={filteredPosts} isLoading={isLoadingPosts} />
        </div>
      </div>
    </>
  );
};

export default Community;