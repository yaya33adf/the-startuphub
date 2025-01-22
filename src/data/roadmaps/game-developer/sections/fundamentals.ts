import { RoadmapSection } from "@/types/roadmap";

export const fundamentalsSection: RoadmapSection = {
  title: "1. Game Development Fundamentals",
  steps: [
    {
      id: "programming-basics",
      title: "Programming Fundamentals",
      description: "Master core programming concepts and a primary language like C++ or C#",
      status: "required",
      skills: [
        "C++",
        "C#",
        "Object-Oriented Programming",
        "Data Structures",
        "Algorithms"
      ],
      resources: [
        {
          name: "C++ Tutorial for Beginners",
          url: "https://www.learncpp.com/"
        },
        {
          name: "Unity Learn - C# Basics",
          url: "https://learn.unity.com/"
        }
      ]
    },
    {
      id: "game-math",
      title: "Game Mathematics",
      description: "Learn essential mathematics for game development",
      status: "required",
      skills: [
        "Linear Algebra",
        "Vector Mathematics",
        "Physics",
        "Trigonometry",
        "Collision Detection"
      ],
      resources: [
        {
          name: "Mathematics for Game Developers",
          url: "https://www.gamedev.net/tutorials/_/technical/math-and-physics/"
        }
      ]
    }
  ]
};