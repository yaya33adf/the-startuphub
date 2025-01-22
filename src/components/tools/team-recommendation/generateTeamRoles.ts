import { FormData, TeamRole } from "./types";

export const generateTeamRoles = (data: FormData): TeamRole[] => {
  const roles: TeamRole[] = [];
  
  switch (data.project_type) {
    case "web":
      roles.push(
        { role: "Frontend Developer", count: data.project_size === "large" ? 2 : 1 },
        { role: "Backend Developer", count: data.project_size === "large" ? 2 : 1 },
        { role: "UI/UX Designer", count: 1 },
        { role: "Project Manager", count: 1 }
      );
      break;
    case "mobile":
      roles.push(
        { role: "Mobile Developer", count: data.project_size === "large" ? 3 : 2 },
        { role: "UI/UX Designer", count: 1 },
        { role: "QA Engineer", count: 1 },
        { role: "Project Manager", count: 1 }
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
        { role: "Copywriter", count: data.project_size === "large" ? 2 : 1 }
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