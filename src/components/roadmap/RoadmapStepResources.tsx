import React from 'react';

interface Resource {
  name: string;
  url: string;
}

interface RoadmapStepResourcesProps {
  resources: Resource[];
}

export const RoadmapStepResources = ({ resources }: RoadmapStepResourcesProps) => {
  return (
    <div>
      <h5 className="font-medium mb-2">Learning Resources:</h5>
      <ul className="space-y-1">
        {resources.map((resource, index) => (
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
  );
};