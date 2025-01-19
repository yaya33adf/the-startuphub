import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { AppointmentForm } from "./appointment/AppointmentForm";
import { AppointmentsList } from "./appointment/AppointmentsList";
import { Appointment, AppointmentFormData } from "./appointment/types";

export const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
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
        toast({
          title: "Error",
          description: "Please sign in to view appointments",
          variant: "destructive",
        });
        return [];
      }

      const { data, error } = await supabase
        .from("appointments")
        .select("*")
        .eq('user_id', user.id)
        .order("start_time", { ascending: true });

      if (error) {
        console.error("Error fetching appointments:", error);
        toast({
          title: "Error",
          description: "Failed to fetch appointments",
          variant: "destructive",
        });
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
        toast({
          title: "Error",
          description: "Please sign in to create appointments",
          variant: "destructive",
        });
        throw new Error("No authenticated user found");
      }

      const { data, error } = await supabase
        .from("appointments")
        .insert([{ ...appointment, user_id: user.id }])
        .select()
        .single();

      if (error) {
        console.error("Error creating appointment:", error);
        throw error;
      }
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
      toast({
        title: "Success",
        description: "Appointment scheduled successfully",
      });
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

  const handleSubmit = (formData: AppointmentFormData) => {
    if (!selectedDate) {
      toast({
        title: "Error",
        description: "Please select a date",
        variant: "destructive",
      });
      return;
    }

    const startDateTime = new Date(`${format(selectedDate, "yyyy-MM-dd")}T${formData.startTime}`);
    const endDateTime = new Date(`${format(selectedDate, "yyyy-MM-dd")}T${formData.endTime}`);

    createAppointment.mutate({
      title: formData.title,
      description: formData.description,
      start_time: startDateTime.toISOString(),
      end_time: endDateTime.toISOString(),
      location: formData.location,
      attendees: formData.attendees ? formData.attendees.split(",").map(email => email.trim()) : null,
      user_id: "", // This will be set in the mutation
    });
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
          <AppointmentsList 
            appointments={appointments || []} 
            isLoading={isLoading} 
          />
        </div>
      </div>

      <AppointmentForm 
        selectedDate={selectedDate || new Date()} 
        onSubmit={handleSubmit}
      />
    </div>
  );
};