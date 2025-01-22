import { FormData, TeamRole } from "./types";

export const generateTeamRoles = (data: FormData): TeamRole[] => {
  const roles: TeamRole[] = [];
  
  switch (data.project_type) {
    case "web":
      roles.push(
        { role: "Frontend Developer", count: data.project_size === "large" ? 2 : 1 },
        { role: "Backend Developer", count: data.project_size === "large" ? 2 : 1 },
        { role: "UI/UX Designer", count: 1 },
        { role: "Project Manager", count: 1 },
        { role: "DevOps Engineer", count: data.project_size === "large" ? 1 : 0 },
        { role: "QA Engineer", count: data.project_size === "large" ? 1 : 0 },
        { role: "Technical Writer", count: data.project_size === "large" ? 1 : 0 },
        { role: "Security Specialist", count: data.project_size === "large" ? 1 : 0 }
      );
      break;
    case "mobile":
      roles.push(
        { role: "Mobile Developer", count: data.project_size === "large" ? 3 : 2 },
        { role: "UI/UX Designer", count: 1 },
        { role: "QA Engineer", count: 1 },
        { role: "Project Manager", count: 1 },
        { role: "Backend Developer", count: data.project_size === "large" ? 1 : 0 },
        { role: "DevOps Engineer", count: data.project_size === "large" ? 1 : 0 },
        { role: "Technical Writer", count: data.project_size === "large" ? 1 : 0 }
      );
      break;
    case "marketing":
      roles.push(
        { role: "Marketing Manager", count: 1 },
        { role: "Content Creator", count: data.project_size === "large" ? 2 : 1 },
        { role: "Social Media Specialist", count: data.project_size === "large" ? 2 : 1 },
        { role: "SEO Specialist", count: 1 },
        { role: "Email Marketing Specialist", count: 1 },
        { role: "PPC Specialist", count: data.project_size === "large" ? 1 : 0 },
        { role: "Marketing Analytics Expert", count: data.project_size === "large" ? 1 : 0 },
        { role: "Graphic Designer", count: 1 },
        { role: "Copywriter", count: data.project_size === "large" ? 2 : 1 },
        { role: "Brand Strategist", count: data.project_size === "large" ? 1 : 0 },
        { role: "Market Research Analyst", count: data.project_size === "large" ? 1 : 0 },
        { role: "Video Content Producer", count: data.project_size === "large" ? 1 : 0 }
      );
      break;
    case "ecommerce":
      roles.push(
        { role: "E-commerce Manager", count: 1 },
        { role: "Product Manager", count: 1 },
        { role: "Frontend Developer", count: data.project_size === "large" ? 2 : 1 },
        { role: "Backend Developer", count: data.project_size === "large" ? 2 : 1 },
        { role: "UI/UX Designer", count: 1 },
        { role: "Digital Marketing Specialist", count: 1 },
        { role: "Customer Support Specialist", count: data.project_size === "large" ? 2 : 1 },
        { role: "Inventory Manager", count: data.project_size === "large" ? 1 : 0 },
        { role: "Content Writer", count: data.project_size === "large" ? 1 : 0 }
      );
      break;
    case "saas":
      roles.push(
        { role: "Product Manager", count: 1 },
        { role: "Full Stack Developer", count: data.project_size === "large" ? 3 : 2 },
        { role: "UI/UX Designer", count: 1 },
        { role: "DevOps Engineer", count: 1 },
        { role: "QA Engineer", count: data.project_size === "large" ? 2 : 1 },
        { role: "Technical Writer", count: data.project_size === "large" ? 1 : 0 },
        { role: "Customer Success Manager", count: data.project_size === "large" ? 1 : 0 },
        { role: "Security Engineer", count: data.project_size === "large" ? 1 : 0 }
      );
      break;
    case "marketplace":
      roles.push(
        { role: "Marketplace Manager", count: 1 },
        { role: "Full Stack Developer", count: data.project_size === "large" ? 3 : 2 },
        { role: "UI/UX Designer", count: 1 },
        { role: "Community Manager", count: 1 },
        { role: "Customer Support Lead", count: 1 },
        { role: "Marketing Specialist", count: data.project_size === "large" ? 2 : 1 },
        { role: "Content Moderator", count: data.project_size === "large" ? 2 : 1 },
        { role: "Analytics Specialist", count: data.project_size === "large" ? 1 : 0 }
      );
      break;
    default:
      roles.push(
        { role: "Project Manager", count: 1 },
        { role: "Team Lead", count: 1 },
        { role: "Team Member", count: data.project_size === "large" ? 3 : 2 }
      );
  }
  
  // Filter out roles with count 0
  return roles.filter(role => role.count > 0);
};