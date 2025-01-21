import React from 'react';
import { Badge } from "@/components/ui/badge";

interface RoadmapStepSkillsProps {
  skills: string[];
}

export const RoadmapStepSkills = ({ skills }: RoadmapStepSkillsProps) => {
  return (
    <div className="mb-4">
      <h5 className="font-medium mb-2">Skills to Learn:</h5>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};