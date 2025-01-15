import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Plus, Settings, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Verify admin status
  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        console.log("Checking admin status in dashboard...");
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session?.user?.id) {
          console.log("No session found in dashboard");
          navigate('/auth/signin');
          return;
        }

        const { data: profile, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();

        console.log("Admin check profile result:", { profile, error });

        if (error || profile?.role !== 'admin') {
          console.log("User is not admin:", profile?.role);
          navigate('/');
          toast({
            variant: "destructive",
            title: "Access Denied",
            description: "You need admin privileges to access this page"
          });
          return;
        }

        setIsAdmin(true);
      } catch (error) {
        console.error("Error checking admin status:", error);
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminStatus();
  }, [navigate, toast]);

  // Fetch blog posts for admin management
  const { data: blogPosts, isLoading: isLoadingPosts } = useQuery({
    queryKey: ["adminBlogPosts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: isAdmin, // Only fetch if user is admin
  });

  if (isLoading || isLoadingPosts) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Blog Post
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Blog Posts
            </CardTitle>
            <CardDescription>
              Manage your blog posts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {blogPosts?.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center justify-between p-2 border rounded"
                >
                  <span className="truncate">{post.title}</span>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              ))}
              {(!blogPosts || blogPosts.length === 0) && (
                <p className="text-muted-foreground text-sm">No blog posts yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              Website Settings
            </CardTitle>
            <CardDescription>
              Manage website configuration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full">
                Update Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;