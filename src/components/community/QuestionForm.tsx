import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface QuestionFormProps {
  userId: string;
}

export const QuestionForm = ({ userId }: QuestionFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    content: "",
    tags: "",
  });
  const { toast } = useToast();

  const handleSubmitQuestion = async () => {
    if (!userId) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to post a question.",
        variant: "destructive",
      });
      return;
    }

    if (!newQuestion.title.trim() || !newQuestion.content.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Title and content are required.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("Submitting question:", newQuestion);
      
      const { error } = await supabase.from("community_posts").insert([
        {
          title: newQuestion.title.trim(),
          content: newQuestion.content.trim(),
          tags: newQuestion.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
          author_id: userId,
        },
      ]);

      if (error) {
        console.error("Error details:", {
          code: error.code,
          message: error.message,
          details: error.details
        });

        if (error.code === "42501") {
          toast({
            title: "Permission Denied",
            description: "You don't have permission to post questions.",
            variant: "destructive",
          });
        } else if (error.code === "23505") {
          toast({
            title: "Duplicate Question",
            description: "A similar question already exists.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error",
            description: "Failed to submit your question. Please try again.",
            variant: "destructive",
          });
        }
        return;
      }

      toast({
        title: "Success",
        description: "Your question has been posted successfully",
      });

      // Reset form and close dialog
      setNewQuestion({ title: "", content: "", tags: "" });
      setOpen(false);
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Ask Question
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
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
              className="min-h-[100px]"
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
              placeholder="Add tags separated by commas (e.g., startup, funding, marketing)"
            />
          </div>
          <Button 
            onClick={handleSubmitQuestion} 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Question"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};