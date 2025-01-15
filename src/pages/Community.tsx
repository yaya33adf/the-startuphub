import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MessageSquare, Search, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    content: "",
    tags: "",
  });
  const session = useSession();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect to login if not authenticated
  if (!session) {
    toast({
      title: "Authentication required",
      description: "Please sign in to access the community features",
      variant: "destructive",
    });
    navigate("/auth/signin");
    return null;
  }

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
  });

  const filteredPosts = posts?.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const handleSubmitQuestion = async () => {
    try {
      const { error } = await supabase.from("community_posts").insert([
        {
          title: newQuestion.title,
          content: newQuestion.content,
          tags: newQuestion.tags.split(",").map((tag) => tag.trim()),
          author_id: session.user.id,
        },
      ]);

      if (error) throw error;

      // Reset form
      setNewQuestion({ title: "", content: "", tags: "" });
      
      toast({
        title: "Success",
        description: "Your question has been posted successfully",
      });
    } catch (error) {
      console.error("Error submitting question:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit your question. Please try again.",
      });
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Community</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-[300px]"
            />
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Ask Question
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ask a Question</DialogTitle>
                <DialogDescription>
                  Share your question with the community
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={newQuestion.title}
                    onChange={(e) =>
                      setNewQuestion({ ...newQuestion, title: e.target.value })
                    }
                    placeholder="What's your question?"
                  />
                </div>
                <div>
                  <Label htmlFor="content">Details</Label>
                  <Textarea
                    id="content"
                    value={newQuestion.content}
                    onChange={(e) =>
                      setNewQuestion({ ...newQuestion, content: e.target.value })
                    }
                    placeholder="Provide more details about your question..."
                  />
                </div>
                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    value={newQuestion.tags}
                    onChange={(e) =>
                      setNewQuestion({ ...newQuestion, tags: e.target.value })
                    }
                    placeholder="Add tags separated by commas"
                  />
                </div>
                <Button onClick={handleSubmitQuestion}>Submit Question</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-100 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-100 rounded animate-pulse w-5/6"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredPosts?.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  Posted {new Date(post.created_at).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{post.content}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Community;