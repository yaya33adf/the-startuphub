import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { AppointmentForm } from "./appointment/AppointmentForm";
import { AppointmentsList } from "./appointment/AppointmentsList";
import { AppointmentFormData } from "./appointment/types";
import { useAppointments } from "@/hooks/useAppointments";

export const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();
  const { appointments, isLoading, createAppointment } = useAppointments();

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