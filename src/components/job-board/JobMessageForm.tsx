import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { JobMessagesList } from "./JobMessagesList";

interface JobMessageFormProps {
  jobPostingId: string;
  onSuccess?: () => void;
}

interface FormData {
  message: string;
}

export const JobMessageForm = ({ jobPostingId, onSuccess }: JobMessageFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log("Sending message for job posting:", jobPostingId);

    try {
      const { error } = await supabase.from("job_messages").insert([
        {
          job_posting_id: jobPostingId,
          message: data.message,
          sender_id: (await supabase.auth.getUser()).data.user?.id,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });
      form.reset();
      onSuccess?.();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <JobMessagesList jobId={jobPostingId} />
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Textarea
          placeholder="Type your message here..."
          className="min-h-[100px]"
          {...form.register("message")}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Send className="mr-2 h-4 w-4" />
            )}
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};