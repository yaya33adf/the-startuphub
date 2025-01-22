import { RoadmapSection } from "@/types/roadmap";

export const advancedSection: RoadmapSection = {
  title: "3. Advanced Game Development",
  steps: [
    {
      id: "graphics",
      title: "Graphics Programming",
      description: "Understanding computer graphics and rendering",
      status: "recommended",
      skills: [
        "3D Graphics",
        "Shaders",
        "Rendering Pipeline",
        "OpenGL/DirectX",
        "Optimization"
      ],
      resources: [
        {
          name: "Learn OpenGL",
          url: "https://learnopengl.com/"
        }
      ]
    },
    {
      id: "game-design",
      title: "Game Design Principles",
      description: "Learn core game design concepts and mechanics",
      status: "required",
      skills: [
        "Game Mechanics",
        "Level Design",
        "User Experience",
        "Game Balance",
        "Playtesting"
      ],
      resources: [
        {
          name: "Game Design Resources",
          url: "https://www.gamedeveloper.com/design/"
        }
      ]
    }
  ]
};