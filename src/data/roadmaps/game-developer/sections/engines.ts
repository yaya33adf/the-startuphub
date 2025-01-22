import { RoadmapSection } from "@/types/roadmap";

export const enginesSection: RoadmapSection = {
  title: "2. Game Engines",
  steps: [
    {
      id: "unity",
      title: "Unity Engine",
      description: "Learn Unity game engine and its ecosystem",
      status: "required",
      skills: [
        "Unity Editor",
        "Unity Scripting",
        "Unity Physics",
        "Unity UI",
        "Asset Management"
      ],
      resources: [
        {
          name: "Unity Documentation",
          url: "https://docs.unity3d.com/"
        },
        {
          name: "Unity Learn Platform",
          url: "https://learn.unity.com/"
        }
      ]
    },
    {
      id: "unreal",
      title: "Unreal Engine",
      description: "Master Unreal Engine for high-end game development",
      status: "recommended",
      skills: [
        "Unreal Editor",
        "Blueprints",
        "C++ in Unreal",
        "Materials and Shaders",
        "Level Design"
      ],
      resources: [
        {
          name: "Unreal Engine Documentation",
          url: "https://docs.unrealengine.com/"
        }
      ]
    }
  ]
};