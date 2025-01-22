import { Users } from "lucide-react";
import { Card } from "@/components/ui/card";

interface EmptyInvestorStateProps {
  hasFilters: boolean;
}

export const EmptyInvestorState = ({ hasFilters }: EmptyInvestorStateProps) => {
  return (
    <Card className="p-8 text-center">
      <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
      <h3 className="text-xl font-semibold mb-2">No Investors Found</h3>
      <p className="text-muted-foreground">
        {hasFilters
          ? `No investors found with the current filters. Try different search terms or clear the filters.`
          : "There are currently no registered investors. Use the Add Investor button to create one."}
      </p>
    </Card>
  );
};