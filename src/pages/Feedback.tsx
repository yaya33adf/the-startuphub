import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@supabase/auth-helpers-react";

const Feedback = () => {
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const session = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!session?.user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to submit feedback",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("feedback").insert([
        {
          user_id: session.user.id,
          idea_title: ideaTitle,
          idea_description: ideaDescription,
          feedback_text: feedbackText,
          rating: rating,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Feedback submitted",
        description: "Thank you for your feedback!",
      });

      // Reset form
      setIdeaTitle("");
      setIdeaDescription("");
      setFeedbackText("");
      setRating(5);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-4xl font-bold mb-8">Share Your Feedback</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="ideaTitle" className="text-sm font-medium">
            Idea Title
          </label>
          <Input
            id="ideaTitle"
            value={ideaTitle}
            onChange={(e) => setIdeaTitle(e.target.value)}
            placeholder="Enter the title of your idea"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="ideaDescription" className="text-sm font-medium">
            Idea Description
          </label>
          <Textarea
            id="ideaDescription"
            value={ideaDescription}
            onChange={(e) => setIdeaDescription(e.target.value)}
            placeholder="Describe your idea in detail"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="feedbackText" className="text-sm font-medium">
            Your Feedback
          </label>
          <Textarea
            id="feedbackText"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Share your thoughts, suggestions, or concerns"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="rating" className="text-sm font-medium">
            Rating (1-5)
          </label>
          <Input
            id="rating"
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            required
          />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </Button>
      </form>
    </div>
  );
};

export default Feedback;