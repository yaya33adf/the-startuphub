import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Brain, Target, Plus, Minus } from "lucide-react";
import html2canvas from "html2canvas";

export const SWOTAnalysis = () => {
  const [strengths, setStrengths] = useState<string[]>(['']);
  const [weaknesses, setWeaknesses] = useState<string[]>(['']);
  const [opportunities, setOpportunities] = useState<string[]>(['']);
  const [threats, setThreats] = useState<string[]>(['']);
  const { toast } = useToast();

  const handleAddItem = (section: 'strengths' | 'weaknesses' | 'opportunities' | 'threats') => {
    switch (section) {
      case 'strengths':
        setStrengths([...strengths, '']);
        break;
      case 'weaknesses':
        setWeaknesses([...weaknesses, '']);
        break;
      case 'opportunities':
        setOpportunities([...opportunities, '']);
        break;
      case 'threats':
        setThreats([...threats, '']);
        break;
    }
  };

  const handleRemoveItem = (section: 'strengths' | 'weaknesses' | 'opportunities' | 'threats', index: number) => {
    switch (section) {
      case 'strengths':
        setStrengths(strengths.filter((_, i) => i !== index));
        break;
      case 'weaknesses':
        setWeaknesses(weaknesses.filter((_, i) => i !== index));
        break;
      case 'opportunities':
        setOpportunities(opportunities.filter((_, i) => i !== index));
        break;
      case 'threats':
        setThreats(threats.filter((_, i) => i !== index));
        break;
    }
  };

  const handleUpdateItem = (
    section: 'strengths' | 'weaknesses' | 'opportunities' | 'threats',
    index: number,
    value: string
  ) => {
    switch (section) {
      case 'strengths':
        setStrengths(strengths.map((item, i) => i === index ? value : item));
        break;
      case 'weaknesses':
        setWeaknesses(weaknesses.map((item, i) => i === index ? value : item));
        break;
      case 'opportunities':
        setOpportunities(opportunities.map((item, i) => i === index ? value : item));
        break;
      case 'threats':
        setThreats(threats.map((item, i) => i === index ? value : item));
        break;
    }
  };

  const downloadAsImage = async () => {
    const element = document.getElementById('swot-analysis');
    if (!element) return;

    try {
      const canvas = await html2canvas(element);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'swot-analysis.png';
      link.click();
      
      toast({
        title: "Success",
        description: "SWOT Analysis downloaded successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download SWOT Analysis",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">SWOT Analysis Tool</h1>
        <Button onClick={downloadAsImage}>Download as Image</Button>
      </div>

      <div id="swot-analysis" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Strengths
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {strengths.map((strength, index) => (
              <div key={index} className="flex gap-2">
                <Textarea
                  value={strength}
                  onChange={(e) => handleUpdateItem('strengths', index, e.target.value)}
                  placeholder="Enter a strength..."
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleRemoveItem('strengths', index)}
                  disabled={strengths.length === 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => handleAddItem('strengths')}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Strength
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Minus className="h-5 w-5" />
              Weaknesses
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {weaknesses.map((weakness, index) => (
              <div key={index} className="flex gap-2">
                <Textarea
                  value={weakness}
                  onChange={(e) => handleUpdateItem('weaknesses', index, e.target.value)}
                  placeholder="Enter a weakness..."
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleRemoveItem('weaknesses', index)}
                  disabled={weaknesses.length === 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => handleAddItem('weaknesses')}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Weakness
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="flex gap-2">
                <Textarea
                  value={opportunity}
                  onChange={(e) => handleUpdateItem('opportunities', index, e.target.value)}
                  placeholder="Enter an opportunity..."
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleRemoveItem('opportunities', index)}
                  disabled={opportunities.length === 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => handleAddItem('opportunities')}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Opportunity
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Threats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {threats.map((threat, index) => (
              <div key={index} className="flex gap-2">
                <Textarea
                  value={threat}
                  onChange={(e) => handleUpdateItem('threats', index, e.target.value)}
                  placeholder="Enter a threat..."
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleRemoveItem('threats', index)}
                  disabled={threats.length === 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => handleAddItem('threats')}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Threat
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};