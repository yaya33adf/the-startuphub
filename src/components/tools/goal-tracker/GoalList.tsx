import { GoalItem } from "./GoalItem";

interface Goal {
  id: string;
  title: string;
  completed: boolean;
  user_id: string;
}

interface GoalListProps {
  goals: Goal[];
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export const GoalList = ({ goals, onToggle, onDelete }: GoalListProps) => {
  if (goals.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>No goals added yet. Start by adding a new goal above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          id={goal.id}
          title={goal.title}
          completed={goal.completed}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};