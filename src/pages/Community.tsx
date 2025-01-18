import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
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
  const session = useSession();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const authCheckRef = useRef(false);

  useEffect(() => {
    const checkSession = async () => {
      // Prevent multiple simultaneous checks
      if (authCheckRef.current) return;
      authCheckRef.current = true;

      try {
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        console.log("Auth check - Current session:", currentSession);

        if (!currentSession && !isAuthChecking) {
          console.log("No session found, redirecting to login");
          toast({
            title: "Authentication required",
            description: "Please sign in to access the community features",
            variant: "destructive",
          });
          navigate("/auth/signin");
        }
      } catch (error) {
        console.error("Error checking session:", error);
      } finally {
        setIsAuthChecking(false);
        authCheckRef.current = false;
      }
    };

    checkSession();

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed:", event, session?.user?.id);
      if (!session && !isAuthChecking) {
        navigate("/auth/signin");
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate, toast, isAuthChecking]);

  const { data: posts = [], isLoading, error } = useQuery({
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
        console.error("Error fetching community posts:", error);
        throw error;
      }
      
      console.log("Fetched community posts:", data);
      return data || [];
    },
    enabled: !!session && !isAuthChecking, // Only fetch when auth is ready and we have a session
  });

  if (error) {
    console.error("Error in community posts query:", error);
    toast({
      title: "Error",
      description: "Failed to load community posts. Please try again later.",
      variant: "destructive",
    });
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  console.log("Filtered posts:", filteredPosts);

  // Show loading state while checking auth
  if (isAuthChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Don't render anything if no session
  if (!session) {
    return null;
  }

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
          
          <PostsList posts={filteredPosts} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
};

export default Community;