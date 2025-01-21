import { JobRoadmap } from "@/types/roadmap";

export const devopsRoadmap: JobRoadmap = {
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
};