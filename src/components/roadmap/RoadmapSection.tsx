import React from 'react';
import { ChevronRight, Layers, Palette, Users, LayoutGrid } from "lucide-react";
import { RoadmapStep } from './RoadmapStep';
import type { RoadmapSection as RoadmapSectionType } from '@/types/roadmap';

interface RoadmapSectionProps {
  section: RoadmapSectionType;
  isLastSection: boolean;
}

export const RoadmapSection = ({ section, isLastSection }: RoadmapSectionProps) => {
  // Helper function to get the appropriate icon for each section
  const getSectionIcon = (sectionTitle: string) => {
    const title = sectionTitle.toLowerCase();
    if (title.includes('design fundamentals')) return Layers;
    if (title.includes('tools')) return Palette;
    if (title.includes('user research')) return Users;
    if (title.includes('advanced')) return LayoutGrid;
    return ChevronRight;
  };

  const SectionIcon = getSectionIcon(section.title);

  return (
    <div className={`mb-${isLastSection ? '0' : '12'}`}>
      <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
        <SectionIcon className="h-6 w-6" />
        {section.title}
      </h3>
      <div className="space-y-6">
        {section.steps.map((step, stepIndex) => (
          <RoadmapStep 
            key={step.id} 
            step={step} 
            isLastStep={stepIndex === section.steps.length - 1} 
          />
        ))}
      </div>
    </div>
  );
};