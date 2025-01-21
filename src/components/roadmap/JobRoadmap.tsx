import { useParams } from "react-router-dom";
import { PageSEO } from "@/components/seo/PageSEO";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RoadmapStep {
  title: string;
  description: string;
  skills: string[];
  resources?: {
    name: string;
    url: string;
  }[];
}

interface JobRoadmap {
  title: string;
  description: string;
  steps: RoadmapStep[];
}

// This is a sample roadmap for Frontend Developer
// You can expand this with more detailed roadmaps for each role
const roadmaps: Record<string, JobRoadmap> = {
  "frontend-developer": {
    title: "Frontend Developer Roadmap",
    description: "A comprehensive guide to becoming a Frontend Developer",
    steps: [
      {
        title: "1. Learn the Basics",
        description: "Start with the fundamental building blocks of web development",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)"],
        resources: [
          {
            name: "MDN Web Docs",
            url: "https://developer.mozilla.org/",
          },
          {
            name: "freeCodeCamp",
            url: "https://www.freecodecamp.org/",
          },
        ],
      },
      {
        title: "2. CSS Frameworks & Preprocessors",
        description: "Learn popular CSS frameworks and preprocessors",
        skills: ["Tailwind CSS", "Bootstrap", "Sass/SCSS", "CSS Modules"],
        resources: [
          {
            name: "Tailwind CSS Documentation",
            url: "https://tailwindcss.com/docs",
          },
        ],
      },
      {
        title: "3. JavaScript Frameworks",
        description: "Master popular JavaScript frameworks",
        skills: ["React", "Vue.js", "Angular", "State Management (Redux, Vuex)"],
        resources: [
          {
            name: "React Documentation",
            url: "https://react.dev",
          },
        ],
      },
      {
        title: "4. Version Control & Development Tools",
        description: "Learn essential development tools",
        skills: ["Git", "GitHub", "VS Code", "Chrome DevTools"],
        resources: [
          {
            name: "Git Documentation",
            url: "https://git-scm.com/doc",
          },
        ],
      },
      {
        title: "5. Build Tools & Module Bundlers",
        description: "Understanding modern build tools",
        skills: ["Webpack", "Vite", "npm/yarn", "Babel"],
        resources: [
          {
            name: "Vite Documentation",
            url: "https://vitejs.dev/",
          },
        ],
      },
    ],
  },
  // Add more roadmaps for other roles here
};

export const JobRoadmap = () => {
  const { jobId } = useParams();
  const roadmap = roadmaps[jobId as string];

  if (!roadmap) {
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-bold text-center">Roadmap not found</h1>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <PageSEO 
        title={roadmap.title}
        description={roadmap.description}
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{roadmap.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{roadmap.description}</p>

        <div className="space-y-6">
          {roadmap.steps.map((step, index) => (
            <Card key={index} className="p-6">
              <h2 className="text-xl font-semibold mb-3">{step.title}</h2>
              <p className="text-muted-foreground mb-4">{step.description}</p>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2">Required Skills:</h3>
                <ScrollArea className="h-[100px]">
                  <ul className="list-disc list-inside space-y-1">
                    {step.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-sm">{skill}</li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>

              {step.resources && (
                <div>
                  <h3 className="font-medium mb-2">Learning Resources:</h3>
                  <ul className="space-y-1">
                    {step.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          {resource.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};