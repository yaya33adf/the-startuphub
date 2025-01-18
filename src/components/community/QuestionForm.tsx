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
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface QuestionFormProps {
  userId: string;
}

export const QuestionForm = ({ userId }: QuestionFormProps) => {
  const [open, setOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    content: "",
    tags: "",
  });
  const { toast } = useToast();

  const handleSubmitQuestion = async () => {
    try {
      console.log("Submitting question:", newQuestion);
      
      if (!newQuestion.title.trim() || !newQuestion.content.trim()) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Title and content are required.",
        });
        return;
      }

      const { error } = await supabase.from("community_posts").insert([
        {
          title: newQuestion.title.trim(),
          content: newQuestion.content.trim(),
          tags: newQuestion.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
          author_id: userId,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your question has been posted successfully",
      });

      // Reset form and close dialog
      setNewQuestion({ title: "", content: "", tags: "" });
      setOpen(false);
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
          <Button onClick={handleSubmitQuestion} className="w-full">
            Submit Question
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};