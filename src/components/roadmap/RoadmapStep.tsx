import React from 'react';
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RoadmapStepResources } from './RoadmapStepResources';
import { RoadmapStepSkills } from './RoadmapStepSkills';
import type { RoadmapStep as RoadmapStepType } from '@/types/roadmap';

interface RoadmapStepProps {
  step: RoadmapStepType;
  isLastStep: boolean;
}

export const RoadmapStep = ({ step, isLastStep }: RoadmapStepProps) => {
  return (
    <div className="relative">
      {!isLastStep && (
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
              <RoadmapStepSkills skills={step.skills} />
            )}
            
            {step.resources && step.resources.length > 0 && (
              <RoadmapStepResources resources={step.resources} />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};