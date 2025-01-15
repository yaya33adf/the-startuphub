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
  const [comments, setComments] = useState<{ [key: string]: string }>({});
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
            feedback_text: '',
            rating: null,
            comment_text: null
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Error submitting idea:', error);
        throw error;
      }
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

  // Submit rating and comment for an idea
  const submitRatingAndCommentMutation = useMutation({
    mutationFn: async ({ 
      ideaId, 
      rating, 
      comment 
    }: { 
      ideaId: string; 
      rating?: number; 
      comment?: string;
    }) => {
      if (!session?.user) {
        throw new Error("Authentication required");
      }

      const updates: any = {};
      if (rating !== undefined) updates.rating = rating;
      if (comment !== undefined) updates.comment_text = comment;

      const { data, error } = await supabase
        .from('feedback')
        .update(updates)
        .eq('id', ideaId)
        .select();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feedback'] });
      setComments({});
      toast({
        title: "Success",
        description: "Feedback submitted successfully",
      });
    },
    onError: (error) => {
      console.error('Error submitting feedback:', error);
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
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

  const handleRatingAndComment = (ideaId: string, rating?: number, comment?: string) => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to provide feedback",
        variant: "destructive",
      });
      return;
    }

    submitRatingAndCommentMutation.mutate({ ideaId, rating, comment });
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
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">Rate this idea:</span>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Button
                        key={star}
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRatingAndComment(idea.id, star)}
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
                  
                  <div className="space-y-2">
                    <label htmlFor={`comment-${idea.id}`} className="text-sm font-medium">
                      Add a tip or comment:
                    </label>
                    <Textarea
                      id={`comment-${idea.id}`}
                      value={comments[idea.id] || ''}
                      onChange={(e) => setComments({ ...comments, [idea.id]: e.target.value })}
                      placeholder="Share your thoughts or tips about this idea..."
                      className="min-h-[80px]"
                    />
                    <Button 
                      onClick={() => handleRatingAndComment(idea.id, undefined, comments[idea.id])}
                      disabled={!comments[idea.id]}
                    >
                      Submit Comment
                    </Button>
                    
                    {idea.comment_text && (
                      <div className="mt-4 p-4 bg-muted rounded-lg">
                        <h4 className="font-medium mb-2">Community Tips:</h4>
                        <p className="text-sm">{idea.comment_text}</p>
                      </div>
                    )}
                  </div>
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