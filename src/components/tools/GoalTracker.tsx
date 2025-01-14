import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Check, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Goal {
  id: string;
  title: string;
  completed: boolean;
}

export const GoalTracker = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState("");
  const { toast } = useToast();

  const addGoal = () => {
    if (!newGoal.trim()) {
      toast({
        title: "Error",
        description: "Please enter a goal description",
        variant: "destructive",
      });
      return;
    }

    const goal: Goal = {
      id: crypto.randomUUID(),
      title: newGoal.trim(),
      completed: false,
    };

    setGoals([...goals, goal]);
    setNewGoal("");
    
    toast({
      title: "Goal Added",
      description: "Your new goal has been added successfully",
    });
  };

  const toggleGoal = (id: string) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const deleteGoal = (id: string) => {
    setGoals(goals.filter((goal) => goal.id !== id));
    toast({
      title: "Goal Deleted",
      description: "The goal has been removed",
    });
  };

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
                  onClick={() => toggleGoal(goal.id)}
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
                onClick={() => deleteGoal(goal.id)}
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