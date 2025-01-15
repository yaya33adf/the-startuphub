import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "@supabase/auth-helpers-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const IdeaForm = () => {
  const [newIdea, setNewIdea] = useState({
    title: "",
    description: "",
  });
  const { toast } = useToast();
  const session = useSession();
  const queryClient = useQueryClient();

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

  return (
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
  );
};