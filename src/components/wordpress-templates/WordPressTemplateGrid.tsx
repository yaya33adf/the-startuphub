import { Card, CardContent } from "@/components/ui/card";
import { WordPressTemplate } from "./WordPressTemplate";
import { templates } from "./templates";

interface WordPressTemplateGridProps {
  onDownload: (templateId: number) => void;
}

export const WordPressTemplateGrid = ({ onDownload }: WordPressTemplateGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <WordPressTemplate 
              template={template} 
              onDownload={onDownload}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};