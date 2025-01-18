import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { CardTemplate } from "./types";

interface BusinessCardTemplateProps {
  template: CardTemplate;
  onDownload: (templateId: number) => void;
}

export const BusinessCardTemplate = ({ template, onDownload }: BusinessCardTemplateProps) => {
  return (
    <div 
      className={`aspect-[1.75] ${template.bgColor} ${template.pattern || ''} p-6 relative group transition-all duration-300`}
    >
      {/* Business Card Preview */}
      <div 
        id={`template-${template.id}`}
        className={`w-full h-full border-2 ${template.accentColor} flex flex-col justify-between p-4 backdrop-blur-sm bg-opacity-90`}
      >
        <div className={`${template.textColor}`}>
          <h3 className="text-lg font-bold font-mono">STARTUP NAME</h3>
          <p className="text-sm opacity-80 font-mono">INNOVATIVE SOLUTIONS</p>
        </div>
        <div className={`${template.textColor} text-sm opacity-80 space-y-1`}>
          <p className="font-mono">John Developer</p>
          <p className="font-mono">Lead Innovation Officer</p>
          <p className="font-mono">contact@startup.tech</p>
        </div>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <Button 
          variant="secondary" 
          onClick={() => onDownload(template.id)}
          className="gap-2"
        >
          <Download className="w-4 h-4" />
          Download Template
        </Button>
      </div>
    </div>
  );
};