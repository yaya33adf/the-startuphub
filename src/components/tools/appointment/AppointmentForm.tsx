import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { AppointmentFormData } from "./types";

interface AppointmentFormProps {
  selectedDate: Date;
  onSubmit: (data: AppointmentFormData) => void;
}

export const AppointmentForm = ({ selectedDate, onSubmit }: AppointmentFormProps) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    title: "",
    description: "",
    location: "",
    startTime: "",
    endTime: "",
    attendees: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      description: "",
      location: "",
      startTime: "",
      endTime: "",
      attendees: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title *</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Meeting with team"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Meeting agenda and notes..."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="startTime">Start Time *</Label>
          <Input
            id="startTime"
            type="time"
            value={formData.startTime}
            onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="endTime">End Time *</Label>
          <Input
            id="endTime"
            type="time"
            value={formData.endTime}
            onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          placeholder="Conference Room A or Video Call Link"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="attendees">Attendees (comma-separated emails)</Label>
        <Input
          id="attendees"
          value={formData.attendees}
          onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
          placeholder="john@example.com, jane@example.com"
        />
      </div>

      <Button type="submit" className="w-full">
        Schedule Appointment
      </Button>
    </form>
  );
};