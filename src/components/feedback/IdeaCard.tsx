import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "@supabase/auth-helpers-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface IdeaCardProps {
  idea: {
    id: string;
    idea_title: string;
    idea_description: string;
    created_at: string;
    rating: number | null;
    comment_text: string | null;
  };
}

export const IdeaCard = ({ idea }: IdeaCardProps) => {
  const [comment, setComment] = useState("");
  const { toast } = useToast();
  const session = useSession();
  const queryClient = useQueryClient();

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
      setComment("");
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
    <Card>
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
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts or tips about this idea..."
              className="min-h-[80px]"
            />
            <Button 
              onClick={() => handleRatingAndComment(idea.id, undefined, comment)}
              disabled={!comment}
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
  );
};