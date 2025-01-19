import { format } from "date-fns";
import { Appointment } from "./types";

interface AppointmentsListProps {
  appointments: Appointment[];
  isLoading: boolean;
}

export const AppointmentsList = ({ appointments, isLoading }: AppointmentsListProps) => {
  if (isLoading) {
    return <p>Loading appointments...</p>;
  }

  if (!appointments?.length) {
    return <p className="text-sm text-muted-foreground">No appointments scheduled</p>;
  }

  return (
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
  );
};