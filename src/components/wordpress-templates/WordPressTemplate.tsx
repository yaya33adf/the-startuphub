import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { WordPressTemplate as TemplateType } from "./types";

interface WordPressTemplateProps {
  template: TemplateType;
  onDownload: (templateId: number) => void;
}

export const WordPressTemplate = ({ template, onDownload }: WordPressTemplateProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      {/* Template Preview */}
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={template.previewImage} 
          alt={template.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Template Info */}
      <div className="p-6 bg-card">
        <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
        <p className="text-muted-foreground mb-4">{template.description}</p>
        
        {/* Features */}
        <div className="space-y-2 mb-4">
          <h4 className="font-medium">Key Features:</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            {template.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <Button 
          onClick={() => onDownload(template.id)}
          className="w-full gap-2"
        >
          <Download className="w-4 h-4" />
          Download Template
        </Button>
      </div>
    </div>
  );
};