import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useToast } from "@/hooks/use-toast";
import { CommunityHeader } from "@/components/community/CommunityHeader";
import { CommunityPosts } from "@/components/community/CommunityPosts";
import { PageSEO } from "@/components/seo/PageSEO";
import { Loader2 } from "lucide-react";

const Community = () => {
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

  // Handle loading state
  if (isLoadingSession) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
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
          {session && <CommunityPosts userId={session.user.id} />}
        </div>
      </div>
    </>
  );
};

export default Community;