import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { CommunityHeader } from "@/components/community/CommunityHeader";
import { SearchBar } from "@/components/community/SearchBar";
import { QuestionForm } from "@/components/community/QuestionForm";
import { PostsList } from "@/components/community/PostsList";
import { PageSEO } from "@/components/seo/PageSEO";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const session = useSession();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session: currentSession } } = await supabase.auth.getSession();
      console.log("Current session in Community:", currentSession);
      
      if (!currentSession) {
        console.log("No session found, redirecting to login");
        toast({
          title: "Authentication required",
          description: "Please sign in to access the community features",
          variant: "destructive",
        });
        navigate("/auth/signin");
      }
    };

    checkSession();
  }, [navigate, toast]);

  const { data: posts, isLoading } = useQuery({
    queryKey: ["communityPosts"],
    queryFn: async () => {
      console.log("Fetching community posts...");
      const { data, error } = await supabase
        .from("community_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching community posts:", error);
        throw error;
      }
      
      console.log("Fetched community posts:", data);
      return data;
    },
    enabled: !!session,
  });

  if (!session) {
    return null;
  }

  const filteredPosts = posts?.filter(
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
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Community Hub</h1>
              <p className="text-muted-foreground">
                Share your questions and connect with other entrepreneurs
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <SearchBar 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                placeholder="Search discussions..."
              />
              <QuestionForm userId={session.user.id} />
            </div>
          </div>
          
          <div className="grid gap-6">
            <CommunityHeader />
            <PostsList posts={filteredPosts || []} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;