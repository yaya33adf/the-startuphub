import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { LucideIcon, Minus, Plus } from "lucide-react";

interface SWOTSectionProps {
  title: string;
  icon: LucideIcon;
  items: string[];
  onAddItem: () => void;
  onRemoveItem: (index: number) => void;
  onUpdateItem: (index: number, value: string) => void;
}

export const SWOTSection = ({
  title,
  icon: Icon,
  items,
  onAddItem,
  onRemoveItem,
  onUpdateItem,
}: SWOTSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      
      {items.map((item, index) => (
        <div key={index} className="flex gap-2">
          <Textarea
            value={item}
            onChange={(e) => onUpdateItem(index, e.target.value)}
            placeholder={`Enter a ${title.toLowerCase()} item...`}
            className="flex-1"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => onRemoveItem(index)}
            disabled={items.length === 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
        </div>
      ))}
      
      <Button
        variant="outline"
        onClick={onAddItem}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add {title}
      </Button>
    </div>
  );
};