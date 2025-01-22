import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target } from "lucide-react";
import html2canvas from "html2canvas";
import { SWOTSection } from "./swot/SWOTSection";
import { SWOTDownloadButton } from "./swot/SWOTDownloadButton";

export const SWOTAnalysis = () => {
  const [strengths, setStrengths] = useState<string[]>(['']);
  const [weaknesses, setWeaknesses] = useState<string[]>(['']);
  const [opportunities, setOpportunities] = useState<string[]>(['']);
  const [threats, setThreats] = useState<string[]>(['']);

  const handleAddItem = (section: 'strengths' | 'weaknesses' | 'opportunities' | 'threats') => {
    const setters = {
      strengths: setStrengths,
      weaknesses: setWeaknesses,
      opportunities: setOpportunities,
      threats: setThreats
    };
    setters[section](prev => [...prev, '']);
  };

  const handleRemoveItem = (
    section: 'strengths' | 'weaknesses' | 'opportunities' | 'threats',
    index: number
  ) => {
    const setters = {
      strengths: setStrengths,
      weaknesses: setWeaknesses,
      opportunities: setOpportunities,
      threats: setThreats
    };
    setters[section](prev => prev.filter((_, i) => i !== index));
  };

  const handleUpdateItem = (
    section: 'strengths' | 'weaknesses' | 'opportunities' | 'threats',
    index: number,
    value: string
  ) => {
    const setters = {
      strengths: setStrengths,
      weaknesses: setWeaknesses,
      opportunities: setOpportunities,
      threats: setThreats
    };
    setters[section](prev => prev.map((item, i) => i === index ? value : item));
  };

  const downloadAsImage = async () => {
    const element = document.getElementById('swot-analysis');
    if (!element) return;

    const canvas = await html2canvas(element);
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'swot-analysis.png';
    link.click();
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">SWOT Analysis Tool</h1>
        <SWOTDownloadButton onDownload={downloadAsImage} />
      </div>

      <div id="swot-analysis" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <SWOTSection
              title="Strengths"
              icon={Brain}
              items={strengths}
              onAddItem={() => handleAddItem('strengths')}
              onRemoveItem={(index) => handleRemoveItem('strengths', index)}
              onUpdateItem={(index, value) => handleUpdateItem('strengths', index, value)}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <SWOTSection
              title="Weaknesses"
              icon={Brain}
              items={weaknesses}
              onAddItem={() => handleAddItem('weaknesses')}
              onRemoveItem={(index) => handleRemoveItem('weaknesses', index)}
              onUpdateItem={(index, value) => handleUpdateItem('weaknesses', index, value)}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <SWOTSection
              title="Opportunities"
              icon={Target}
              items={opportunities}
              onAddItem={() => handleAddItem('opportunities')}
              onRemoveItem={(index) => handleRemoveItem('opportunities', index)}
              onUpdateItem={(index, value) => handleUpdateItem('opportunities', index, value)}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <SWOTSection
              title="Threats"
              icon={Target}
              items={threats}
              onAddItem={() => handleAddItem('threats')}
              onRemoveItem={(index) => handleRemoveItem('threats', index)}
              onUpdateItem={(index, value) => handleUpdateItem('threats', index, value)}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};