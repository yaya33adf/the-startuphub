import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GoalForm } from "./goal-tracker/GoalForm";
import { GoalList } from "./goal-tracker/GoalList";

interface Goal {
  id: string;
  title: string;
  completed: boolean;
  user_id: string;
}

export const GoalTracker = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
      }
    };
    getCurrentUser();
  }, []);

  const { data: goals = [], isLoading } = useQuery({
    queryKey: ['goals'],
    queryFn: async () => {
      console.log('Fetching goals...');
      const { data, error } = await supabase
        .from('goals')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching goals:', error);
        toast({
          title: "Error",
          description: "Failed to load goals",
          variant: "destructive",
        });
        throw error;
      }

      console.log('Goals fetched:', data);
      return data as Goal[];
    },
  });

  const addGoalMutation = useMutation({
    mutationFn: async (title: string) => {
      if (!userId) {
        throw new Error("User not authenticated");
      }

      console.log('Adding goal:', title);
      const { data, error } = await supabase
        .from('goals')
        .insert([{ 
          title, 
          completed: false,
          user_id: userId 
        }])
        .select()
        .single();

      if (error) {
        console.error('Error adding goal:', error);
        throw error;
      }
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] });
      toast({
        title: "Goal Added",
        description: "Your new goal has been added successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to add goal",
        variant: "destructive",
      });
    },
  });

  const toggleGoalMutation = useMutation({
    mutationFn: async ({ id, completed }: { id: string; completed: boolean }) => {
      console.log('Toggling goal:', id, completed);
      const { data, error } = await supabase
        .from('goals')
        .update({ completed })
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error toggling goal:', error);
        throw error;
      }
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update goal",
        variant: "destructive",
      });
    },
  });

  const deleteGoalMutation = useMutation({
    mutationFn: async (id: string) => {
      console.log('Deleting goal:', id);
      const { error } = await supabase
        .from('goals')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting goal:', error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] });
      toast({
        title: "Goal Deleted",
        description: "The goal has been removed",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete goal",
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return <div className="text-center py-8">Loading goals...</div>;
  }

  return (
    <div className="space-y-4 mt-4">
      <GoalForm onSubmit={(title) => addGoalMutation.mutate(title)} />
      <GoalList
        goals={goals}
        onToggle={(id, completed) => toggleGoalMutation.mutate({ id, completed })}
        onDelete={(id) => deleteGoalMutation.mutate(id)}
      />
    </div>
  );
};