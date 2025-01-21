import { JobRoadmap } from "@/types/roadmap";

export const roadmaps: Record<string, JobRoadmap> = {
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
  "backend-developer": {
    title: "Backend Developer Roadmap",
    description: "A comprehensive guide to becoming a Backend Developer",
    sections: [
      {
        title: "1. Programming Fundamentals",
        steps: [
          {
            id: "programming-basics",
            title: "Programming Basics",
            description: "Learn core programming concepts and a backend language",
            status: "required",
            skills: ["Variables", "Data Types", "Functions", "OOP", "Algorithms"],
            resources: [
              { name: "Python.org", url: "https://www.python.org/about/gettingstarted/" },
              { name: "Node.js Docs", url: "https://nodejs.org/docs/latest/api/" }
            ]
          }
        ]
      },
      {
        title: "2. Databases",
        steps: [
          {
            id: "databases",
            title: "Database Management",
            description: "Learn SQL and database design principles",
            status: "required",
            skills: ["SQL", "Database Design", "Normalization", "Indexing"],
            resources: [
              { name: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" },
              { name: "MongoDB University", url: "https://university.mongodb.com/" }
            ]
          }
        ]
      }
    ]
  },
  "uiux-designer": {
    title: "UI/UX Designer Roadmap",
    description: "A comprehensive guide to becoming a UI/UX Designer",
    sections: [
      {
        title: "1. Design Fundamentals",
        steps: [
          {
            id: "design-basics",
            title: "Design Basics",
            description: "Learn fundamental design principles and concepts",
            status: "required",
            skills: ["Color Theory", "Typography", "Layout", "Visual Hierarchy", "Design Systems"],
            resources: [
              { name: "Design Principles", url: "https://www.designprinciples.com" },
              { name: "Figma Design Course", url: "https://www.figma.com/resources/learn-design" }
            ]
          },
          {
            id: "user-research",
            title: "User Research",
            description: "Master user research methodologies and techniques",
            status: "required",
            skills: ["User Interviews", "Surveys", "Usability Testing", "Data Analysis"],
            resources: [
              { name: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/user-research-methods" }
            ]
          }
        ]
      },
      {
        title: "2. Design Tools",
        steps: [
          {
            id: "design-software",
            title: "Design Software",
            description: "Learn industry-standard design tools",
            status: "required",
            skills: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
            resources: [
              { name: "Figma Tutorials", url: "https://www.figma.com/resources/learn-design" },
              { name: "Adobe XD Tutorials", url: "https://www.adobe.com/products/xd/learn" }
            ]
          }
        ]
      }
    ]
  },
  "data-scientist": {
    title: "Data Scientist Roadmap",
    description: "A comprehensive guide to becoming a Data Scientist",
    sections: [
      {
        title: "1. Mathematics & Statistics",
        steps: [
          {
            id: "math-fundamentals",
            title: "Mathematical Foundations",
            description: "Master essential mathematical concepts",
            status: "required",
            skills: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
            resources: [
              { name: "Khan Academy Math", url: "https://www.khanacademy.org/math" },
              { name: "Statistics Course", url: "https://www.coursera.org/learn/statistics" }
            ]
          }
        ]
      },
      {
        title: "2. Programming & Tools",
        steps: [
          {
            id: "programming-tools",
            title: "Programming Languages & Tools",
            description: "Learn essential programming languages and tools",
            status: "required",
            skills: ["Python", "R", "SQL", "Jupyter Notebooks", "Git"],
            resources: [
              { name: "Python for Data Science", url: "https://www.python.org/about/gettingstarted" },
              { name: "R Programming", url: "https://www.r-project.org/about.html" }
            ]
          }
        ]
      }
    ]
  },
  "devops-engineer": {
    title: "DevOps Engineer Roadmap",
    description: "A comprehensive guide to becoming a DevOps Engineer",
    sections: [
      {
        title: "1. Operating Systems & Linux",
        steps: [
          {
            id: "os-fundamentals",
            title: "Operating System Fundamentals",
            description: "Learn Linux and operating system concepts",
            status: "required",
            skills: ["Linux Administration", "Shell Scripting", "System Architecture"],
            resources: [
              { name: "Linux Journey", url: "https://linuxjourney.com" },
              { name: "Shell Scripting", url: "https://www.shellscript.sh" }
            ]
          }
        ]
      },
      {
        title: "2. Cloud & Infrastructure",
        steps: [
          {
            id: "cloud-platforms",
            title: "Cloud Platforms",
            description: "Master cloud platforms and infrastructure",
            status: "required",
            skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
            resources: [
              { name: "AWS Training", url: "https://aws.amazon.com/training" },
              { name: "Docker Guide", url: "https://docs.docker.com/get-started" }
            ]
          }
        ]
      }
    ]
  },
  "mobile-developer": {
    title: "Mobile Developer Roadmap",
    description: "A comprehensive guide to becoming a Mobile Developer",
    sections: [
      {
        title: "1. Mobile Development Fundamentals",
        steps: [
          {
            id: "mobile-basics",
            title: "Mobile Development Basics",
            description: "Learn mobile development fundamentals",
            status: "required",
            skills: ["iOS (Swift)", "Android (Kotlin)", "React Native", "Flutter"],
            resources: [
              { name: "iOS Development", url: "https://developer.apple.com/tutorials" },
              { name: "Android Development", url: "https://developer.android.com/courses" }
            ]
          }
        ]
      },
      {
        title: "2. Mobile UI & UX",
        steps: [
          {
            id: "mobile-design",
            title: "Mobile Design Patterns",
            description: "Master mobile UI/UX design patterns",
            status: "required",
            skills: ["Material Design", "iOS Design Guidelines", "Responsive Design"],
            resources: [
              { name: "Material Design", url: "https://material.io/design" },
              { name: "iOS Design Guidelines", url: "https://developer.apple.com/design" }
            ]
          }
        ]
      }
    ]
  },
  "cybersecurity-analyst": {
    title: "Cybersecurity Analyst Roadmap",
    description: "A comprehensive guide to becoming a Cybersecurity Analyst",
    sections: [
      {
        title: "1. Security Fundamentals",
        steps: [
          {
            id: "security-basics",
            title: "Security Basics",
            description: "Learn fundamental security concepts",
            status: "required",
            skills: ["Network Security", "Cryptography", "Security Protocols", "Risk Assessment"],
            resources: [
              { name: "CompTIA Security+", url: "https://www.comptia.org/certifications/security" },
              { name: "Cybrary", url: "https://www.cybrary.it" }
            ]
          }
        ]
      },
      {
        title: "2. Security Tools & Practices",
        steps: [
          {
            id: "security-tools",
            title: "Security Tools",
            description: "Master security tools and best practices",
            status: "required",
            skills: ["Wireshark", "Metasploit", "Nmap", "Burp Suite"],
            resources: [
              { name: "Kali Linux", url: "https://www.kali.org/learn" },
              { name: "OWASP", url: "https://owasp.org/www-project-top-ten" }
            ]
          }
        ]
      }
    ]
  }
};
