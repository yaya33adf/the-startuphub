import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@supabase/auth-helpers-react";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Feedback = () => {
  const [newIdea, setNewIdea] = useState({
    title: "",
    description: "",
  });
  const { toast } = useToast();
  const session = useSession();
  const queryClient = useQueryClient();

  // Fetch all feedback ideas
  const { data: ideas = [], isLoading } = useQuery({
    queryKey: ['feedback'],
    queryFn: async () => {
      console.log('Fetching feedback ideas...');
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching feedback:', error);
        throw error;
      }
      
      console.log('Fetched feedback ideas:', data);
      return data;
    },
  });

  // Submit new idea
  const submitIdeaMutation = useMutation({
    mutationFn: async (ideaData: { title: string; description: string }) => {
      if (!session?.user) {
        throw new Error("Authentication required");
      }

      const { data, error } = await supabase
        .from('feedback')
        .insert([
          {
            user_id: session.user.id,
            idea_title: ideaData.title,
            idea_description: ideaData.description,
          }
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feedback'] });
      setNewIdea({ title: "", description: "" });
      toast({
        title: "Success",
        description: "Your idea has been submitted successfully",
      });
    },
    onError: (error) => {
      console.error('Error submitting idea:', error);
      toast({
        title: "Error",
        description: "Failed to submit your idea. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Submit rating for an idea
  const submitRatingMutation = useMutation({
    mutationFn: async ({ ideaId, rating }: { ideaId: string; rating: number }) => {
      if (!session?.user) {
        throw new Error("Authentication required");
      }

      const { data, error } = await supabase
        .from('feedback')
        .update({ rating })
        .eq('id', ideaId)
        .select();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feedback'] });
      toast({
        title: "Success",
        description: "Rating submitted successfully",
      });
    },
    onError: (error) => {
      console.error('Error submitting rating:', error);
      toast({
        title: "Error",
        description: "Failed to submit rating. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmitIdea = () => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to submit an idea",
        variant: "destructive",
      });
      return;
    }

    submitIdeaMutation.mutate(newIdea);
  };

  const handleRating = (ideaId: string, rating: number) => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to rate ideas",
        variant: "destructive",
      });
      return;
    }

    submitRatingMutation.mutate({ ideaId, rating });
  };

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Business Ideas</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Share Idea
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share Your Business Idea</DialogTitle>
              <DialogDescription>
                Share your idea with the community and get feedback
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="text-sm font-medium">
                  Title
                </label>
                <Input
                  id="title"
                  value={newIdea.title}
                  onChange={(e) => setNewIdea({ ...newIdea, title: e.target.value })}
                  placeholder="Enter your idea title"
                />
              </div>
              <div>
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <Textarea
                  id="description"
                  value={newIdea.description}
                  onChange={(e) => setNewIdea({ ...newIdea, description: e.target.value })}
                  placeholder="Describe your idea in detail"
                />
              </div>
              <Button onClick={handleSubmitIdea}>Submit Idea</Button>
            </div>
          </DialogContent>
        </Dialog>
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
          {ideas.map((idea) => (
            <Card key={idea.id}>
              <CardHeader>
                <CardTitle>{idea.idea_title}</CardTitle>
                <CardDescription>
                  Posted {new Date(idea.created_at).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{idea.idea_description}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Rate this idea:</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button
                      key={star}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRating(idea.id, star)}
                      className={`${
                        idea.rating >= star ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </Button>
                  ))}
                  {idea.rating && (
                    <span className="text-sm text-gray-500">
                      (Current rating: {idea.rating})
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feedback;