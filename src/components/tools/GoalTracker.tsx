import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Check, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface Goal {
  id: string;
  title: string;
  completed: boolean;
  user_id: string;
}

export const GoalTracker = () => {
  const [newGoal, setNewGoal] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Get the current user's ID when component mounts
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
      setNewGoal("");
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

  const addGoal = () => {
    if (!newGoal.trim()) {
      toast({
        title: "Error",
        description: "Please enter a goal description",
        variant: "destructive",
      });
      return;
    }

    addGoalMutation.mutate(newGoal.trim());
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading goals...</div>;
  }

  return (
    <div className="space-y-4 mt-4">
      <div className="flex gap-2">
        <Input
          placeholder="Enter your goal..."
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addGoal()}
          className="flex-1"
        />
        <Button onClick={addGoal}>Add Goal</Button>
      </div>

      <div className="space-y-2">
        {goals.map((goal) => (
          <Card key={goal.id} className="bg-white">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleGoalMutation.mutate({ id: goal.id, completed: !goal.completed })}
                  className={goal.completed ? "text-green-500" : "text-gray-400"}
                >
                  <Check className="h-5 w-5" />
                </Button>
                <span
                  className={`flex-1 ${
                    goal.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {goal.title}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteGoalMutation.mutate(goal.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {goals.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          <Target className="mx-auto h-12 w-12 mb-2 text-gray-400" />
          <p>No goals added yet. Start by adding a new goal above!</p>
        </div>
      )}
    </div>
  );
};