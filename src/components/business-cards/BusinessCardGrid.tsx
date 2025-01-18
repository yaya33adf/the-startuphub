import { Card, CardContent } from "@/components/ui/card";
import { BusinessCardTemplate } from "./BusinessCardTemplate";
import { templates } from "./templates";

interface BusinessCardGridProps {
  onDownload: (templateId: number) => void;
}

export const BusinessCardGrid = ({ onDownload }: BusinessCardGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <Card key={template.id} className="overflow-hidden group">
          <CardContent className="p-0">
            <BusinessCardTemplate 
              template={template} 
              onDownload={onDownload}
            />
            <div className="p-4">
              <h3 className="font-semibold">{template.name}</h3>
              <p className="text-sm text-muted-foreground">Perfect for modern tech companies</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};