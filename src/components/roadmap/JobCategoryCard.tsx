import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { JobList } from "./JobList";

interface JobCategoryProps {
  title: string;
  roles: string[];
}

export const JobCategoryCard = ({ title, roles }: JobCategoryProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ScrollArea className="h-[300px] pr-4">
        <JobList roles={roles} />
      </ScrollArea>
    </Card>
  );
};