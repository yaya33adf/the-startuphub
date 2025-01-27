import { Loader2 } from "lucide-react";

export const MarketLoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-white rounded-lg shadow-sm p-6">
      <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
      <p className="text-muted-foreground">Analyzing market trends...</p>
    </div>
  );
};