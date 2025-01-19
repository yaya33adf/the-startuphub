import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { WordPressTemplate as TemplateType } from "./types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface WordPressTemplateProps {
  template: TemplateType;
  onDownload: (templateId: number) => void;
}

export const WordPressTemplate = ({ template, onDownload }: WordPressTemplateProps) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="relative group overflow-hidden rounded-lg">
        {/* Template Preview */}
        <div 
          className="aspect-video w-full overflow-hidden cursor-pointer"
          onClick={() => setShowPreview(true)}
        >
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

      {/* Preview Modal */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{template.name}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img 
              src={template.previewImage} 
              alt={template.name}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-muted-foreground">{template.description}</p>
              
              <h3 className="text-lg font-semibold">Features</h3>
              <ul className="list-disc list-inside space-y-2">
                {template.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">{feature}</li>
                ))}
              </ul>

              <Button 
                onClick={() => {
                  onDownload(template.id);
                  setShowPreview(false);
                }}
                className="w-full gap-2 mt-4"
              >
                <Download className="w-4 h-4" />
                Download Template
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};