import { LeanCanvasFormValues } from "./LeanCanvasFields";

interface LeanCanvasDisplayProps {
  data: LeanCanvasFormValues;
}

export const LeanCanvasDisplay = ({ data }: LeanCanvasDisplayProps) => {
  return (
    <div className="mt-8 p-6 border rounded-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="p-4 border rounded">
            <h3 className="font-semibold capitalize mb-2">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <p className="text-sm text-muted-foreground">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};