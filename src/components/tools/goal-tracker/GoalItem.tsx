import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Trash2 } from "lucide-react";

interface GoalItemProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export const GoalItem = ({ id, title, completed, onToggle, onDelete }: GoalItemProps) => {
  return (
    <Card className="bg-white">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onToggle(id, !completed)}
            className={completed ? "text-green-500" : "text-gray-400"}
          >
            <Check className="h-5 w-5" />
          </Button>
          <span className={`flex-1 ${completed ? "line-through text-gray-400" : ""}`}>
            {title}
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(id)}
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </CardContent>
    </Card>
  );
};