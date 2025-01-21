import { JobRoadmap } from "@/types/roadmap";

export const mobileRoadmap: JobRoadmap = {
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
};