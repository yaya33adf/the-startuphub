import { cn } from "@/lib/utils";

interface BookTitleCardProps {
  title: string;
  className?: string;
}

export const BookTitleCard = ({ title, className }: BookTitleCardProps) => {
  return (
    <div
      className={cn(
        "p-3 rounded-lg border bg-card hover:shadow-md transition-shadow",
        className
      )}
    >
      {title}
    </div>
  );
};