import { useEffect } from "react";
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
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if user is admin
  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session || session.user.role !== 'admin') {
        navigate('/');
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: "You need admin privileges to access this page.",
        });
      }
    };
    
    checkAdmin();
  }, [navigate, toast]);

  // Fetch blog posts
  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ["adminBlogPosts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const handleCreatePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    try {
      // Fix: Wrap the blog post data in an array
      const { error } = await supabase.from("blog_posts").insert([{
        title: formData.get("title") as string,
        content: formData.get("content") as string,
        excerpt: formData.get("excerpt") as string,
        status: "draft",
      }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
    } catch (error) {
      console.error("Error creating blog post:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create blog post",
      });
    }
  };

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Blog Post
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>Create New Blog Post</DialogTitle>
              <DialogDescription>
                Create a new blog post. You can save it as a draft or publish it immediately.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" placeholder="Enter post title" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  placeholder="Brief description of the post"
                  className="h-20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Write your post content here"
                  className="h-32"
                  required
                />
              </div>
              <Button type="submit">Create Post</Button>
            </form>
          </DialogContent>
        </Dialog>
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
              {isLoading ? (
                <p>Loading posts...</p>
              ) : (
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
                </div>
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
              <div className="space-y-2">
                <Label htmlFor="logo">Website Logo</Label>
                <Input id="logo" type="file" accept="image/*" />
              </div>
              <Button>Update Settings</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;