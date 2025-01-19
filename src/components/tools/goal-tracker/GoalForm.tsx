import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface GoalFormProps {
  onSubmit: (title: string) => void;
}

export const GoalForm = ({ onSubmit }: GoalFormProps) => {
  const [newGoal, setNewGoal] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!newGoal.trim()) {
      toast({
        title: "Error",
        description: "Please enter a goal description",
        variant: "destructive",
      });
      return;
    }

    onSubmit(newGoal.trim());
    setNewGoal("");
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="Enter your goal..."
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
        className="flex-1"
      />
      <Button onClick={handleSubmit}>Add Goal</Button>
    </div>
  );
};