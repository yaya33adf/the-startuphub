export interface Appointment {
  id: string;
  title: string;
  description: string | null;
  start_time: string;
  end_time: string;
  location: string | null;
  attendees: string[] | null;
  user_id: string;
}

export interface AppointmentFormData {
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
  attendees: string;
}