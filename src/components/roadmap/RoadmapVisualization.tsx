import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Layers, Palette, Users, LayoutGrid } from "lucide-react";

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  skills: string[];
  status?: 'required' | 'recommended' | 'optional';
  resources?: {
    name: string;
    url: string;
  }[];
}

interface RoadmapSection {
  title: string;
  steps: RoadmapStep[];
}

interface RoadmapVisualizationProps {
  sections: RoadmapSection[];
}

export const RoadmapVisualization = ({ sections }: RoadmapVisualizationProps) => {
  // Helper function to get the appropriate icon for each section
  const getSectionIcon = (sectionTitle: string) => {
    const title = sectionTitle.toLowerCase();
    if (title.includes('design fundamentals')) return Layers;
    if (title.includes('tools')) return Palette;
    if (title.includes('user research')) return Users;
    if (title.includes('advanced')) return LayoutGrid;
    return ChevronRight;
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {sections.map((section, sectionIndex) => {
        const SectionIcon = getSectionIcon(section.title);
        
        return (
          <div key={sectionIndex} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
              <SectionIcon className="h-6 w-6" />
              {section.title}
            </h3>
            <div className="space-y-6">
              {section.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="relative">
                  {/* Connector Line */}
                  {stepIndex < section.steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
                  )}
                  
                  <Card className="relative z-10 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <ChevronRight className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold">{step.title}</h4>
                          {step.status && (
                            <Badge variant={
                              step.status === 'required' ? 'default' :
                              step.status === 'recommended' ? 'secondary' : 'outline'
                            }>
                              {step.status}
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        
                        {step.skills.length > 0 && (
                          <div className="mb-4">
                            <h5 className="font-medium mb-2">Skills to Learn:</h5>
                            <div className="flex flex-wrap gap-2">
                              {step.skills.map((skill, index) => (
                                <Badge key={index} variant="outline">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {step.resources && step.resources.length > 0 && (
                          <div>
                            <h5 className="font-medium mb-2">Learning Resources:</h5>
                            <ul className="space-y-1">
                              {step.resources.map((resource, index) => (
                                <li key={index}>
                                  <a
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                  >
                                    {resource.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};