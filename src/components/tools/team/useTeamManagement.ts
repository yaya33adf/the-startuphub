import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { TeamMember, TeamMemberFormData } from "./types";

export const useTeamManagement = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        console.log("Current user ID:", user.id);
      }
    };
    getCurrentUser();
  }, []);

  const { data: teamMembers = [], isLoading } = useQuery({
    queryKey: ["team-members"],
    queryFn: async () => {
      console.log("Fetching team members...");
      const { data, error } = await supabase
        .from("teams")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching team members:", error);
        throw error;
      }

      console.log("Team members fetched:", data);
      return data as TeamMember[];
    },
  });

  const addMemberMutation = useMutation({
    mutationFn: async (memberData: TeamMemberFormData) => {
      if (!userId) throw new Error("User not authenticated");

      console.log("Adding team member:", memberData);
      const { data, error } = await supabase
        .from("teams")
        .insert([{ 
          ...memberData,
          user_id: userId,
          status: "active"
        }])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team-members"] });
      toast({
        title: "Success",
        description: "Team member added successfully",
      });
    },
    onError: (error) => {
      console.error("Error adding team member:", error);
      toast({
        title: "Error",
        description: "Failed to add team member",
        variant: "destructive",
      });
    },
  });

  const deleteMemberMutation = useMutation({
    mutationFn: async (memberId: string) => {
      console.log("Deleting team member:", memberId);
      setDeletingId(memberId);
      const { error } = await supabase
        .from("teams")
        .delete()
        .eq("id", memberId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["team-members"] });
      toast({
        title: "Success",
        description: "Team member removed successfully",
      });
      setDeletingId(null);
    },
    onError: (error) => {
      console.error("Error deleting team member:", error);
      toast({
        title: "Error",
        description: "Failed to remove team member",
        variant: "destructive",
      });
      setDeletingId(null);
    },
  });

  return {
    teamMembers,
    isLoading,
    deletingId,
    addMemberMutation,
    deleteMemberMutation,
  };
};