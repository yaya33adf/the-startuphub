import { useState } from "react";
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
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const EventForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });
  const { toast } = useToast();

  const handleSubmit = async () => {
    try {
      console.log("Submitting event:", formData);
      
      if (!formData.title || !formData.date) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Title and date are required.",
        });
        return;
      }

      const session = await supabase.auth.getSession();
      if (!session.data.session) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please sign in to create an event.",
        });
        return;
      }

      const { error } = await supabase.from("events").insert([
        {
          title: formData.title,
          description: formData.description,
          date: formData.date,
          location: formData.location,
          organizer_id: session.data.session.user.id,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Event created successfully!",
      });

      setFormData({
        title: "",
        description: "",
        date: "",
        location: "",
      });
      setOpen(false);
    } catch (error) {
      console.error("Error creating event:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create event. Please try again.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Event</DialogTitle>
          <DialogDescription>
            Add details for your new event
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Event title"
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Event description"
            />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="datetime-local"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              placeholder="Event location"
            />
          </div>
          <Button onClick={handleSubmit} className="w-full">
            Create Event
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};