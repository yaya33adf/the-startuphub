import { useParams } from "react-router-dom";
import { PageSEO } from "@/components/seo/PageSEO";
import { RoadmapVisualization } from "./RoadmapVisualization";

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

interface JobRoadmap {
  title: string;
  description: string;
  sections: RoadmapSection[];
}

const roadmaps: Record<string, JobRoadmap> = {
  "frontend-developer": {
    title: "Frontend Developer Roadmap",
    description: "A comprehensive guide to becoming a Frontend Developer",
    sections: [
      {
        title: "1. Internet & Web Fundamentals",
        steps: [
          {
            id: "internet-basics",
            title: "Internet Basics",
            description: "Learn how the internet works, DNS, hosting, and HTTP/HTTPS",
            status: "required",
            skills: ["DNS", "Hosting", "HTTP/HTTPS", "Browsers", "Domain Names"],
            resources: [
              { name: "MDN: How the Internet works", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work" },
              { name: "Web.dev", url: "https://web.dev/learn" }
            ]
          },
          {
            id: "web-security",
            title: "Web Security Basics",
            description: "Understand fundamental web security concepts",
            status: "required",
            skills: ["HTTPS", "CORS", "Content Security Policy", "OWASP Security Risks"],
            resources: [
              { name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" }
            ]
          }
        ]
      },
      {
        title: "2. HTML & CSS Fundamentals",
        steps: [
          {
            id: "html5",
            title: "HTML5",
            description: "Master modern HTML5 elements and best practices",
            status: "required",
            skills: ["Semantic HTML", "Forms", "Media Elements", "Accessibility"],
            resources: [
              { name: "MDN HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
              { name: "HTML5 Doctor", url: "http://html5doctor.com/" }
            ]
          },
          {
            id: "css3",
            title: "CSS3",
            description: "Learn modern CSS features and responsive design",
            status: "required",
            skills: ["Flexbox", "Grid", "Animations", "Media Queries", "CSS Variables"],
            resources: [
              { name: "CSS-Tricks", url: "https://css-tricks.com/" },
              { name: "MDN CSS Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS" }
            ]
          }
        ]
      },
      {
        title: "3. JavaScript & Programming Fundamentals",
        steps: [
          {
            id: "js-basics",
            title: "JavaScript Fundamentals",
            description: "Master core JavaScript concepts and ES6+ features",
            status: "required",
            skills: ["Variables", "Functions", "Objects", "Arrays", "ES6+", "Async/Await"],
            resources: [
              { name: "JavaScript.info", url: "https://javascript.info/" },
              { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" }
            ]
          },
          {
            id: "dom-manipulation",
            title: "DOM Manipulation",
            description: "Learn how to interact with the Document Object Model",
            status: "required",
            skills: ["Selectors", "Events", "DOM Methods", "Event Bubbling"],
            resources: [
              { name: "MDN DOM Guide", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" }
            ]
          }
        ]
      },
      {
        title: "4. Frontend Frameworks & Tools",
        steps: [
          {
            id: "react",
            title: "React",
            description: "Learn React and its ecosystem",
            status: "recommended",
            skills: ["Components", "Props", "State", "Hooks", "Context", "Redux"],
            resources: [
              { name: "React Documentation", url: "https://react.dev" },
              { name: "React Tutorial", url: "https://react.dev/learn" }
            ]
          },
          {
            id: "build-tools",
            title: "Build Tools",
            description: "Understanding modern build tools and module bundlers",
            status: "recommended",
            skills: ["npm", "Webpack", "Vite", "ESLint", "Prettier"],
            resources: [
              { name: "Vite Guide", url: "https://vitejs.dev/guide/" }
            ]
          }
        ]
      }
    ]
  },
  // Add more roadmaps here...
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
      
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{roadmap.title}</h1>
        <p className="text-lg text-muted-foreground mb-12">{roadmap.description}</p>

        <RoadmapVisualization sections={roadmap.sections} />
      </div>
    </div>
  );
};