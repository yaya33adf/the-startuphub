import React from 'react';
import { RoadmapSection } from './RoadmapSection';
import type { RoadmapSection as RoadmapSectionType } from '@/types/roadmap';

interface RoadmapVisualizationProps {
  sections: RoadmapSectionType[];
}

export const RoadmapVisualization = ({ sections }: RoadmapVisualizationProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {sections.map((section, index) => (
        <RoadmapSection
          key={index}
          section={section}
          isLastSection={index === sections.length - 1}
        />
      ))}
    </div>
  );
};