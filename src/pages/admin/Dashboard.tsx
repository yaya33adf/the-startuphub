import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Plus, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const AdminDashboard = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: totalUsers, isLoading: loadingUsers } = useQuery({
    queryKey: ['adminStats', 'users'],
    queryFn: async () => {
      console.log('Fetching total users count...');
      const { count, error } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });
      
      if (error) {
        console.error('Error fetching users:', error);
        throw error;
      }
      return count || 0;
    }
  });

  // Query to fetch published blog posts count
  const { data: publishedPosts, isLoading: loadingPosts } = useQuery({
    queryKey: ['adminStats', 'posts'],
    queryFn: async () => {
      console.log('Fetching published posts count...');
      const { count, error } = await supabase
        .from('blog_posts')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'published');
      
      if (error) {
        console.error('Error fetching posts:', error);
        throw error;
      }
      return count || 0;
    }
  });

  // Query to fetch active users (users who have logged in within the last 30 days)
  const { data: activeUsers, isLoading: loadingActive } = useQuery({
    queryKey: ['adminStats', 'activeUsers'],
    queryFn: async () => {
      console.log('Fetching active users count...');
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const { count, error } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', thirtyDaysAgo.toISOString());
      
      if (error) {
        console.error('Error fetching active users:', error);
        throw error;
      }
      return count || 0;
    }
  });

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("You must be logged in to create a blog post");
        return;
      }

      const { error } = await supabase
        .from('blog_posts')
        .insert({
          title: blogTitle,
          content: blogContent,
          author_id: user.id,
          status: 'draft'
        });

      if (error) throw error;

      toast.success("Blog post created successfully!");
      setBlogTitle("");
      setBlogContent("");
    } catch (error) {
      console.error('Error creating blog post:', error);
      toast.error("Failed to create blog post");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLogoFile(file);
      const fileExt = file.name.split('.').pop();
      const fileName = `site-logo-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('brand_logos')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('brand_logos')
        .getPublicUrl(fileName);

      // Update site settings with new logo URL
      const { error: settingsError } = await supabase
        .from('site_settings')
        .upsert({
          key: 'site_logo',
          value: { url: publicUrl }
        });

      if (settingsError) throw settingsError;

      toast.success("Logo updated successfully!");
    } catch (error) {
      console.error('Error uploading logo:', error);
      toast.error("Failed to upload logo");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage user accounts and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            {loadingUsers ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <p>Loading users...</p>
              </div>
            ) : (
              <p>Total users: {totalUsers}</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Management</CardTitle>
            <CardDescription>Manage blog posts and content</CardDescription>
          </CardHeader>
          <CardContent>
            {loadingPosts ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <p>Loading posts...</p>
              </div>
            ) : (
              <p>Published posts: {publishedPosts}</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>View site statistics and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            {loadingActive ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <p>Loading analytics...</p>
              </div>
            ) : (
              <p>Active users: {activeUsers}</p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Create Blog Post</CardTitle>
            <CardDescription>Add new content to your blog</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleBlogSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  placeholder="Enter blog title"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={blogContent}
                  onChange={(e) => setBlogContent(e.target.value)}
                  placeholder="Write your blog content..."
                  className="min-h-[200px]"
                  required
                />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Post
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Site Settings</CardTitle>
            <CardDescription>Manage your website appearance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="logo">Site Logo</Label>
                <div className="mt-2">
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById('logo-upload')?.click()}
                    className="w-full"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Logo
                  </Button>
                  <Input
                    id="logo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleLogoUpload}
                  />
                </div>
                {logoFile && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Selected: {logoFile.name}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
