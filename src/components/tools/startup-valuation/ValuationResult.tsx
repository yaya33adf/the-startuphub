import { Card } from "@/components/ui/card";

interface ValuationResultProps {
  valuation: number | null;
}

export const ValuationResult = ({ valuation }: ValuationResultProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Valuation Result</h2>
      {valuation !== null ? (
        <div className="space-y-4">
          <p className="text-2xl font-bold text-primary">
            ${valuation.toLocaleString()}
          </p>
          <p className="text-muted-foreground">
            This is an estimated valuation based on the provided metrics.
            Actual valuations may vary significantly based on many other
            factors including market conditions, competitive landscape,
            intellectual property, and team experience.
          </p>
        </div>
      ) : (
        <p className="text-muted-foreground">
          Fill out the form to see your estimated startup valuation.
        </p>
      )}
    </Card>
  );
};