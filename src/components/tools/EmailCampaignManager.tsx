import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Users } from "lucide-react";

export const EmailCampaignManager = () => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [recipients, setRecipients] = useState("");
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const recipientList = recipients.split(",").map(email => email.trim());
      
      const response = await fetch("/api/send-campaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          content,
          recipients: recipientList,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send campaign");
      }

      toast({
        title: "Success",
        description: "Email campaign sent successfully!",
        duration: 3000,
      });

      // Reset form
      setSubject("");
      setContent("");
      setRecipients("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send email campaign. Please try again.",
        duration: 3000,
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Recipients (comma-separated emails)"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
            required
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <Textarea
          placeholder="Email content (supports HTML)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[200px]"
          required
        />

        <Button type="submit" disabled={sending} className="w-full">
          {sending ? (
            "Sending..."
          ) : (
            <div className="flex items-center space-x-2">
              <Send className="h-4 w-4" />
              <span>Send Campaign</span>
            </div>
          )}
        </Button>
      </div>
    </form>
  );
};