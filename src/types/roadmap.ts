export interface JobCategory {
  title: string;
  roles: string[];
}

export interface RoadmapStep {
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

export interface RoadmapSection {
  title: string;
  steps: RoadmapStep[];
}

export interface JobRoadmap {
  title: string;
  description: string;
  sections: RoadmapSection[];
}