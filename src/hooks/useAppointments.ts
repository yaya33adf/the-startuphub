import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Appointment } from "@/components/tools/appointment/types";

export const useAppointments = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

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

  return {
    appointments,
    isLoading,
    createAppointment,
  };
};