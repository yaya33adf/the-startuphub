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
          { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
          { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" }
        ]
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
    ]
  },
  "backend-developer": {
    title: "Backend Developer Roadmap",
    description: "Master backend development and server-side technologies",
    steps: [
      {
        title: "1. Programming Fundamentals",
        description: "Master a backend programming language and its ecosystem",
        skills: ["Python", "Java", "Node.js", "Data Structures", "Algorithms"],
        resources: [
          { name: "Python Documentation", url: "https://docs.python.org/" },
          { name: "Node.js Documentation", url: "https://nodejs.org/docs" }
        ]
      },
      {
        title: "2. Databases",
        description: "Learn database management and querying",
        skills: ["SQL", "PostgreSQL", "MongoDB", "Redis", "Database Design"],
        resources: [
          { name: "PostgreSQL Tutorial", url: "https://www.postgresql.org/docs/tutorial/" },
          { name: "MongoDB University", url: "https://university.mongodb.com/" }
        ]
      },
      {
        title: "3. APIs and Web Services",
        description: "Understanding API design and implementation",
        skills: ["REST", "GraphQL", "API Security", "OAuth", "JWT"],
        resources: [
          { name: "REST API Tutorial", url: "https://restfulapi.net/" },
          { name: "GraphQL Documentation", url: "https://graphql.org/learn/" }
        ]
      }
    ]
  },
  "ui-ux-designer": {
    title: "UI/UX Designer Roadmap",
    description: "Learn to create beautiful and functional user interfaces",
    steps: [
      {
        title: "1. Design Fundamentals",
        description: "Master the basic principles of design",
        skills: ["Color Theory", "Typography", "Layout Design", "Visual Hierarchy"],
        resources: [
          { name: "Design Principles", url: "https://principles.design/" },
          { name: "Material Design", url: "https://material.io/design" }
        ]
      },
      {
        title: "2. UX Research",
        description: "Learn user research methods and practices",
        skills: ["User Research", "Personas", "User Journey Mapping", "Usability Testing"],
        resources: [
          { name: "Nielsen Norman Group", url: "https://www.nngroup.com/" },
          { name: "UX Research Guide", url: "https://www.usability.gov/what-and-why/user-research.html" }
        ]
      },
      {
        title: "3. Design Tools",
        description: "Master essential design tools",
        skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
        resources: [
          { name: "Figma Tutorials", url: "https://www.figma.com/resources/learn-design/" },
          { name: "Adobe XD Tutorials", url: "https://www.adobe.com/products/xd/learn.html" }
        ]
      }
    ]
  },
  "data-scientist": {
    title: "Data Scientist Roadmap",
    description: "Begin your journey into data science and analytics",
    steps: [
      {
        title: "1. Mathematics and Statistics",
        description: "Build a strong foundation in math and stats",
        skills: ["Linear Algebra", "Calculus", "Probability", "Statistical Analysis"],
        resources: [
          { name: "Khan Academy", url: "https://www.khanacademy.org/" },
          { name: "Statistics.com", url: "https://statistics.com/" }
        ]
      },
      {
        title: "2. Programming for Data Science",
        description: "Learn programming languages for data analysis",
        skills: ["Python", "R", "SQL", "Jupyter Notebooks"],
        resources: [
          { name: "DataCamp", url: "https://www.datacamp.com/" },
          { name: "Kaggle Courses", url: "https://www.kaggle.com/learn" }
        ]
      },
      {
        title: "3. Machine Learning",
        description: "Master machine learning concepts and tools",
        skills: ["Scikit-learn", "TensorFlow", "Neural Networks", "Deep Learning"],
        resources: [
          { name: "Fast.ai", url: "https://www.fast.ai/" },
          { name: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" }
        ]
      }
    ]
  }
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
