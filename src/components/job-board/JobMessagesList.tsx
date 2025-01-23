import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";

interface Message {
  id: string;
  message: string;
  created_at: string;
  sender_id: string;
  job_posting_id: string;
}

interface JobMessagesListProps {
  jobId: string;
}

export const JobMessagesList = ({ jobId }: JobMessagesListProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data, error } = await supabase
          .from("job_messages")
          .select("*")
          .eq("job_posting_id", jobId)
          .order("created_at", { ascending: true });

        if (error) throw error;
        setMessages(data || []);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();

    // Subscribe to new messages
    const channel = supabase
      .channel("job_messages_changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "job_messages",
          filter: `job_posting_id=eq.${jobId}`,
        },
        (payload) => {
          console.log("New message received:", payload);
          setMessages((current) => [...current, payload.new as Message]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [jobId]);

  if (loading) {
    return <div className="text-center py-4">Loading messages...</div>;
  }

  if (messages.length === 0) {
    return <div className="text-center py-4 text-muted-foreground">No messages yet</div>;
  }

  return (
    <div className="space-y-4 max-h-[300px] overflow-y-auto">
      {messages.map((message) => (
        <Card 
          key={message.id}
          className={message.sender_id === user?.id ? "bg-primary/10" : ""}
        >
          <CardContent className="p-4">
            <div className="flex justify-between items-start gap-2">
              <p className="text-sm">{message.message}</p>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {format(new Date(message.created_at), "MMM d, h:mm a")}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};