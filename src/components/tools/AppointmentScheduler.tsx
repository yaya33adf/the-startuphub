import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";

interface Appointment {
  id: string;
  title: string;
  description: string | null;
  start_time: string;
  end_time: string;
  location: string | null;
  attendees: string[] | null;
  user_id: string;
}

export const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [attendees, setAttendees] = useState("");

  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch appointments
  const { data: appointments, isLoading } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      console.log("Fetching appointments...");
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.error("No authenticated user found");
        return [];
      }

      const { data, error } = await supabase
        .from("appointments")
        .select("*")
        .order("start_time", { ascending: true });

      if (error) {
        console.error("Error fetching appointments:", error);
        throw error;
      }

      console.log("Appointments fetched:", data);
      return data as Appointment[];
    },
  });

  // Create appointment mutation
  const createAppointment = useMutation({
    mutationFn: async (appointment: Omit<Appointment, "id">) => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error("No authenticated user found");
      }

      const { data, error } = await supabase
        .from("appointments")
        .insert([{ ...appointment, user_id: user.id }])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
      toast({
        title: "Success",
        description: "Appointment scheduled successfully",
      });
      resetForm();
    },
    onError: (error) => {
      console.error("Error creating appointment:", error);
      toast({
        title: "Error",
        description: "Failed to schedule appointment",
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setLocation("");
    setStartTime("");
    setEndTime("");
    setAttendees("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !startTime || !endTime || !title) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const startDateTime = new Date(`${format(selectedDate, "yyyy-MM-dd")}T${startTime}`);
    const endDateTime = new Date(`${format(selectedDate, "yyyy-MM-dd")}T${endTime}`);

    createAppointment.mutate({
      title,
      description,
      start_time: startDateTime.toISOString(),
      end_time: endDateTime.toISOString(),
      location,
      attendees: attendees ? attendees.split(",").map(email => email.trim()) : null,
    } as Omit<Appointment, "id">);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
        />
        <div className="space-y-2">
          <h3 className="font-medium">Upcoming Appointments</h3>
          {isLoading ? (
            <p>Loading appointments...</p>
          ) : appointments?.length ? (
            <div className="space-y-2">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="p-3 rounded-md border bg-muted/50"
                >
                  <h4 className="font-medium">{appointment.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(appointment.start_time), "PPp")} -{" "}
                    {format(new Date(appointment.end_time), "p")}
                  </p>
                  {appointment.location && (
                    <p className="text-sm">📍 {appointment.location}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No appointments scheduled</p>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Meeting with team"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Meeting agenda and notes..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startTime">Start Time *</Label>
            <Input
              id="startTime"
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endTime">End Time *</Label>
            <Input
              id="endTime"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Conference Room A or Video Call Link"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="attendees">Attendees (comma-separated emails)</Label>
          <Input
            id="attendees"
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
            placeholder="john@example.com, jane@example.com"
          />
        </div>

        <Button type="submit" className="w-full">
          Schedule Appointment
        </Button>
      </form>
    </div>
  );
};