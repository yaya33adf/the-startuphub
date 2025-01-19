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
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

interface WordPressTemplateProps {
  template: TemplateType;
  onDownload: (id: number) => void;
}

export const WordPressTemplate = ({ template, onDownload }: WordPressTemplateProps) => {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = async () => {
    const zip = new JSZip();
    const themeName = template.name.toLowerCase().replace(/\s+/g, '-');

    // Add theme files to zip
    zip.file(`${themeName}/style.css`, template.themeFiles.style);
    zip.file(`${themeName}/functions.php`, template.themeFiles.functions);
    zip.file(`${themeName}/index.php`, template.themeFiles.index);
    zip.file(`${themeName}/header.php`, template.themeFiles.header);
    zip.file(`${themeName}/footer.php`, template.themeFiles.footer);

    // Download screenshot
    try {
      const response = await fetch(template.themeFiles.screenshot);
      const blob = await response.blob();
      zip.file(`${themeName}/screenshot.png`, blob);
    } catch (error) {
      console.error('Error downloading screenshot:', error);
    }

    // Generate and download zip file
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, `${themeName}.zip`);
    
    // Call the original onDownload for tracking/analytics
    onDownload(template.id);
  };

  return (
    <>
      <div className="relative group overflow-hidden rounded-lg">
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
        
        <div className="p-6 bg-card">
          <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
          <p className="text-muted-foreground mb-4">{template.description}</p>
          
          <div className="space-y-2 mb-4">
            <h4 className="font-medium">Key Features:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              {template.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 mb-4">
            <h4 className="font-medium">WordPress Compatibility:</h4>
            <ul className="text-sm text-muted-foreground">
              <li>Version: {template.version}</li>
              <li>Requires WordPress: {template.requires}+</li>
              <li>Tested up to: {template.testedUpTo}</li>
            </ul>
          </div>

          <Button 
            onClick={handleDownload}
            className="w-full gap-2"
          >
            <Download className="w-4 h-4" />
            Download WordPress Theme
          </Button>
        </div>
      </div>

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

              <h3 className="text-lg font-semibold">WordPress Compatibility</h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-muted-foreground">Version: {template.version}</li>
                <li className="text-muted-foreground">Requires WordPress: {template.requires}+</li>
                <li className="text-muted-foreground">Tested up to: {template.testedUpTo}</li>
              </ul>

              <Button 
                onClick={() => {
                  handleDownload();
                  setShowPreview(false);
                }}
                className="w-full gap-2 mt-4"
              >
                <Download className="w-4 h-4" />
                Download WordPress Theme
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};